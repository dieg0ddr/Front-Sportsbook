import React from 'react';
import { MatchItem, OddSelection } from '../types/sportsbook';
import { Plus } from 'lucide-react';

interface PopularMultiplesProps {
  items: MatchItem[];
  selectedOdds: OddSelection[];
  onToggleOdd: (selection: OddSelection) => void;
  selectedSport: string;
  setSelectedSport: (sport: string) => void;
}

// Exact SVGs requested by user
const FootballIcon = () => (
  <svg viewBox="0 0 512 512" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" className="w-5 h-5">
    <circle cx="256" cy="256" r="192" strokeWidth="32" />
    <path d="m256 175.15-76.09 63.83L200 320h112l20.09-81.02zM332.09 238.98l52.87-22.4 25.78-73.26M447 269.97l-62.04-53.39M179.91 238.98l-52.87-22.4-25.78-73.26M65 269.97l62.04-53.39M256 175.15v-57.57l64-42.64M192 74.93l64 42.65M312 320l28 48-28 71M410.74 368H342M200 320l-28 48 28.37 71.5M101.63 368H172" strokeLinejoin="round" strokeWidth="32" />
  </svg>
);

const BasketballIcon = () => (
  <svg viewBox="0 0 512 512" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" className="w-5 h-5">
    <circle cx="256" cy="256" r="192" strokeWidth="32" />
    <path d="M432.94 255.05a192 192 0 0 1-176.31-180.7M255 433.61A192 192 0 0 0 74.29 256.69M120.24 120.24l271.52 271.52M120.24 391.76l271.52-271.52" strokeWidth="32" />
  </svg>
);

const TennisIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M13.003 2.04968C12.6731 2.01682 12.3385 2 12 2C7.21195 2 3.20985 5.36506 2.22967 9.85922M14.0769 21.784C18.4211 20.8664 21.7251 17.1287 21.9837 12.5761C21.9945 12.3854 22 12.1934 22 12C22 6.81568 18.0549 2.5528 13.003 2.04968M13.003 2.04968C16.1885 6.45031 15.4214 12.4953 21.9837 12.5761M14.0769 21.784C13.4069 21.9256 12.7121 22 12 22C6.47715 22 2 17.5228 2 12C2 11.2652 2.07925 10.5489 2.22967 9.85922M14.0769 21.784C14.0562 12.8104 6.63912 14.4561 2.22967 9.85922" />
  </svg>
);

const VoleyIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M11.9999 12.0001C13.8006 12.0001 15.4902 12.4761 16.9496 13.309M2.75678 16.9855C4.72738 17.099 6.69264 16.6246 8.39173 15.6322C9.84274 14.7847 11.0996 13.5595 11.9999 12.0001M11.9999 12.0001C11.0996 10.4407 10.667 8.73964 10.6587 7.0593M16.9496 13.309C16.7626 13.7113 16.5562 14.1088 16.3301 14.5004C16.1041 14.8918 15.8631 15.2692 15.6083 15.6322C13.5652 18.5433 10.6324 20.5321 7.39873 21.4408M16.9496 13.309C18.6583 14.2843 20.0516 15.7489 20.9386 17.512M8.39173 15.6322C8.13687 15.2691 7.89585 14.8916 7.66982 14.5001C5.63194 10.9704 5.19167 6.95676 6.12464 3.29642M10.6587 7.0593C10.6498 5.28492 11.114 3.53368 11.9999 1.99688C12.0961 1.83008 12.1972 1.6658 12.3032 1.50429M10.6587 7.0593C11.1005 7.02014 11.5479 7.00015 12 7.00015C16.0754 7.00015 19.7711 8.6254 22.4745 11.2631M6.12464 3.29642C3.33427 5.18376 1.5 8.37767 1.5 12C1.5 13.8043 1.9551 15.5023 2.75678 16.9855M6.12464 3.29642C7.80137 2.16232 9.82334 1.5 12 1.5C12.1014 1.5 12.2025 1.50144 12.3032 1.50429M20.9386 17.512C21.9287 15.9099 22.5 14.0216 22.5 12C22.5 11.7523 22.4914 11.5066 22.4745 11.2631C22.1033 5.90761 17.7159 1.65779 12.3032 1.50429M20.9386 17.512C19.0888 20.5054 15.7773 22.5 12 22.5C10.3496 22.5 8.78818 22.1192 7.39873 21.4408M7.39873 21.4408C5.42504 20.477 3.79838 18.9126 2.75678 16.9855" />
  </svg>
);

const MmaIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M5.63168 13.1044C5.63168 13.1044 6.18072 15.1534 9.21181 16.9034C12.2429 18.6534 14.2919 18.1044 14.2919 18.1044M5.63168 13.1044C6.05145 2.37707 12.4485 0.296184 16.3457 2.54622C20.2428 4.79626 20.5416 7.27817 19.7917 8.57727C19.0419 9.87638 17.2428 9.99241 17.7917 12.0414M5.63168 13.1044L3.63155 16.5678C3.07926 17.5244 3.40708 18.7475 4.36366 19.2998L9.55981 22.2998C10.5164 22.8521 11.7396 22.5243 12.2919 21.5677L14.2919 18.1044M14.2919 18.1044C16.4078 16.4392 19.823 15.5235 20.823 13.7915C21.823 12.0594 21.2739 10.0104 19.2917 9.4433" />
  </svg>
);

const EsportsIcon = () => (
  <svg viewBox="0 -960 960 960" fill="currentColor" className="w-5 h-5">
    <path d="M189-160q-60 0-102.5-43T42-307q0-9 1-18t3-18l84-336q14-54 57-87.5t98-33.5h390q55 0 98 33.5t57 87.5l84 336q2 9 3.5 18.5T919-306q0 61-43.5 103.5T771-160q-42 0-78-22t-54-60l-28-58q-5-10-15-15t-21-5H385q-11 0-21 5t-15 15l-28 58q-18 38-54 60t-78 22Zm3-80q19 0 34.5-10t23.5-27l28-57q15-31 44-48.5t63-17.5h190q34 0 63 18t45 48l28 57q8 17 23.5 27t34.5 10q28 0 48-18.5t21-46.5q0 1-2-19l-84-335q-7-27-28-44t-49-17H285q-28 0-49.5 17T208-659l-84 335q-2 6-2 18 0 28 20.5 47t49.5 19Zm348-280q17 0 28.5-11.5T580-560q0-17-11.5-28.5T540-600q-17 0-28.5 11.5T500-560q0 17 11.5 28.5T540-520Zm80-80q17 0 28.5-11.5T660-640q0-17-11.5-28.5T620-680q-17 0-28.5 11.5T580-640q0 17 11.5 28.5T620-600Zm0 160q17 0 28.5-11.5T660-480q0-17-11.5-28.5T620-520q-17 0-28.5 11.5T580-480q0 17 11.5 28.5T620-440Zm80-80q17 0 28.5-11.5T740-560q0-17-11.5-28.5T700-600q-17 0-28.5 11.5T660-560q0 17 11.5 28.5T700-520Zm-360 60q13 0 21.5-8.5T370-490v-40h40q13 0 21.5-8.5T440-560q0-13-8.5-21.5T410-590h-40v-40q0-13-8.5-21.5T340-660q-13 0-21.5 8.5T310-630v40h-40q-13 0-21.5 8.5T240-560q0 13 8.5 21.5T270-530h40v40q0 13 8.5 21.5T340-460Zm140-20Z" />
  </svg>
);

const HockeyIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M5.38861 22C7.29987 22.5461 8.37638 22.8855 10.787 23.2069C12.1798 23.5283 13.7745 19.7283 14.4955 18.2863L21.7921 3.69386C22.1311 3.0158 21.8111 2.19319 21.103 1.92248C20.4797 1.68418 19.7801 1.95858 19.4901 2.55963C18.0194 5.60829 15.6248 10.5717 14.751 12.4931C13.8771 14.4146 11.7511 19.7785 9.60838 19.0821C8.02509 18.5675 5.69783 16.5644 4.14435 18.2786C2.59087 19.9928 1.88885 21 5.38861 22Z" />
    <circle cx="20" cy="19" r="1.8" fill="currentColor" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

const TableTennisIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M3.40218 10.3012L14.8337 16.9012M17.9997 13.6176C15.5247 17.9044 10.8891 19.0386 7.20629 16.9123C3.52344 14.786 2.18789 10.2044 4.66289 5.91756C7.13789 1.63074 11.7734 0.496565 15.4563 2.62285C19.1391 4.74914 20.4747 9.33074 17.9997 13.6176ZM6.29128 16.2971L8.08468 17.3507L5.88523 22.5004L3.02734 20.8504L6.29128 16.2971Z" />
    <circle cx="19" cy="20" r="1.8" fill="currentColor" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

export const PopularMultiples: React.FC<PopularMultiplesProps> = ({
  items,
  selectedOdds,
  onToggleOdd,
  selectedSport,
  setSelectedSport,
}) => {
  const sports = [
    { id: 'futebol', label: 'Futebol', icon: <FootballIcon /> },
    { id: 'basquete', label: 'Basquete', icon: <BasketballIcon /> },
    { id: 'tenis', label: 'Tênis', icon: <TennisIcon /> },
    { id: 'volei', label: 'Vôlei', icon: <VoleyIcon /> },
    { id: 'mma', label: 'MMA', icon: <MmaIcon /> },
    { id: 'esports', label: 'E-Sports', icon: <EsportsIcon /> },
    { id: 'hoquei', label: 'Hóquei', icon: <HockeyIcon /> },
    { id: 'tenis_mesa', label: 'Tênis de mesa', icon: <TableTennisIcon /> },
    { id: 'mais', label: 'Mais esportes...', icon: <Plus className="w-5 h-5 stroke-[2.5]" /> },
  ];

  const isSelected = (matchId: string, outcomeName: string) => {
    return selectedOdds.some(
      (s) => s.matchId === matchId && s.outcomeName === outcomeName
    );
  };

  return (
    <div className="space-y-4 select-none">
      {/* Sports Circular Icon Bar */}
      <div className="w-full flex items-center justify-around sm:justify-evenly gap-1 sm:gap-2 overflow-x-auto pb-2 scrollbar-none pt-1 bg-[#101624]/60 border border-[#1b2539]/60 rounded-xl px-2 py-1">
        {sports.map((sport) => {
          const active = selectedSport === sport.id;
          return (
            <button
              key={sport.id}
              onClick={() => setSelectedSport(sport.id)}
              className="flex flex-col items-center justify-center gap-1.5 flex-1 min-w-[70px] py-1 px-1 rounded-lg group focus:outline-none hover:bg-[#162033]/50 transition-colors"
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ${
                  active
                    ? 'bg-[#00e700] text-black shadow-[0_0_14px_rgba(0,231,0,0.5)] scale-105'
                    : 'bg-[#151c2a] text-zinc-300 border border-[#212b40] group-hover:border-zinc-500 group-hover:text-white'
                }`}
              >
                {sport.icon}
              </div>
              <span
                className={`text-[11px] whitespace-nowrap transition-colors ${
                  active ? 'text-white font-bold' : 'text-zinc-400 group-hover:text-zinc-200'
                }`}
              >
                {sport.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Popular Multiples Section */}
      <div className="space-y-2.5">
        <div className="text-sm font-bold text-white tracking-wide">
          Múltiplas Populares
        </div>

        {/* Horizontal grid of 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {items.map((item) => {
            const m = item.markets.winner;
            if (!m) return null;

            return (
              <div
                key={item.id}
                className="bg-[#121824] border border-[#1e273a] hover:border-[#2d3a54] rounded-xl p-3.5 space-y-2.5 transition-all shadow-md flex flex-col justify-between"
              >
                {/* Header status */}
                <div className="flex items-center justify-between text-[11px] text-zinc-400">
                  <div className="flex items-center gap-1.5">
                    {item.isLive ? (
                      <>
                        <span className="px-1.5 py-0.5 rounded text-[9px] font-extrabold bg-red-600 text-white">
                          AO VIVO
                        </span>
                        <span className="font-mono text-zinc-300">{item.liveTime}</span>
                      </>
                    ) : (
                      <span className="font-mono text-zinc-300">{item.time}</span>
                    )}
                  </div>
                  <span className="truncate max-w-[120px] text-zinc-400 text-right">
                    {item.competition}
                  </span>
                </div>

                {/* Teams & Score */}
                <div className="space-y-1 my-1">
                  <div className="flex items-center justify-between font-semibold text-xs text-white">
                    <span className="truncate pr-2">{item.homeTeam}</span>
                    {item.homeScore !== undefined && (
                      <span className="font-mono font-bold">{item.homeScore}</span>
                    )}
                  </div>
                  <div className="flex items-center justify-between font-semibold text-xs text-white">
                    <span className="truncate pr-2">{item.awayTeam}</span>
                    {item.awayScore !== undefined && (
                      <span className="font-mono font-bold">{item.awayScore}</span>
                    )}
                  </div>
                </div>

                {/* Subtitle */}
                <div className="text-[10px] text-zinc-400">
                  Resultado Final {item.isLive ? '(Ao Vivo)' : ''}
                </div>

                {/* 3 Odds buttons matching screenshot */}
                <div className="grid grid-cols-3 gap-1.5 pt-1">
                  {/* Home */}
                  <button
                    onClick={() =>
                      onToggleOdd({
                        id: `${item.id}-home`,
                        matchId: item.id,
                        matchName: `${item.homeTeam} x ${item.awayTeam}`,
                        marketName: 'Resultado Final',
                        outcomeName: item.homeTeam,
                        odds: m.home.odds,
                      })
                    }
                    className={`py-2 px-1 rounded-lg text-center transition-all ${
                      isSelected(item.id, item.homeTeam)
                        ? 'bg-[#00e700] text-black font-extrabold shadow-[0_0_10px_rgba(0,231,0,0.3)]'
                        : 'bg-[#182234] hover:bg-[#202d44] border border-[#23314a] text-zinc-200'
                    }`}
                  >
                    <div className="text-[10px] truncate leading-tight opacity-80">{item.homeTeam}</div>
                    <div className="font-mono font-bold text-xs mt-0.5">
                      {m.home.odds.toFixed(2)}
                    </div>
                  </button>

                  {/* Draw */}
                  {m.draw && (
                    <button
                      onClick={() =>
                        onToggleOdd({
                          id: `${item.id}-draw`,
                          matchId: item.id,
                          matchName: `${item.homeTeam} x ${item.awayTeam}`,
                          marketName: 'Resultado Final',
                          outcomeName: 'Empate',
                          odds: m.draw!.odds,
                        })
                      }
                      className={`py-2 px-1 rounded-lg text-center transition-all ${
                        isSelected(item.id, 'Empate')
                          ? 'bg-[#00e700] text-black font-extrabold shadow-[0_0_10px_rgba(0,231,0,0.3)]'
                          : 'bg-[#182234] hover:bg-[#202d44] border border-[#23314a] text-zinc-200'
                      }`}
                    >
                      <div className="text-[10px] truncate leading-tight opacity-80">Empate</div>
                      <div className="font-mono font-bold text-xs mt-0.5">
                        {m.draw.odds.toFixed(2)}
                      </div>
                    </button>
                  )}

                  {/* Away */}
                  <button
                    onClick={() =>
                      onToggleOdd({
                        id: `${item.id}-away`,
                        matchId: item.id,
                        matchName: `${item.homeTeam} x ${item.awayTeam}`,
                        marketName: 'Resultado Final',
                        outcomeName: item.awayTeam,
                        odds: m.away.odds,
                      })
                    }
                    className={`py-2 px-1 rounded-lg text-center transition-all ${
                      isSelected(item.id, item.awayTeam)
                        ? 'bg-[#00e700] text-black font-extrabold shadow-[0_0_10px_rgba(0,231,0,0.3)]'
                        : 'bg-[#182234] hover:bg-[#202d44] border border-[#23314a] text-zinc-200'
                    }`}
                  >
                    <div className="text-[10px] truncate leading-tight opacity-80">{item.awayTeam}</div>
                    <div className="font-mono font-bold text-xs mt-0.5">
                      {m.away.odds.toFixed(2)}
                    </div>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
