import React, { useState, useRef, useEffect } from 'react';
import { UserAccount } from '../types/sportsbook';
import { Wallet, ChevronDown, Sparkles, Check } from 'lucide-react';

interface HeaderProps {
  user: UserAccount;
  activeNav: 'cassino' | 'esportes' | 'virtuais';
  setActiveNav: (nav: 'cassino' | 'esportes' | 'virtuais') => void;
  onOpenAuth: (mode: 'login' | 'register') => void;
  onOpenDeposit: () => void;
  onToggleUserMenu: () => void;
  isUserMenuOpen: boolean;
  onLogout: () => void;
}

// Crisp Vector SVG Flags
const BrazilFlag: React.FC<{ className?: string }> = ({ className = 'w-5 h-3.5' }) => (
  <svg viewBox="0 0 720 504" className={`rounded-[2px] shadow-xs shrink-0 ${className}`}>
    <rect width="720" height="504" fill="#009b3a" />
    <polygon points="360,42 666,252 360,462 54,252" fill="#fedf00" />
    <circle cx="360" cy="252" r="126" fill="#002776" />
    <path d="M 238,272 A 136,136 0 0,0 482,232" fill="none" stroke="#ffffff" strokeWidth="15" />
  </svg>
);

const SpainFlag: React.FC<{ className?: string }> = ({ className = 'w-5 h-3.5' }) => (
  <svg viewBox="0 0 750 500" className={`rounded-[2px] shadow-xs shrink-0 ${className}`}>
    <rect width="750" height="125" fill="#aa151b" />
    <rect y="125" width="750" height="250" fill="#f1bf00" />
    <rect y="375" width="750" height="125" fill="#aa151b" />
    <rect x="160" y="195" width="55" height="70" rx="6" fill="#aa151b" opacity="0.75" />
    <circle cx="187" cy="180" r="12" fill="#aa151b" opacity="0.8" />
  </svg>
);

const UsaFlag: React.FC<{ className?: string }> = ({ className = 'w-5 h-3.5' }) => (
  <svg viewBox="0 0 741 390" className={`rounded-[2px] shadow-xs shrink-0 ${className}`}>
    <rect width="741" height="390" fill="#ffffff" />
    {[0, 1, 2, 3, 4, 5, 6].map((i) => (
      <rect key={i} y={i * 60} width="741" height="30" fill="#b22234" />
    ))}
    <rect width="296.4" height="210" fill="#3c3b6e" />
    <circle cx="60" cy="45" r="9" fill="#ffffff" />
    <circle cx="150" cy="45" r="9" fill="#ffffff" />
    <circle cx="240" cy="45" r="9" fill="#ffffff" />
    <circle cx="105" cy="85" r="9" fill="#ffffff" />
    <circle cx="195" cy="85" r="9" fill="#ffffff" />
    <circle cx="60" cy="125" r="9" fill="#ffffff" />
    <circle cx="150" cy="125" r="9" fill="#ffffff" />
    <circle cx="240" cy="125" r="9" fill="#ffffff" />
    <circle cx="105" cy="165" r="9" fill="#ffffff" />
    <circle cx="195" cy="165" r="9" fill="#ffffff" />
  </svg>
);

interface LanguageOption {
  code: 'pt' | 'es' | 'en';
  label: string;
  name: string;
  flag: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = ({
  user,
  activeNav,
  setActiveNav,
  onOpenAuth,
  onOpenDeposit,
  onToggleUserMenu,
  isUserMenuOpen,
  onLogout,
}) => {
  const [selectedLang, setSelectedLang] = useState<'pt' | 'es' | 'en'>('pt');
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const langMenuRef = useRef<HTMLDivElement>(null);

  const languages: LanguageOption[] = [
    { code: 'pt', label: 'PTBR', name: 'PTBR', flag: <BrazilFlag /> },
    { code: 'es', label: 'ES-LATAM', name: 'ES-LATAM', flag: <SpainFlag /> },
    { code: 'en', label: 'ENUS', name: 'ENUS', flag: <UsaFlag /> },
  ];

  const currentLanguage = languages.find((l) => l.code === selectedLang) || languages[0];

  // Close language menu on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(e.target as Node)) {
        setIsLangMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="hidden lg:block sticky top-0 z-40 w-full bg-[#0d1117] border-b border-[#1c2333] px-4 lg:px-8 py-3 select-none">
      <div className="max-w-[1720px] mx-auto flex items-center justify-between gap-4">
        {/* Left Zone: Brand + Nav links */}
        <div className="flex items-center gap-6 lg:gap-8">
          {/* Brand Logo matching the green BRAND in screenshot */}
          <button
            onClick={() => setActiveNav('esportes')}
            className="group flex items-center gap-1.5 focus:outline-none"
          >
            <span className="text-2xl font-black tracking-tight text-[#00e700] hover:text-[#00ff00] transition-colors font-sans">
              BRAND
            </span>
          </button>

          {/* Navigation Links */}
          <nav className="flex items-center gap-2">
            <button
              onClick={() => setActiveNav('cassino')}
              className={`px-3 py-1.5 text-sm font-semibold rounded-md transition-colors ${
                activeNav === 'cassino'
                  ? 'text-white bg-[#1a2233]'
                  : 'text-zinc-400 hover:text-white hover:bg-[#161c2a]'
              }`}
            >
              Cassino
            </button>
            <button
              onClick={() => setActiveNav('esportes')}
              className={`px-3 py-1.5 text-sm font-semibold rounded-md transition-colors ${
                activeNav === 'esportes'
                  ? 'text-white bg-[#1a2233] border-b-2 border-[#00e700]'
                  : 'text-zinc-400 hover:text-white hover:bg-[#161c2a]'
              }`}
            >
              Esportes
            </button>
            <button
              onClick={() => setActiveNav('virtuais')}
              className={`px-3 py-1.5 text-sm font-semibold rounded-md transition-colors ${
                activeNav === 'virtuais'
                  ? 'text-white bg-[#1a2233]'
                  : 'text-zinc-400 hover:text-white hover:bg-[#161c2a]'
              }`}
            >
              Virtuais
            </button>
          </nav>
        </div>

        {/* Right Zone: User actions / Login / Register + Language Switcher */}
        <div className="flex items-center gap-3">
          {user.isLoggedIn ? (
            <div className="flex items-center gap-3">
              {/* Balance card */}
              <div className="flex items-center bg-[#131924] border border-[#1f283d] rounded-lg px-3 py-1.5 text-right">
                <div className="mr-3">
                  <div className="text-[10px] uppercase font-semibold text-zinc-400 tracking-wider">
                    Saldo disponível
                  </div>
                  <div className="text-sm font-bold text-white font-mono tabular-nums">
                    R$ {user.balance.toFixed(2).replace('.', ',')}
                  </div>
                </div>
                <button
                  onClick={onOpenDeposit}
                  className="flex items-center gap-1.5 bg-[#00e700] hover:bg-[#00c900] text-black text-xs font-bold px-2.5 py-1.5 rounded-md transition-transform active:scale-95 shadow-sm"
                >
                  <Wallet className="w-3.5 h-3.5" />
                  <span>Depositar</span>
                </button>
              </div>

              {/* Profile dropdown */}
              <div className="relative">
                <button
                  onClick={onToggleUserMenu}
                  className="flex items-center gap-2 p-1.5 rounded-lg bg-[#161c2a] border border-[#222b40] hover:border-zinc-500 transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-[#00e700]/20 text-[#00e700] flex items-center justify-center font-bold text-xs">
                    {user.name.slice(0, 2).toUpperCase()}
                  </div>
                  <ChevronDown className="w-4 h-4 text-zinc-400" />
                </button>

                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-[#131924] border border-[#222b40] rounded-lg shadow-2xl py-2 z-50 text-xs">
                    <div className="px-4 py-2 border-b border-[#222b40]">
                      <div className="font-semibold text-white">{user.name}</div>
                      <div className="text-zinc-400 text-[11px] truncate">{user.email}</div>
                    </div>
                    <button
                      onClick={() => {
                        onOpenDeposit();
                        onToggleUserMenu();
                      }}
                      className="w-full text-left px-4 py-2 text-zinc-300 hover:text-white hover:bg-[#1c2438] flex items-center gap-2"
                    >
                      <Sparkles className="w-4 h-4 text-[#00e700]" />
                      Depositar via Pix
                    </button>
                    <button
                      onClick={() => {
                        onLogout();
                        onToggleUserMenu();
                      }}
                      className="w-full text-left px-4 py-2 text-red-400 hover:text-red-300 hover:bg-[#1c2438] mt-1 border-t border-[#222b40]"
                    >
                      Sair da conta
                    </button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-2.5">
              <button
                onClick={() => onOpenAuth('login')}
                className="h-9 px-4 text-xs font-semibold text-zinc-200 hover:text-white bg-[#141923] hover:bg-[#1c2333] border border-[#222c3f] rounded-lg transition-colors flex items-center justify-center"
              >
                Entrar
              </button>
              <button
                onClick={() => onOpenAuth('register')}
                className="h-9 px-4 text-xs font-bold text-black bg-[#00e700] hover:bg-[#00c900] rounded-lg transition-all active:scale-95 shadow-[0_0_15px_rgba(0,231,0,0.25)] flex items-center justify-center"
              >
                Cadastrar
              </button>
            </div>
          )}

          {/* Language Switcher - placed directly to the right of Cadastrar / User actions */}
          <div className="relative" ref={langMenuRef}>
            <button
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              className="h-9 flex items-center gap-2 px-3 rounded-lg bg-[#141a27] hover:bg-[#1b2334] border border-[#222c40] hover:border-zinc-500 transition-all text-xs font-medium text-zinc-200 focus:outline-none"
              title="Mudar idioma"
              aria-label="Selecionar idioma"
            >
              {currentLanguage.flag}
              <span className="font-bold text-[11px] text-zinc-300 tracking-wide">{currentLanguage.label}</span>
              <ChevronDown className={`w-3.5 h-3.5 text-zinc-400 transition-transform duration-200 ${isLangMenuOpen ? 'rotate-180 text-white' : ''}`} />
            </button>

            {/* Language Switcher Dropdown */}
            {isLangMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-[#111723] border border-[#212c40] rounded-xl shadow-2xl py-1.5 z-50 animate-scaleIn text-xs">
                <div className="px-3 py-1.5 text-[10px] font-bold text-zinc-500 uppercase tracking-wider border-b border-[#1c2538] mb-1">
                  Idioma / Language
                </div>

                {languages.map((lang) => {
                  const isSelected = selectedLang === lang.code;
                  return (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setSelectedLang(lang.code);
                        setIsLangMenuOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 text-left transition-colors ${
                        isSelected
                          ? 'bg-[#182338] text-[#00e700] font-bold'
                          : 'text-zinc-300 hover:text-white hover:bg-[#162033]'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        {lang.flag}
                        <span className="text-xs font-semibold">{lang.name}</span>
                      </div>
                      {isSelected && <Check className="w-3.5 h-3.5 text-[#00e700]" />}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
