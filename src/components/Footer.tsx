import React from 'react';
import {
  MessageCircle,
  ShieldCheck,
  Smartphone,
  ExternalLink,
} from 'lucide-react';

interface FooterProps {
  onOpenSupport: () => void;
  onOpenPolicy: (title: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenSupport, onOpenPolicy }) => {
  return (
    <footer className="w-full bg-[#080b11] border-t border-[#182133] pt-12 pb-8 px-4 lg:px-12 text-xs text-zinc-400 select-none">
      <div className="max-w-[1720px] mx-auto space-y-10">
        {/* Main Footer Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8">
          {/* Col 1: Redes Sociais */}
          <div className="space-y-3">
            <div className="font-bold text-white text-sm">Redes Sociais</div>
            <div className="flex items-center gap-2.5">
              {/* Instagram */}
              <a
                href="#instagram"
                onClick={(e) => { e.preventDefault(); alert('Redirecionando para o Instagram Oficial'); }}
                className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-600 flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                title="Instagram"
              >
                <span className="font-bold text-xs">IG</span>
              </a>
              {/* TikTok */}
              <a
                href="#tiktok"
                onClick={(e) => { e.preventDefault(); alert('Redirecionando para o TikTok Oficial'); }}
                className="w-8 h-8 rounded-full bg-black border border-zinc-700 flex items-center justify-center text-white hover:border-zinc-500 transition-colors"
                title="TikTok"
              >
                <span className="font-bold text-xs">TT</span>
              </a>
              {/* Telegram */}
              <a
                href="#telegram"
                onClick={(e) => { e.preventDefault(); alert('Redirecionando para o Telegram Oficial'); }}
                className="w-8 h-8 rounded-full bg-[#24A1DE] flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                title="Telegram"
              >
                <span className="font-bold text-xs">TG</span>
              </a>
            </div>
          </div>

          {/* Col 2: Aposte */}
          <div className="space-y-2.5">
            <div className="font-bold text-white text-sm">Aposte</div>
            <ul className="space-y-1.5 text-zinc-400">
              <li>
                <button onClick={() => onOpenPolicy('Apostas Esportivas')} className="hover:text-white transition-colors">
                  Apostas Esportivas
                </button>
              </li>
              <li>
                <button onClick={() => onOpenPolicy('Esportes ao Vivo')} className="hover:text-white transition-colors">
                  Esportes ao Vivo
                </button>
              </li>
              <li>
                <button onClick={() => onOpenPolicy('Jogos Slots')} className="hover:text-white transition-colors">
                  Jogos Slots
                </button>
              </li>
              <li>
                <button onClick={() => onOpenPolicy('Jogos ao Vivo')} className="hover:text-white transition-colors">
                  Jogos ao Vivo
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Comunidade */}
          <div className="space-y-2.5">
            <div className="font-bold text-white text-sm">Comunidade</div>
            <ul className="space-y-1.5 text-zinc-400">
              <li>
                <button onClick={() => onOpenPolicy('Promoções')} className="hover:text-white transition-colors">
                  Promoções
                </button>
              </li>
              <li>
                <button onClick={() => onOpenPolicy('Blog Oficial')} className="hover:text-white transition-colors">
                  Blog
                </button>
              </li>
              <li>
                <button onClick={() => onOpenPolicy('Aplicativo Móvel')} className="hover:text-white transition-colors">
                  Aplicativo móvel
                </button>
              </li>
              <li>
                <button onClick={() => onOpenPolicy('Acesse Nosso Telegram')} className="hover:text-white transition-colors">
                  Acesse Nosso Telegram
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Regras */}
          <div className="space-y-2.5">
            <div className="font-bold text-white text-sm">Regras</div>
            <ul className="space-y-1.5 text-zinc-400">
              <li>
                <button onClick={() => onOpenPolicy('Termos & Condições')} className="hover:text-white transition-colors">
                  Termos & Condições
                </button>
              </li>
              <li>
                <button onClick={() => onOpenPolicy('Política de Integridade de Apostas')} className="hover:text-white transition-colors">
                  Política de Integridade de Apostas
                </button>
              </li>
              <li>
                <button onClick={() => onOpenPolicy('Política PLD/FTP')} className="hover:text-white transition-colors">
                  Política PLD/FTP
                </button>
              </li>
              <li>
                <button onClick={() => onOpenPolicy('Política de Jogo Responsável')} className="hover:text-white transition-colors">
                  Política de Jogo Responsável
                </button>
              </li>
              <li>
                <button onClick={() => onOpenPolicy('Política de Privacidade')} className="hover:text-white transition-colors">
                  Política de Privacidade
                </button>
              </li>
              <li>
                <button onClick={() => onOpenPolicy('Política de Governança Corporativa')} className="hover:text-white transition-colors">
                  Política de Governança
                </button>
              </li>
              <li>
                <button onClick={() => onOpenPolicy('Regras de Publicidade')} className="hover:text-white transition-colors">
                  Regras de Publicidade
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Ajuda */}
          <div className="space-y-2.5">
            <div className="font-bold text-white text-sm">Ajuda</div>
            <ul className="space-y-1.5 text-zinc-400">
              <li>
                <button onClick={() => onOpenPolicy('Jogo Responsável')} className="hover:text-white transition-colors">
                  Jogo Responsável
                </button>
              </li>
              <li>
                <button onClick={() => onOpenSupport()} className="hover:text-white transition-colors">
                  Central de Ajuda
                </button>
              </li>
              <li>
                <button onClick={() => onOpenSupport()} className="hover:text-white transition-colors">
                  Canais de Atendimento
                </button>
              </li>
              <li>
                <button onClick={() => onOpenSupport()} className="hover:text-white transition-colors flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00e700]"></span>
                  Suporte ao vivo
                </button>
              </li>
            </ul>
          </div>

          {/* Col 6: Links Úteis */}
          <div className="space-y-2.5">
            <div className="font-bold text-white text-sm">Links Úteis</div>
            <div>
              <button
                onClick={onOpenSupport}
                className="inline-flex items-center gap-2 bg-[#121926] hover:bg-[#1a2336] border border-[#222e46] text-white font-semibold px-3 py-2 rounded-lg transition-colors"
              >
                <div className="w-5 h-5 rounded-full bg-[#00e700] text-black flex items-center justify-center">
                  <MessageCircle className="w-3 h-3 fill-black" />
                </div>
                <span>Contate-nos</span>
              </button>
            </div>
          </div>

          {/* Col 7: Pagamento */}
          <div className="space-y-2.5">
            <div className="font-bold text-white text-sm">Pagamento</div>
            <div className="flex items-center gap-2 bg-[#101724] border border-[#1d293f] p-2.5 rounded-lg w-fit">
              {/* Official Pix diamond logo graphic */}
              <div className="flex items-center gap-1.5">
                <svg className="w-6 h-6 text-[#32bcad]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.0003 4.28638L6.44287 9.84379L9.12155 12.5225L12.0003 9.64374L14.8789 12.5225L17.5576 9.84379L12.0003 4.28638Z" />
                  <path d="M12.0003 19.7136L17.5576 14.1562L14.8789 11.4775L12.0003 14.3563L9.12155 11.4775L6.44287 14.1562L12.0003 19.7136Z" />
                </svg>
                <span className="font-bold tracking-tight text-white text-sm font-sans">
                  pix
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal disclaimer & Brazilian Ministry of Finance authorization seal */}
        <div className="pt-6 border-t border-[#182133] flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-[11px] text-zinc-400 max-w-4xl leading-relaxed space-y-2">
            <p>
              Operado em estrita conformidade com as diretrizes e regulamentações da Secretaria de Prêmios e Apostas do Ministério da Fazenda (SPA/MF), sob outorga autorizatória federal nº 0042/2024. As apostas de quota fixa são destinadas exclusivamente a maiores de 18 anos.
            </p>
            <p>
              A prática de jogos de apostas deve ser encarada unicamente como atividade recreativa e de entretenimento. Jogue com moderação. Se você ou alguém que você conhece apresenta problemas com jogos, busque ajuda especializada.
            </p>
          </div>

          {/* Official Brazilian "AUTORIZADO PELO MINISTÉRIO DA FAZENDA" Seal */}
          <div className="shrink-0 flex items-center gap-3 bg-[#0d1522] border border-[#1d2d46] p-3 rounded-2xl shadow-md">
            <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-[#009b3a] to-[#005a22] p-1 flex items-center justify-center border-2 border-[#fedf00]">
              <div className="w-full h-full rounded-full bg-[#002776] flex items-center justify-center relative overflow-hidden">
                <div className="w-7 h-7 bg-[#fedf00] rotate-45 transform flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-[#002776]"></div>
                </div>
              </div>
            </div>
            <div>
              <div className="text-[13px] font-black text-white tracking-wider">
                AUTORIZADO
              </div>
              <div className="text-[9px] font-bold text-[#fedf00] tracking-wide uppercase">
                PELO MINISTÉRIO DA FAZENDA
              </div>
              <div className="text-[8px] text-zinc-400">
                SPA/MF • Licença Federal
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory Badges Row (Reclame Aqui, BeGambleAware, apostaresponsavel, 18+, etc.) */}
        <div className="pt-6 border-t border-[#182133] flex flex-wrap items-center justify-between gap-4">
          {/* RA 1000 */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0e1724] border border-[#1a2b42]">
            <ShieldCheck className="w-5 h-5 text-[#00e700]" />
            <div>
              <div className="text-[10px] font-black text-[#00e700]">RA 1000</div>
              <div className="text-[8px] text-zinc-400">ReclameAQUI</div>
            </div>
          </div>

          {/* BeGambleAware */}
          <div className="px-3 py-1.5 rounded-lg bg-[#0e1724] border border-[#1a2b42] text-center">
            <span className="text-[11px] font-bold text-white tracking-tight">
              BeGambleAware<sup className="text-[8px]">®</sup>
            </span>
          </div>

          {/* GLI / GJT */}
          <div className="px-3 py-1.5 rounded-lg bg-[#0e1724] border border-[#1a2b42] text-center">
            <span className="text-[11px] font-black text-[#a78bfa] tracking-wider">
              GLI Certified
            </span>
          </div>

          {/* Aposta Responsável */}
          <div className="px-3 py-1.5 rounded-lg bg-[#0e1724] border border-[#1a2b42] text-center">
            <span className="text-[11px] font-semibold text-white">
              aposta<span className="text-[#00e700] font-black">responsável</span>
            </span>
          </div>

          {/* Great Place to Work */}
          <div className="px-2.5 py-1 rounded bg-[#d9222a] text-white font-black text-[9px] text-center leading-tight">
            Great<br />Place<br />To Work
          </div>

          {/* Serviço Excelente 4.0/5.0 */}
          <div className="px-3 py-1.5 rounded-lg bg-[#0e1724] border border-[#1a2b42]">
            <div className="text-[9px] font-bold text-white uppercase">Serviço Excelente</div>
            <div className="flex items-center gap-1 text-amber-400 text-[10px]">
              ★★★★☆ <span className="text-[8px] text-zinc-400">4.0/5.0 avaliações</span>
            </div>
          </div>

          {/* Baixe o nosso app */}
          <button
            onClick={() => onOpenPolicy('Baixar Aplicativo Android / iOS')}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0e1724] border border-[#1a2b42] hover:border-zinc-500 text-white transition-colors"
          >
            <Smartphone className="w-4 h-4 text-[#00e700]" />
            <span className="text-[10px] font-bold uppercase tracking-wider">
              Baixe o nosso App
            </span>
          </button>

          {/* 18+ Jogue com responsabilidade */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-red-950/40 border border-red-800/50 text-red-400">
            <span className="w-5 h-5 rounded-full bg-red-600 text-white font-extrabold text-[10px] flex items-center justify-center">
              18+
            </span>
            <span className="text-[10px] font-bold uppercase tracking-wider">
              Jogue com Responsabilidade
            </span>
          </div>
        </div>

        {/* Bottom Sub-links (Ouvidoria, Denúncias, Suporte ao Jogador, Suporte: email) */}
        <div className="pt-4 border-t border-[#141b29] flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-[11px] text-zinc-400">
          <button onClick={() => onOpenPolicy('Ouvidoria Institucional')} className="hover:text-white underline">
            Ouvidoria
          </button>
          <button onClick={() => onOpenPolicy('Canal de Denúncias Anônimo')} className="hover:text-white underline">
            Denúncias
          </button>
          <button onClick={() => onOpenPolicy('Suporte ao Jogador')} className="hover:text-white underline">
            Suporte ao Jogador
          </button>
          <span>
            Suporte:{' '}
            <a href="mailto:atendimento@email.com" className="text-[#00e700] hover:underline font-mono">
              atendimento@email.com
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};
