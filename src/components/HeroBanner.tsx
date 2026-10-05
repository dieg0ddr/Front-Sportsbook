import React from 'react';
import { ArrowRight, Trophy } from 'lucide-react';

interface HeroBannerProps {
  onLearnMore: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ onLearnMore }) => {
  return (
    <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-[#0c1922] via-[#0f2128] to-[#121c2c] border border-[#1b343d] p-5 sm:p-6 shadow-xl">
      {/* Background glow highlights */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#00e700]/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none"></div>

      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-5">
        {/* Left Side */}
        <div className="space-y-3 max-w-xl">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#00e700]">
              GRANDES JOGOS
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">
            A LIGA DAS NAÇÕES COMEÇOU
          </h1>

          <div>
            <button
              onClick={onLearnMore}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#00e700] hover:bg-[#00c900] text-black font-extrabold text-xs tracking-wider transition-all active:scale-95 shadow-[0_0_20px_rgba(0,231,0,0.3)] uppercase"
            >
              <span>SAIBA MAIS</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="bg-[#12202a]/80 border border-[#1e3c49]/60 rounded-xl p-4 md:max-w-xs backdrop-blur-xs">
          <div className="flex items-center gap-2 text-[#00e700] text-xs font-bold uppercase tracking-wider mb-1">
            <Trophy className="w-3.5 h-3.5" />
            <span>GRANDES JOGOS</span>
          </div>
          <p className="text-xs text-zinc-300 leading-relaxed">
            Os clássicos da rodada, com os mercados principais e cotações turbinadas para você apostar.
          </p>
        </div>
      </div>
    </div>
  );
};
