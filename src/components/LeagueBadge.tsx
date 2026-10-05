import React from 'react';

interface LeagueBadgeProps {
  type: string;
  className?: string;
}

export const LeagueBadge: React.FC<LeagueBadgeProps> = ({ type, className = 'w-4 h-4' }) => {
  switch (type) {
    case 'uefa-nations-a':
    case 'uefa-nations-b':
      return (
        <svg viewBox="0 0 24 24" className={`shrink-0 ${className}`}>
          <rect width="24" height="24" rx="4" fill="#1b2438" />
          <path d="M12 4L16 8L14 18L12 20L10 18L8 8L12 4Z" fill="#silver" stroke="#60a5fa" strokeWidth="1" />
          <path d="M9 8h6M10 12h4M11 16h2" stroke="#f59e0b" strokeWidth="1" strokeLinecap="round" />
          <path d="M12 3v3" stroke="#ef4444" strokeWidth="1.5" />
        </svg>
      );

    case 'brasileirao-a':
      return (
        <svg viewBox="0 0 24 24" className={`shrink-0 ${className}`}>
          <path d="M12 2L4 6v8c0 5 8 8 8 8s8-3 8-8V6L12 2z" fill="#0c2340" stroke="#009b3a" strokeWidth="1.5" />
          <polygon points="12,5 18,11 12,17 6,11" fill="#fedf00" />
          <circle cx="12" cy="11" r="3.5" fill="#002776" />
        </svg>
      );

    case 'brasileirao-b':
      return (
        <svg viewBox="0 0 24 24" className={`shrink-0 ${className}`}>
          <path d="M12 2L4 6v8c0 5 8 8 8 8s8-3 8-8V6L12 2z" fill="#0f2b38" stroke="#38bdf8" strokeWidth="1.5" />
          <path d="M12 6c-2.5 0-4 2-4 4.5 0 3 4 6.5 4 6.5s4-3.5 4-6.5C16 8 14.5 6 12 6z" fill="#facc15" />
        </svg>
      );

    case 'amistoso':
      return (
        <svg viewBox="0 0 24 24" className={`shrink-0 ${className}`}>
          <circle cx="12" cy="12" r="10" fill="#0284c7" />
          <path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20" stroke="#ffffff" strokeWidth="1.5" fill="none" />
        </svg>
      );

    case 'qualif-caf':
      return (
        <svg viewBox="0 0 24 24" className={`shrink-0 ${className}`}>
          <circle cx="12" cy="12" r="10" fill="#15803d" />
          <path d="M12 5c-3 0-5 2.5-5 5.5 0 4 5 7.5 5 7.5s5-3.5 5-7.5c0-3-2-5.5-5-5.5z" fill="#eab308" />
          <circle cx="12" cy="10" r="2" fill="#dc2626" />
        </svg>
      );

    case 'ucl':
      return (
        <svg viewBox="0 0 24 24" className={`shrink-0 ${className}`}>
          <circle cx="12" cy="12" r="10" fill="#0d1b2a" stroke="#ffffff" strokeWidth="1" />
          {/* Champions League Starball pattern */}
          <path d="M12 4l1 3h3l-2.5 2 1 3-2.5-2-2.5 2 1-3-2.5-2h3z" fill="#ffffff" />
          <circle cx="7" cy="15" r="1.5" fill="#ffffff" />
          <circle cx="17" cy="15" r="1.5" fill="#ffffff" />
        </svg>
      );

    case 'libertadores':
      return (
        <svg viewBox="0 0 24 24" className={`shrink-0 ${className}`}>
          <rect width="24" height="24" rx="4" fill="#181e2b" />
          {/* Libertadores cup on base */}
          <path d="M9 5h6v5c0 2-1.5 3.5-3 3.5s-3-1.5-3-3.5V5z" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="0.8" />
          <path d="M7 6c0 2 1.5 3 2 3M17 6c0 2-1.5 3-2 3" stroke="#cbd5e1" strokeWidth="0.8" fill="none" />
          <rect x="11" y="13.5" width="2" height="3" fill="#94a3b8" />
          <rect x="9.5" y="16.5" width="5" height="3.5" rx="0.5" fill="#78350f" />
        </svg>
      );

    case 'argentina-lp':
      return (
        <svg viewBox="0 0 24 24" className={`shrink-0 ${className}`}>
          <circle cx="12" cy="12" r="10" fill="#7dd3fc" />
          <rect x="2" y="8" width="20" height="8" fill="#ffffff" />
          <circle cx="12" cy="12" r="2" fill="#f59e0b" />
        </svg>
      );

    case 'colombia-pa':
      return (
        <svg viewBox="0 0 24 24" className={`shrink-0 ${className}`}>
          <path d="M12 2L4 6v8c0 5 8 8 8 8s8-3 8-8V6L12 2z" fill="#0284c7" />
          <path d="M6 10l6-4 6 4v3l-6 4-6-4z" fill="#16a34a" />
          <circle cx="12" cy="10" r="2" fill="#facc15" />
        </svg>
      );

    case 'premier-league':
      return (
        <svg viewBox="0 0 24 24" className={`shrink-0 ${className}`}>
          <circle cx="12" cy="12" r="10" fill="#38003c" />
          {/* Premier League Lion Head icon */}
          <path d="M12 5c-2.5 0-4 1.5-4 4 0 1.5.8 2.5 2 3.2v2.8h4v-2.8c1.2-.7 2-1.7 2-3.2 0-2.5-1.5-4-4-4z" fill="#00ff85" />
          <polygon points="12,3 13,5 11,5" fill="#ffffff" />
        </svg>
      );

    case 'italia-serie-a':
      return (
        <svg viewBox="0 0 24 24" className={`shrink-0 ${className}`}>
          <circle cx="12" cy="12" r="10" fill="#004691" />
          {/* Serie A dynamic stylized A */}
          <path d="M8 18L12 6L16 18h-2.5L12 13.5L10.5 18H8z" fill="#ffffff" />
          <path d="M10.8 14.5h2.4" stroke="#009246" strokeWidth="1.2" />
        </svg>
      );

    case 'espanha-la-liga':
      return (
        <svg viewBox="0 0 24 24" className={`shrink-0 ${className}`}>
          <circle cx="12" cy="12" r="10" fill="#ffffff" />
          {/* LaLiga swirl colors */}
          <path d="M12 6a6 6 0 1 0 6 6" stroke="#ea580c" strokeWidth="3" strokeLinecap="round" fill="none" />
          <circle cx="12" cy="12" r="2.5" fill="#dc2626" />
        </svg>
      );

    case 'alemanha-bundesliga':
      return (
        <svg viewBox="0 0 24 24" className={`shrink-0 ${className}`}>
          <rect width="24" height="24" rx="4" fill="#d20515" />
          {/* Bundesliga white kicking figure silhouette */}
          <circle cx="15.5" cy="7.5" r="2" fill="#ffffff" />
          <path d="M8 17l4-5 1.5 2.5 3.5-3" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      );

    case 'franca-ligue-1':
      return (
        <svg viewBox="0 0 24 24" className={`shrink-0 ${className}`}>
          <circle cx="12" cy="12" r="10" fill="#ffffff" />
          <text x="12" y="16" fontSize="13" fontWeight="900" textAnchor="middle" fill="#091c3e" fontFamily="sans-serif">
            1
          </text>
        </svg>
      );

    case 'inglaterra-championship':
      return (
        <svg viewBox="0 0 24 24" className={`shrink-0 ${className}`}>
          <path d="M12 2L5 6v7c0 5 7 8 7 8s7-3 7-8V6l-7-4z" fill="#ffffff" stroke="#1e293b" strokeWidth="1" />
          <circle cx="12" cy="9" r="2" fill="#0f172a" />
          <circle cx="9" cy="14" r="1.5" fill="#0f172a" />
          <circle cx="15" cy="14" r="1.5" fill="#0f172a" />
        </svg>
      );

    case 'eua-mls':
      return (
        <svg viewBox="0 0 24 24" className={`shrink-0 ${className}`}>
          <path d="M12 2L4 6v8c0 5 8 8 8 8s8-3 8-8V6L12 2z" fill="#ffffff" />
          <path d="M4 6l8 16V6H4z" fill="#dc2626" />
          <path d="M12 6l8 16V6h-8z" fill="#1e3a8a" />
          <polygon points="12,7 13,9 15,9 13.5,10 14,12 12,11 10,12 10.5,10 9,9 11,9" fill="#ffffff" />
        </svg>
      );

    case 'copa-chile':
    case 'equador-serie-b':
    case 'el-salvador-segunda':
      return (
        <svg viewBox="0 0 24 24" className={`shrink-0 ${className}`}>
          <circle cx="12" cy="12" r="10" fill="#1e293b" stroke="#475569" strokeWidth="1" />
          <path d="M12 6l3 2v4l-3 2-3-2V8z" fill="#64748b" />
          <line x1="12" y1="2" x2="12" y2="6" stroke="#475569" strokeWidth="1" />
          <line x1="2" y1="12" x2="9" y2="10" stroke="#475569" strokeWidth="1" />
          <line x1="22" y1="12" x2="15" y2="10" stroke="#475569" strokeWidth="1" />
        </svg>
      );

    case 'inglaterra-fa-cup':
      return (
        <svg viewBox="0 0 24 24" className={`shrink-0 ${className}`}>
          <rect width="24" height="24" rx="4" fill="#991b1b" />
          <path d="M8 6h8v6c0 2.5-1.8 4-4 4s-4-1.5-4-4V6z" fill="#ffffff" />
          <path d="M6 7c0 2 1.5 3 2 3M18 7c0 2-1.5 3-2 3" stroke="#ffffff" strokeWidth="1" fill="none" />
          <rect x="10.5" y="16" width="3" height="3" fill="#ffffff" />
        </svg>
      );

    case 'liga-europa':
      return (
        <svg viewBox="0 0 24 24" className={`shrink-0 ${className}`}>
          <circle cx="12" cy="12" r="10" fill="#0f172a" />
          <path d="M12 4l3 3-1 9-2 2-2-2-1-9 3-3z" fill="#f97316" />
          <circle cx="12" cy="12" r="2" fill="#ffffff" />
        </svg>
      );

    case 'mexico-liga-mx':
      return (
        <svg viewBox="0 0 24 24" className={`shrink-0 ${className}`}>
          <circle cx="12" cy="12" r="10" fill="#166534" />
          <path d="M12 2A10 10 0 0 1 22 12L12 12Z" fill="#dc2626" />
          <path d="M2 12A10 10 0 0 1 12 2L12 12Z" fill="#ffffff" />
          <circle cx="12" cy="12" r="3" fill="#000000" />
        </svg>
      );

    case 'copa-italia':
      return (
        <svg viewBox="0 0 24 24" className={`shrink-0 ${className}`}>
          <path d="M12 2L4 6v8c0 5 8 8 8 8s8-3 8-8V6L12 2z" fill="#ffffff" stroke="#cbd5e1" strokeWidth="0.8" />
          <rect x="4" y="6" width="5.3" height="10" fill="#009246" />
          <rect x="9.3" y="6" width="5.4" height="10" fill="#ffffff" />
          <rect x="14.7" y="6" width="5.3" height="10" fill="#ce2b37" />
          <path d="M10 7h4v4c0 1.5-1 2.5-2 2.5s-2-1-2-2.5V7z" fill="#facc15" />
        </svg>
      );

    default:
      return (
        <div className={`rounded-full bg-[#1e293b] border border-zinc-600 flex items-center justify-center text-[9px] font-bold text-zinc-300 ${className}`}>
          ⚽
        </div>
      );
  }
};
