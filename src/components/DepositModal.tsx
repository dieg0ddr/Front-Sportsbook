import React, { useState } from 'react';
import { X, Copy, Check, QrCode, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface DepositModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDepositSuccess: (amount: number) => void;
}

export const DepositModal: React.FC<DepositModalProps> = ({
  isOpen,
  onClose,
  onDepositSuccess,
}) => {
  const [amount, setAmount] = useState<number>(50);
  const [copied, setCopied] = useState<boolean>(false);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  if (!isOpen) return null;

  const quickAmounts = [20, 50, 100, 200, 500];
  const pixCode = `00020101021226840014br.gov.bcb.pix2562pix.betsports.com/qr/v2/${amount}00520400005303986540${amount}.005802BR5916BETSPORTS BRASIL6009SAO PAULO62070503***6304`;

  const handleCopy = () => {
    navigator.clipboard.writeText(pixCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleConfirm = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      onDepositSuccess(amount);
      try {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#00e700', '#32bcad', '#ffffff'],
        });
      } catch {
        // ignore
      }
      onClose();
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs select-none">
      <div className="relative w-full max-w-md bg-[#111723] border border-[#202c42] rounded-2xl p-6 shadow-2xl space-y-5 animate-scaleIn">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-white p-1 rounded-lg hover:bg-[#1a2438] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title & Pix logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#172b2c] border border-[#244c4e] flex items-center justify-center">
            <svg className="w-6 h-6 text-[#32bcad]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.0003 4.28638L6.44287 9.84379L9.12155 12.5225L12.0003 9.64374L14.8789 12.5225L17.5576 9.84379L12.0003 4.28638Z" />
              <path d="M12.0003 19.7136L17.5576 14.1562L14.8789 11.4775L12.0003 14.3563L9.12155 11.4775L6.44287 14.1562L12.0003 19.7136Z" />
            </svg>
          </div>
          <div>
            <h2 className="text-base font-bold text-white">Depósito Instantâneo via Pix</h2>
            <p className="text-xs text-zinc-400">Compensação em segundos • Sem taxas</p>
          </div>
        </div>

        {/* Amount selector */}
        <div className="space-y-2">
          <label className="text-xs font-semibold text-zinc-300">Escolha o valor</label>
          <div className="grid grid-cols-5 gap-2">
            {quickAmounts.map((val) => (
              <button
                key={val}
                onClick={() => setAmount(val)}
                className={`py-2 rounded-lg text-xs font-bold transition-all ${
                  amount === val
                    ? 'bg-[#00e700] text-black shadow-[0_0_10px_rgba(0,231,0,0.3)]'
                    : 'bg-[#151c2a] hover:bg-[#1d273a] text-zinc-300 border border-[#202b3f]'
                }`}
              >
                R$ {val}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 bg-[#0c121c] border border-[#202b3f] rounded-lg px-3 py-2 mt-2">
            <span className="text-sm font-bold text-zinc-400">R$</span>
            <input
              type="number"
              min="5"
              step="5"
              value={amount}
              onChange={(e) => setAmount(Math.max(5, Number(e.target.value)))}
              className="w-full bg-transparent text-white font-mono font-bold text-sm focus:outline-none"
            />
          </div>
        </div>

        {/* QR Code and Copy Code */}
        <div className="bg-[#0b1018] border border-[#1b2538] rounded-xl p-4 flex flex-col items-center space-y-3">
          {/* Simulated QR Code box */}
          <div className="w-36 h-36 bg-white p-2 rounded-lg flex items-center justify-center shadow-inner relative">
            <QrCode className="w-32 h-32 text-black" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-black/80 flex items-center justify-center">
                <span className="text-[10px] font-bold text-[#00e700]">PIX</span>
              </div>
            </div>
          </div>

          <div className="w-full flex items-center gap-2 bg-[#121927] border border-[#1f2b40] rounded-lg p-2 text-xs">
            <span className="truncate font-mono text-zinc-400 flex-1">{pixCode}</span>
            <button
              onClick={handleCopy}
              className="shrink-0 flex items-center gap-1 bg-[#1a253a] hover:bg-[#23314c] text-white px-2.5 py-1 rounded text-xs transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#00e700]" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copiado' : 'Copiar'}</span>
            </button>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={handleConfirm}
          disabled={isProcessing}
          className="w-full py-3 rounded-lg bg-[#00e700] hover:bg-[#00c900] text-black font-extrabold text-xs uppercase tracking-wider transition-all active:scale-[0.98] shadow-lg flex items-center justify-center gap-2"
        >
          <Sparkles className="w-4 h-4" />
          <span>{isProcessing ? 'Confirmando...' : `Confirmar Depósito (R$ ${amount.toFixed(2)})`}</span>
        </button>
      </div>
    </div>
  );
};
