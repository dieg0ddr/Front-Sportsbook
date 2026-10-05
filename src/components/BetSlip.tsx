import React, { useState } from 'react';
import { OddSelection, UserAccount } from '../types/sportsbook';
import { Trash2, Bookmark, Gift, Minus, Maximize2, X, CheckCircle2, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

interface BetSlipProps {
  selections: OddSelection[];
  onRemoveSelection: (id: string) => void;
  onClearAll: () => void;
  user: UserAccount;
  onOpenAuth: (mode: 'login' | 'register') => void;
  onPlaceBetSuccess: (stake: number, totalWin: number) => void;
}

export const BetSlip: React.FC<BetSlipProps> = ({
  selections,
  onRemoveSelection,
  onClearAll,
  user,
  onOpenAuth,
  onPlaceBetSuccess,
}) => {
  const [slipType, setSlipType] = useState<'simples' | 'multipla' | 'sistema'>('multipla');
  const [stake, setStake] = useState<number>(20);
  const [isMinimized, setIsMinimized] = useState<boolean>(false);
  const [showSuccessToast, setShowSuccessToast] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Bonus calculation based on number of legs
  const getBonusPercent = (count: number) => {
    if (count <= 1) return 0;
    if (count === 2) return 2.5;
    if (count === 3) return 5.0;
    if (count === 4) return 7.5;
    if (count === 5) return 10.0;
    if (count === 6) return 15.0;
    if (count >= 7) return 20.0;
    return 7.5;
  };

  const bonusPercent = slipType === 'multipla' ? getBonusPercent(selections.length) : 0;

  // Total odds calculation
  const totalOdds = selections.reduce((acc, curr) => acc * curr.odds, 1);
  const roundedTotalOdds = selections.length > 0 ? Number(totalOdds.toFixed(2)) : 0;

  // Potential returns
  const baseWin = stake * roundedTotalOdds;
  const bonusAmount = (baseWin - stake) * (bonusPercent / 100);
  const totalPayout = selections.length > 0 ? baseWin + Math.max(0, bonusAmount) : 0;

  const handlePlaceBet = () => {
    setErrorMessage(null);
    if (!user.isLoggedIn) {
      onOpenAuth('login');
      return;
    }

    if (selections.length === 0) {
      setErrorMessage('Adicione seleções para realizar a aposta.');
      return;
    }

    if (stake <= 0) {
      setErrorMessage('Digite um valor de aposta válido.');
      return;
    }

    if (user.balance < stake) {
      setErrorMessage('Saldo insuficiente. Realize um depósito via Pix.');
      return;
    }

    // Trigger celebration
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#00e700', '#10b981', '#34d399', '#ffffff'],
      });
    } catch {
      // ignore
    }

    onPlaceBetSuccess(stake, totalPayout);
    setShowSuccessToast(true);
    setTimeout(() => {
      setShowSuccessToast(false);
    }, 4000);
  };

  return (
    <div className="bg-[#111722] border border-[#1d273a] rounded-xl overflow-hidden shadow-xl select-none">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#141c2b] border-b border-[#1d273a]">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-white tracking-wider uppercase">
            Cupom de Apostas
          </span>
          <span className="w-5 h-5 rounded-full bg-[#00e700] text-black text-[11px] font-extrabold flex items-center justify-center">
            {selections.length}
          </span>
        </div>
        <button
          onClick={() => setIsMinimized(!isMinimized)}
          className="text-zinc-400 hover:text-white p-1 rounded hover:bg-[#1f2b40] transition-colors"
          title={isMinimized ? 'Expandir cupom' : 'Minimizar cupom'}
        >
          {isMinimized ? <Maximize2 className="w-3.5 h-3.5" /> : <Minus className="w-3.5 h-3.5" />}
        </button>
      </div>

      {!isMinimized && (
        <div className="p-3 space-y-3">
          {/* Bet Slip Types Tabs */}
          <div className="grid grid-cols-3 bg-[#0d121c] p-1 rounded-lg border border-[#1a2334] text-xs font-semibold">
            <button
              onClick={() => setSlipType('simples')}
              className={`py-1.5 rounded-md transition-all text-center ${
                slipType === 'simples'
                  ? 'bg-[#182338] text-white shadow-xs'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Simples
            </button>
            <button
              onClick={() => setSlipType('multipla')}
              className={`py-1.5 rounded-md transition-all text-center relative ${
                slipType === 'multipla'
                  ? 'bg-[#182338] text-white shadow-xs'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Múltipla
              {slipType === 'multipla' && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-[#00e700] rounded-full"></span>
              )}
            </button>
            <button
              onClick={() => setSlipType('sistema')}
              className={`py-1.5 rounded-md transition-all text-center ${
                slipType === 'sistema'
                  ? 'bg-[#182338] text-white shadow-xs'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Sistema
            </button>
          </div>

          {/* Success Toast */}
          {showSuccessToast && (
            <div className="bg-[#00e700]/15 border border-[#00e700]/40 p-2.5 rounded-lg flex items-center gap-2 text-xs text-[#00e700] animate-fadeIn">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>Aposta realizada com sucesso! Boa sorte!</span>
            </div>
          )}

          {/* Error Message */}
          {errorMessage && (
            <div className="bg-red-500/15 border border-red-500/40 p-2.5 rounded-lg flex items-center gap-2 text-xs text-red-400">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Selections List */}
          <div className="space-y-2 max-h-[300px] overflow-y-auto pr-0.5">
            {selections.length === 0 ? (
              <div className="py-8 text-center text-zinc-500 text-xs">
                Selecione as cotações nas partidas para montar seu cupom
              </div>
            ) : (
              selections.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#141b2a] border border-[#1e293f] rounded-lg p-2.5 text-xs relative group hover:border-[#2e3e5e] transition-colors"
                >
                  {/* Top line: Match title + Close Button */}
                  <div className="flex items-start justify-between gap-2 pr-4">
                    <div className="flex items-center gap-1.5">
                      <span className="w-5 h-5 rounded-full bg-[#1b253b] text-zinc-300 text-[10px] font-bold flex items-center justify-center shrink-0">
                        {item.matchName.slice(0, 2).toUpperCase()}
                      </span>
                      <span className="font-semibold text-zinc-200 truncate max-w-[190px]">
                        {item.matchName}
                      </span>
                    </div>
                    <button
                      onClick={() => onRemoveSelection(item.id)}
                      className="text-zinc-500 hover:text-red-400 p-0.5 transition-colors absolute top-2 right-2"
                      title="Remover seleção"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Market info */}
                  <div className="text-[11px] text-zinc-400 mt-1 flex items-center gap-1">
                    <span>{item.marketName}</span>
                    <span className="text-zinc-600">·</span>
                    <span className="text-zinc-500">Pré</span>
                  </div>

                  {/* Pick and Odds line */}
                  <div className="flex items-center justify-between mt-2 pt-1 border-t border-[#1b2438]">
                    <div className="flex items-center gap-1.5">
                      <span className="w-4 h-4 rounded-full bg-red-600/30 text-red-400 text-[9px] font-bold flex items-center justify-center">
                        {item.outcomeName.slice(0, 2).toUpperCase()}
                      </span>
                      <span className="font-bold text-white">{item.outcomeName}</span>
                    </div>
                    <span className="font-mono font-bold text-white tabular-nums">
                      {item.odds.toFixed(2).replace('.', ',')}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>

          {selections.length > 0 && (
            <>
              {/* Accumulator Bonus Banner (matching the green card with gift in screenshot) */}
              <div className="bg-[#12221b] border border-[#1b3d2b] p-2.5 rounded-lg text-xs space-y-1.5">
                <div className="flex items-center gap-1.5 text-[#00e700] text-[11px] font-medium">
                  <Gift className="w-3.5 h-3.5 shrink-0" />
                  <span>Mensagem adicional para bônus múltiplos</span>
                </div>
                <div className="flex items-center justify-between text-[11px] font-semibold text-zinc-300">
                  <span className="text-[#00e700] font-mono">{bonusPercent.toFixed(1)}%</span>
                  <span className="text-zinc-500 font-mono">100%</span>
                </div>
                <div className="w-full bg-[#172e21] h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-[#00e700] h-full rounded-full transition-all duration-500"
                    style={{ width: `${Math.min(100, Math.max(7.5, bonusPercent * 5))}%` }}
                  ></div>
                </div>
              </div>

              {/* Clear All action */}
              <div className="flex justify-center">
                <button
                  onClick={onClearAll}
                  className="text-xs text-zinc-400 hover:text-red-400 flex items-center gap-1 py-1 px-2 rounded hover:bg-[#182133] transition-colors"
                >
                  <Trash2 className="w-3 h-3" />
                  <span>Limpar tudo</span>
                </button>
              </div>

              {/* Combo Stake Row */}
              <div className="bg-[#141b2a] border border-[#1e293f] rounded-lg p-2.5 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-zinc-200">Combo</span>
                  {bonusPercent > 0 && (
                    <span className="flex items-center gap-1 bg-[#00e700]/15 text-[#00e700] text-[10px] font-bold px-1.5 py-0.5 rounded">
                      <Gift className="w-2.5 h-2.5" />
                      {bonusPercent}%
                    </span>
                  )}
                  <span className="text-xs text-zinc-400 font-mono">1 x</span>
                </div>

                <div className="flex items-center gap-1">
                  <span className="text-xs text-zinc-400 font-medium">R$</span>
                  <input
                    type="number"
                    min="1"
                    step="5"
                    value={stake}
                    onChange={(e) => setStake(Math.max(1, Number(e.target.value)))}
                    className="w-20 bg-[#0d121c] border border-[#222e47] rounded px-2 py-1 text-right text-xs font-mono font-bold text-white focus:outline-none focus:border-[#00e700]"
                  />
                </div>
              </div>

              {/* Quick stake pills */}
              <div className="flex items-center gap-1.5 justify-end text-[10px]">
                {[10, 20, 50, 100].map((val) => (
                  <button
                    key={val}
                    onClick={() => setStake(val)}
                    className={`px-2 py-0.5 rounded border transition-colors ${
                      stake === val
                        ? 'bg-[#00e700]/20 text-[#00e700] border-[#00e700]/40'
                        : 'bg-[#151d2c] text-zinc-400 border-[#1f2b40] hover:text-white'
                    }`}
                  >
                    +{val}
                  </button>
                ))}
              </div>

              {/* Summary Section (Resumo) */}
              <div className="bg-[#141b2a] border border-[#1e293f] rounded-lg p-3 space-y-1.5 text-xs">
                <div className="text-base font-bold text-white mb-2">Resumo</div>
                <div className="flex justify-between items-center text-zinc-400">
                  <span>Cotações totais</span>
                  <span className="font-mono font-bold text-white tabular-nums">
                    {roundedTotalOdds.toFixed(2).replace('.', ',')}
                  </span>
                </div>
                <div className="flex justify-between items-center text-zinc-400">
                  <span>Valor total de aposta</span>
                  <span className="font-mono text-white tabular-nums">
                    R$ {stake.toFixed(2).replace('.', ',')}
                  </span>
                </div>
                {bonusPercent > 0 && (
                  <div className="flex justify-between items-center text-[#00e700]">
                    <span className="flex items-center gap-1">
                      Ganhos extra <Gift className="w-3 h-3" />
                    </span>
                    <span className="font-mono font-bold tabular-nums">
                      R$ {bonusAmount.toFixed(2).replace('.', ',')}
                    </span>
                  </div>
                )}
                <div className="flex justify-between items-center pt-2 border-t border-[#1e293f] text-sm">
                  <span className="font-semibold text-zinc-300">Ganho total</span>
                  <span className="font-mono font-black text-[#00e700] text-base tabular-nums">
                    R$ {totalPayout.toFixed(2).replace('.', ',')}
                  </span>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="flex items-center gap-2 pt-1">
                <button
                  className="p-2.5 rounded-lg bg-[#141b2a] border border-[#1e293f] text-zinc-400 hover:text-white transition-colors"
                  title="Salvar cupom"
                  onClick={() => alert('Cupom salvo nos seus favoritos!')}
                >
                  <Bookmark className="w-4 h-4" />
                </button>
                <button
                  onClick={handlePlaceBet}
                  className="flex-1 py-3 px-4 rounded-lg bg-[#00e700] hover:bg-[#00c900] text-black font-extrabold text-xs uppercase tracking-wider transition-all active:scale-[0.98] shadow-[0_0_20px_rgba(0,231,0,0.25)] flex items-center justify-center gap-2"
                >
                  {user.isLoggedIn ? `Fazer aposta (R$ ${stake.toFixed(2)})` : 'Faça login ou cadastre-se'}
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};
