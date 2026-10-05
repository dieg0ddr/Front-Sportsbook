import React from 'react';
import { X, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

interface PromoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

export const PromoModal: React.FC<PromoModalProps> = ({
  isOpen,
  onClose,
  title,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs select-none">
      <div className="relative w-full max-w-lg bg-[#111723] border border-[#202c42] rounded-2xl p-6 shadow-2xl space-y-4 animate-scaleIn">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-white p-1 rounded-lg hover:bg-[#1a2438] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-[#00e700]">
          <Zap className="w-5 h-5" />
          <h2 className="text-lg font-bold text-white">{title}</h2>
        </div>

        <div className="text-xs text-zinc-300 leading-relaxed space-y-3">
          <p>
            Aproveite as melhores cotações do mercado brasileiro para os principais eventos do futebol nacional e internacional.
          </p>

          <div className="bg-[#141b2a] border border-[#1e293f] rounded-xl p-3.5 space-y-2">
            <div className="font-semibold text-white flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#00e700]" />
              <span>Regras e Condições</span>
            </div>
            <ul className="list-disc pl-5 space-y-1 text-zinc-400 text-[11px]">
              <li>Bônus progressivo para apostas múltiplas com 2 ou mais seleções.</li>
              <li>Odds mínimas de 1.25 por evento selecionado no cupom.</li>
              <li>Válido para partidas do Brasileirão, Champions League, Copa do Brasil e Estaduais.</li>
              <li>Sem limite máximo de ganhos adicionais em combo acumulador.</li>
            </ul>
          </div>

          <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#0e1724] border border-[#1a2b42] text-[11px] text-zinc-400">
            <ShieldCheck className="w-4 h-4 text-[#00e700] shrink-0" />
            <span>Operado com transparência e integridade regulamentada pelo Ministério da Fazenda.</span>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full py-2.5 rounded-lg bg-[#00e700] hover:bg-[#00c900] text-black font-extrabold text-xs uppercase tracking-wider transition-all active:scale-[0.98] shadow-md"
        >
          Entendido, voltar às apostas
        </button>
      </div>
    </div>
  );
};
