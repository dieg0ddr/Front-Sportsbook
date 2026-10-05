import React from 'react';
import { MatchItem, OddSelection } from '../types/sportsbook';

interface BasketballRowsProps {
  selectedOdds: OddSelection[];
  onToggleOdd: (selection: OddSelection) => void;
}

interface BasketballRow {
  id: '1' | '2' | '3' | '4';
  title: string;
  matches: MatchItem[];
}

const ROWS: BasketballRow[] = [
  {
    id: '1',
    title: 'TÍTULO 1',
    matches: [
      match('bq-1-1', '4Q 02:18', true, 'NBA', 'Los Angeles Lakers', 'Boston Celtics', 102, 99, 1.84, 12, 1.96),
      match('bq-1-2', '05/10 · 20:00', false, 'NBA', 'Denver Nuggets', 'Milwaukee Bucks', undefined, undefined, 1.72, 11.5, 2.1),
      match('bq-1-3', '05/10 · 21:30', false, 'NBA', 'Miami Heat', 'New York Knicks', undefined, undefined, 2.35, 13, 1.58),
    ],
  },
  {
    id: '2',
    title: 'TÍTULO 2',
    matches: [
      match('bq-2-1', '3Q 06:41', true, 'NBB', 'Flamengo', 'Franca', 67, 71, 2.05, 14, 1.74),
      match('bq-2-2', '05/10 · 18:00', false, 'NBB', 'Minas', 'Pinheiros', undefined, undefined, 1.66, 15, 2.2),
      match('bq-2-3', '05/10 · 19:30', false, 'NBB', 'Bauru', 'São Paulo', undefined, undefined, 1.91, 13.5, 1.89),
    ],
  },
  {
    id: '3',
    title: 'TÍTULO 3',
    matches: [
      match('bq-3-1', '2Q 03:12', true, 'EuroLeague', 'Real Madrid', 'Olympiacos', 44, 41, 1.55, 16, 2.42),
      match('bq-3-2', '06/10 · 14:45', false, 'EuroLeague', 'Barcelona', 'Fenerbahçe', undefined, undefined, 1.8, 12.5, 2),
      match('bq-3-3', '06/10 · 16:00', false, 'EuroLeague', 'Panathinaikos', 'Monaco', undefined, undefined, 1.68, 14.5, 2.18),
    ],
  },
  {
    id: '4',
    title: 'TÍTULO 4',
    matches: [
      match('bq-4-1', '1Q 08:05', true, 'ACB', 'Valencia', 'Unicaja', 18, 22, 2.25, 15, 1.63),
      match('bq-4-2', '06/10 · 17:30', false, 'Lega Basket', 'Milano', 'Virtus Bologna', undefined, undefined, 1.77, 13, 2.04),
      match('bq-4-3', '06/10 · 20:15', false, 'NCAA', 'Duke', 'Kansas', undefined, undefined, 1.9, 12, 1.9),
    ],
  },
];

function match(
  id: string,
  time: string,
  isLive: boolean,
  competition: string,
  homeTeam: string,
  awayTeam: string,
  homeScore: number | undefined,
  awayScore: number | undefined,
  homeOdds: number,
  drawOdds: number,
  awayOdds: number,
): MatchItem {
  return {
    id,
    time,
    isLive,
    liveTime: isLive ? time : undefined,
    competition,
    leagueId: competition.toLowerCase(),
    homeTeam,
    awayTeam,
    homeScore,
    awayScore,
    category: 'Basquete',
    markets: {
      winner: {
        home: { id: `${id}-h`, name: homeTeam, odds: homeOdds },
        draw: { id: `${id}-d`, name: 'Empate', odds: drawOdds },
        away: { id: `${id}-a`, name: awayTeam, odds: awayOdds },
      },
    },
  };
}

export const BasketballRows: React.FC<BasketballRowsProps> = ({
  selectedOdds,
  onToggleOdd,
}) => {
  const isSelected = (matchId: string, outcomeName: string) => {
    return selectedOdds.some(
      (selection) => selection.matchId === matchId && selection.outcomeName === outcomeName,
    );
  };

  return (
    <div className="space-y-5 select-none">
      {ROWS.map((row) => (
        <section
          key={row.id}
          className={`basketball-row basketball-row--${row.id} space-y-2.5`}
          data-row={row.id}
        >
          <h2 className="text-sm font-bold tracking-wide text-white">{row.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {row.matches.map((item) => {
              const winner = item.markets.winner;
              if (!winner) return null;

              return (
                <article
                  key={item.id}
                  className="bg-[#121824] border border-[#1e273a] hover:border-[#2d3a54] rounded-xl p-3.5 space-y-2.5 transition-all shadow-md flex flex-col justify-between"
                >
                  <header className="flex items-center justify-between text-[11px] text-zinc-400">
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
                    <span className="truncate max-w-[120px] text-right">{item.competition}</span>
                  </header>

                  <div className="space-y-1">
                    <p className="flex items-center justify-between font-semibold text-xs text-white">
                      <span className="truncate pr-2">{item.homeTeam}</span>
                      {item.homeScore !== undefined && (
                        <span className="font-mono font-bold">{item.homeScore}</span>
                      )}
                    </p>
                    <p className="flex items-center justify-between font-semibold text-xs text-white">
                      <span className="truncate pr-2">{item.awayTeam}</span>
                      {item.awayScore !== undefined && (
                        <span className="font-mono font-bold">{item.awayScore}</span>
                      )}
                    </p>
                  </div>

                  <p className="text-[10px] text-zinc-400">
                    Vencedor, incluindo prorrogação
                  </p>

                  <div className="grid grid-cols-3 gap-1.5">
                    <OddButton
                      label="1"
                      odds={winner.home.odds}
                      active={isSelected(item.id, item.homeTeam)}
                      onClick={() =>
                        onToggleOdd({
                          id: `${item.id}-home`,
                          matchId: item.id,
                          matchName: `${item.homeTeam} x ${item.awayTeam}`,
                          marketName: 'Vencedor, incluindo prorrogação',
                          outcomeName: item.homeTeam,
                          odds: winner.home.odds,
                        })
                      }
                    />
                    {winner.draw && (
                      <OddButton
                        label="Empate"
                        odds={winner.draw.odds}
                        active={isSelected(item.id, 'Empate')}
                        onClick={() =>
                          onToggleOdd({
                            id: `${item.id}-draw`,
                            matchId: item.id,
                            matchName: `${item.homeTeam} x ${item.awayTeam}`,
                            marketName: 'Vencedor, incluindo prorrogação',
                            outcomeName: 'Empate',
                            odds: winner.draw!.odds,
                          })
                        }
                      />
                    )}
                    <OddButton
                      label="2"
                      odds={winner.away.odds}
                      active={isSelected(item.id, item.awayTeam)}
                      onClick={() =>
                        onToggleOdd({
                          id: `${item.id}-away`,
                          matchId: item.id,
                          matchName: `${item.homeTeam} x ${item.awayTeam}`,
                          marketName: 'Vencedor, incluindo prorrogação',
                          outcomeName: item.awayTeam,
                          odds: winner.away.odds,
                        })
                      }
                    />
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
};

function OddButton({
  label,
  odds,
  active,
  onClick,
}: {
  label: string;
  odds: number;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`py-2 px-1 rounded-lg text-center transition-all ${
        active
          ? 'bg-[#00e700] text-black font-extrabold shadow-[0_0_10px_rgba(0,231,0,0.3)]'
          : 'bg-[#182234] hover:bg-[#202d44] border border-[#23314a] text-zinc-200'
      }`}
    >
      <div className="text-[10px] truncate leading-tight opacity-80">{label}</div>
      <div className="font-mono font-bold text-xs mt-0.5">{odds.toFixed(2)}</div>
    </button>
  );
}
