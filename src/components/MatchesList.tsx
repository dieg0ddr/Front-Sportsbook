import React, { useState } from 'react';
import { OddSelection } from '../types/sportsbook';
import { PRE_MATCHES_BY_LEAGUE, LIVE_SECTION_MATCHES } from '../data/mockSportsData';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface MatchesListProps {
  selectedOdds: OddSelection[];
  onToggleOdd: (selection: OddSelection) => void;
}

export const MatchesList: React.FC<MatchesListProps> = ({
  selectedOdds,
  onToggleOdd,
}) => {
  const [timeFilter, setTimeFilter] = useState<'Todos' | 'Hoje' | '3h' | '6h' | 'Amanhã'>('Hoje');
  const [marketFilter, setMarketFilter] = useState<'Vencedor' | 'Total de gols' | 'Outros'>('Vencedor');
  const [liveSportTab, setLiveSportTab] = useState('futebol');
  const [expandedLeagues, setExpandedLeagues] = useState<Record<string, boolean>>({
    'Brasileirão Série A': true,
    'Champions League': true,
    'Copa do Brasil': true,
    'Paulistão': true,
  });
  const [expandedLiveMatches, setExpandedLiveMatches] = useState<Record<string, boolean>>({});

  const toggleLeague = (name: string) => {
    setExpandedLeagues((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const toggleLiveMatch = (id: string) => {
    setExpandedLiveMatches((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const isSelected = (matchId: string, outcomeName: string) => {
    return selectedOdds.some(
      (s) => s.matchId === matchId && s.outcomeName === outcomeName
    );
  };

  const liveSports = [
    { id: 'futebol', label: 'Futebol' },
    { id: 'basquete', label: 'Basquete' },
    { id: 'e-basquete', label: 'E-Basquete' },
    { id: 'tenis', label: 'Tênis' },
    { id: 'badminton', label: 'Badminton' },
    { id: 'beisebol', label: 'Beisebol' },
    { id: 'cricket', label: 'Cricket' },
    { id: 'dardos', label: 'Dardos' },
  ];

  return (
    <div className="space-y-6 select-none">
      {/* Time & Market Filters row */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
        {/* Time filters */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
          {(['Todos', 'Hoje', '3h', '6h', 'Amanhã'] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTimeFilter(t)}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                timeFilter === t
                  ? 'bg-[#00e700] text-black shadow-xs font-bold'
                  : 'bg-[#141b28] hover:bg-[#1c2638] text-zinc-400 hover:text-white border border-[#1e293c]'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Market Filter Pills */}
        <div className="flex items-center gap-1.5">
          {(['Vencedor', 'Total de gols', 'Outros'] as const).map((m) => (
            <button
              key={m}
              onClick={() => setMarketFilter(m)}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                marketFilter === m
                  ? 'bg-[#00e700] text-black shadow-xs font-bold'
                  : 'bg-[#141b28] hover:bg-[#1c2638] text-zinc-400 hover:text-white border border-[#1e293c]'
              }`}
            >
              {m}
            </button>
          ))}
        </div>
      </div>

      {/* Pre-Match Leagues Accordions */}
      <div className="space-y-4">
        {PRE_MATCHES_BY_LEAGUE.map((league) => {
          const isOpen = expandedLeagues[league.leagueName] ?? true;

          return (
            <div
              key={league.leagueName}
              className="bg-[#101622] border border-[#1c2639] rounded-xl overflow-hidden shadow-sm"
            >
              {/* League header */}
              <div
                onClick={() => toggleLeague(league.leagueName)}
                className="flex items-center justify-between px-4 py-2.5 bg-[#141b2a] cursor-pointer hover:bg-[#182236] transition-colors"
              >
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-white tracking-wide">
                    {league.leagueName}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-zinc-500 font-mono text-xs">{league.count}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-zinc-400" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-zinc-400" />
                  )}
                </div>
              </div>

              {/* Matches rows */}
              {isOpen && (
                <div className="divide-y divide-[#1a2334]">
                  {league.matches.map((match) => {
                    const m = match.markets.winner;
                    if (!m) return null;

                    return (
                      <div
                        key={match.id}
                        className="px-4 py-3 flex flex-col md:flex-row md:items-center justify-between gap-3 hover:bg-[#121927] transition-colors"
                      >
                        {/* Time & Teams */}
                        <div className="flex items-center gap-4 min-w-[240px]">
                          <span className="font-mono text-xs text-zinc-400 font-medium">
                            {match.time}
                          </span>
                          <div className="flex items-center gap-2 text-xs font-semibold text-white">
                            <span className="truncate">{match.homeTeam}</span>
                            <span className="text-zinc-500 font-normal">x</span>
                            <span className="truncate">{match.awayTeam}</span>
                          </div>
                        </div>

                        {/* Odds columns (1, X, 2) */}
                        <div className="flex items-center gap-2 self-end md:self-auto">
                          {/* Home win */}
                          <button
                            onClick={() =>
                              onToggleOdd({
                                id: `${match.id}-home`,
                                matchId: match.id,
                                matchName: `${match.homeTeam} x ${match.awayTeam}`,
                                marketName: 'Vencedor do encontro',
                                outcomeName: match.homeTeam,
                                odds: m.home.odds,
                              })
                            }
                            className={`w-16 py-1.5 px-2 rounded-lg text-center font-mono text-xs font-bold transition-all tabular-nums ${
                              isSelected(match.id, match.homeTeam)
                                ? 'bg-[#00e700] text-black shadow-[0_0_8px_rgba(0,231,0,0.3)]'
                                : 'bg-[#162031] hover:bg-[#202c42] text-zinc-300 border border-[#212f47]'
                            }`}
                          >
                            {m.home.odds.toFixed(2).replace('.', ',')}
                          </button>

                          {/* Draw */}
                          {m.draw && (
                            <button
                              onClick={() =>
                                onToggleOdd({
                                  id: `${match.id}-draw`,
                                  matchId: match.id,
                                  matchName: `${match.homeTeam} x ${match.awayTeam}`,
                                  marketName: 'Vencedor do encontro',
                                  outcomeName: 'Empate',
                                  odds: m.draw.odds,
                                })
                              }
                              className={`w-16 py-1.5 px-2 rounded-lg text-center font-mono text-xs font-bold transition-all tabular-nums ${
                                isSelected(match.id, 'Empate')
                                  ? 'bg-[#00e700] text-black shadow-[0_0_8px_rgba(0,231,0,0.3)]'
                                  : 'bg-[#162031] hover:bg-[#202c42] text-zinc-300 border border-[#212f47]'
                              }`}
                            >
                              {m.draw.odds.toFixed(2).replace('.', ',')}
                            </button>
                          )}

                          {/* Away win */}
                          <button
                            onClick={() =>
                              onToggleOdd({
                                id: `${match.id}-away`,
                                matchId: match.id,
                                matchName: `${match.homeTeam} x ${match.awayTeam}`,
                                marketName: 'Vencedor do encontro',
                                outcomeName: match.awayTeam,
                                odds: m.away.odds,
                              })
                            }
                            className={`w-16 py-1.5 px-2 rounded-lg text-center font-mono text-xs font-bold transition-all tabular-nums ${
                              isSelected(match.id, match.awayTeam)
                                ? 'bg-[#00e700] text-black shadow-[0_0_8px_rgba(0,231,0,0.3)]'
                                : 'bg-[#162031] hover:bg-[#202c42] text-zinc-300 border border-[#212f47]'
                            }`}
                          >
                            {m.away.odds.toFixed(2).replace('.', ',')}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* AO VIVO Section (exact match from image) */}
      <div className="bg-[#101622] border border-[#1c2639] rounded-xl overflow-hidden shadow-lg p-4 space-y-4">
        {/* Header with live indicator */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#1c2639]">
          <div className="flex items-center gap-2">
            <span className="text-sm font-extrabold text-white tracking-wider">AO VIVO</span>
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span>
          </div>

          {/* Sub-sport tabs */}
          <div className="flex items-center gap-1 overflow-x-auto scrollbar-none text-xs">
            {liveSports.map((sp) => (
              <button
                key={sp.id}
                onClick={() => setLiveSportTab(sp.id)}
                className={`px-2.5 py-1 rounded-md whitespace-nowrap transition-colors ${
                  liveSportTab === sp.id
                    ? 'bg-[#182338] text-white font-bold border-b-2 border-[#00e700]'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {sp.label}
              </button>
            ))}
          </div>
        </div>

        {/* Market Dropdown Headers Bar */}
        <div className="hidden lg:grid grid-cols-12 gap-3 text-[11px] font-bold text-zinc-400 px-3">
          <div className="col-span-5">Partida</div>
          <div className="col-span-3 flex items-center justify-between bg-[#151c2a] px-2 py-1 rounded border border-[#202a3d]">
            <span>1X2</span>
            <ChevronDown className="w-3 h-3 text-zinc-500" />
          </div>
          <div className="col-span-2 flex items-center justify-between bg-[#151c2a] px-2 py-1 rounded border border-[#202a3d]">
            <span>Total de Gols</span>
            <ChevronDown className="w-3 h-3 text-zinc-500" />
          </div>
          <div className="col-span-2 flex items-center justify-between bg-[#151c2a] px-2 py-1 rounded border border-[#202a3d]">
            <span>Ambos os Times Marcam</span>
            <ChevronDown className="w-3 h-3 text-zinc-500" />
          </div>
        </div>

        {/* Live Matches List */}
        <div className="space-y-3">
          {LIVE_SECTION_MATCHES.map((match) => {
            const isExp = expandedLiveMatches[match.id];

            return (
              <div
                key={match.id}
                className="bg-[#141b2a] border border-[#1e293f] rounded-xl p-3.5 space-y-3 transition-colors hover:border-[#2d3e5e]"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-center">
                  {/* Column 1: Match metadata & teams */}
                  <div className="lg:col-span-5 space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="px-1.5 py-0.5 rounded text-[9px] font-extrabold bg-red-600 text-white">
                        AO VIVO
                      </span>
                      <span className="text-[11px] font-mono text-zinc-300">
                        {match.liveTime}
                      </span>
                    </div>

                    <div className="text-sm font-bold text-white">
                      <div>{match.homeTeam}</div>
                      <div>{match.awayTeam}</div>
                    </div>

                    <div className="flex items-center gap-1 text-[11px] text-zinc-400">
                      <span className="w-3 h-3 rounded-full border border-zinc-600 flex items-center justify-center text-[8px]">
                        ⚽
                      </span>
                      <span>{match.competition}</span>
                    </div>
                  </div>

                  {/* Column 2: 1X2 Odds */}
                  <div className="lg:col-span-3 grid grid-cols-3 gap-1.5">
                    {/* Home */}
                    <button
                      onClick={() =>
                        onToggleOdd({
                          id: `${match.id}-1x2-home`,
                          matchId: match.id,
                          matchName: `${match.homeTeam} x ${match.awayTeam}`,
                          marketName: '1X2',
                          outcomeName: match.homeTeam,
                          odds: match.markets.winner!.home.odds,
                        })
                      }
                      className={`p-1.5 rounded-lg text-center transition-all ${
                        isSelected(match.id, match.homeTeam)
                          ? 'bg-[#00e700] text-black font-extrabold'
                          : 'bg-[#172235] hover:bg-[#202d44] border border-[#22314a] text-zinc-200'
                      }`}
                    >
                      <div className="font-mono font-bold text-xs">
                        {match.markets.winner!.home.odds.toFixed(2)}
                      </div>
                      <div className="text-[9px] truncate opacity-70">
                        {match.homeTeam}
                      </div>
                    </button>

                    {/* Draw */}
                    <button
                      onClick={() =>
                        onToggleOdd({
                          id: `${match.id}-1x2-draw`,
                          matchId: match.id,
                          matchName: `${match.homeTeam} x ${match.awayTeam}`,
                          marketName: '1X2',
                          outcomeName: 'Empate',
                          odds: match.markets.winner!.draw!.odds,
                        })
                      }
                      className={`p-1.5 rounded-lg text-center transition-all ${
                        isSelected(match.id, 'Empate')
                          ? 'bg-[#00e700] text-black font-extrabold'
                          : 'bg-[#172235] hover:bg-[#202d44] border border-[#22314a] text-zinc-200'
                      }`}
                    >
                      <div className="font-mono font-bold text-xs">
                        {match.markets.winner!.draw!.odds.toFixed(2)}
                      </div>
                      <div className="text-[9px] truncate opacity-70">Empate</div>
                    </button>

                    {/* Away */}
                    <button
                      onClick={() =>
                        onToggleOdd({
                          id: `${match.id}-1x2-away`,
                          matchId: match.id,
                          matchName: `${match.homeTeam} x ${match.awayTeam}`,
                          marketName: '1X2',
                          outcomeName: match.awayTeam,
                          odds: match.markets.winner!.away.odds,
                        })
                      }
                      className={`p-1.5 rounded-lg text-center transition-all ${
                        isSelected(match.id, match.awayTeam)
                          ? 'bg-[#00e700] text-black font-extrabold'
                          : 'bg-[#172235] hover:bg-[#202d44] border border-[#22314a] text-zinc-200'
                      }`}
                    >
                      <div className="font-mono font-bold text-xs">
                        {match.markets.winner!.away.odds.toFixed(2)}
                      </div>
                      <div className="text-[9px] truncate opacity-70">
                        {match.awayTeam}
                      </div>
                    </button>
                  </div>

                  {/* Column 3: Total Goals */}
                  <div className="lg:col-span-2 grid grid-cols-2 gap-1.5">
                    <button
                      onClick={() =>
                        onToggleOdd({
                          id: `${match.id}-tg-over`,
                          matchId: match.id,
                          matchName: `${match.homeTeam} x ${match.awayTeam}`,
                          marketName: 'Total de Gols',
                          outcomeName: 'Mais de 3.5',
                          odds: match.markets.totalGoals!.over.odds,
                        })
                      }
                      className={`p-1.5 rounded-lg text-center transition-all ${
                        isSelected(match.id, 'Mais de 3.5')
                          ? 'bg-[#00e700] text-black font-extrabold'
                          : 'bg-[#172235] hover:bg-[#202d44] border border-[#22314a] text-zinc-200'
                      }`}
                    >
                      <div className="font-mono font-bold text-xs">
                        {match.markets.totalGoals!.over.odds.toFixed(2)}
                      </div>
                      <div className="text-[9px] truncate opacity-70">
                        Mais de 3.5
                      </div>
                    </button>

                    <button
                      onClick={() =>
                        onToggleOdd({
                          id: `${match.id}-tg-under`,
                          matchId: match.id,
                          matchName: `${match.homeTeam} x ${match.awayTeam}`,
                          marketName: 'Total de Gols',
                          outcomeName: 'Menos de 3.5',
                          odds: match.markets.totalGoals!.under.odds,
                        })
                      }
                      className={`p-1.5 rounded-lg text-center transition-all ${
                        isSelected(match.id, 'Menos de 3.5')
                          ? 'bg-[#00e700] text-black font-extrabold'
                          : 'bg-[#172235] hover:bg-[#202d44] border border-[#22314a] text-zinc-200'
                      }`}
                    >
                      <div className="font-mono font-bold text-xs">
                        {match.markets.totalGoals!.under.odds.toFixed(2)}
                      </div>
                      <div className="text-[9px] truncate opacity-70">
                        Menos de 3.5
                      </div>
                    </button>
                  </div>

                  {/* Column 4: Both to Score + Expand */}
                  <div className="lg:col-span-2 flex items-center gap-1.5">
                    <div className="grid grid-cols-2 gap-1.5 flex-1">
                      <button
                        onClick={() =>
                          onToggleOdd({
                            id: `${match.id}-bts-yes`,
                            matchId: match.id,
                            matchName: `${match.homeTeam} x ${match.awayTeam}`,
                            marketName: 'Ambos Marcam',
                            outcomeName: 'Sim',
                            odds: match.markets.bothToScore!.yes.odds,
                          })
                        }
                        className={`p-1.5 rounded-lg text-center transition-all ${
                          isSelected(match.id, 'Sim')
                            ? 'bg-[#00e700] text-black font-extrabold'
                            : 'bg-[#172235] hover:bg-[#202d44] border border-[#22314a] text-zinc-200'
                        }`}
                      >
                        <div className="font-mono font-bold text-xs">
                          {match.markets.bothToScore!.yes.odds.toFixed(2)}
                        </div>
                        <div className="text-[9px] truncate opacity-70">Sim</div>
                      </button>

                      <button
                        onClick={() =>
                          onToggleOdd({
                            id: `${match.id}-bts-no`,
                            matchId: match.id,
                            matchName: `${match.homeTeam} x ${match.awayTeam}`,
                            marketName: 'Ambos Marcam',
                            outcomeName: 'Não',
                            odds: match.markets.bothToScore!.no.odds,
                          })
                        }
                        className={`p-1.5 rounded-lg text-center transition-all ${
                          isSelected(match.id, 'Não')
                            ? 'bg-[#00e700] text-black font-extrabold'
                            : 'bg-[#172235] hover:bg-[#202d44] border border-[#22314a] text-zinc-200'
                        }`}
                      >
                        <div className="font-mono font-bold text-xs">
                          {match.markets.bothToScore!.no.odds.toFixed(2)}
                        </div>
                        <div className="text-[9px] truncate opacity-70">Não</div>
                      </button>
                    </div>

                    <button
                      onClick={() => toggleLiveMatch(match.id)}
                      className="p-2 rounded-lg bg-[#172235] text-zinc-400 hover:text-white transition-colors"
                      title="Mais mercados"
                    >
                      {isExp ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Expanded extra markets */}
                {isExp && (
                  <div className="pt-3 border-t border-[#1e293f] grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                    <div className="bg-[#101522] p-2 rounded border border-[#1b2538]">
                      <div className="text-zinc-400 text-[10px] mb-1">
                        Próximo Gol
                      </div>
                      <div className="flex justify-between font-mono">
                        <span>{match.homeTeam.slice(0, 3)}: 2.10</span>
                        <span>Nenhum: 3.20</span>
                      </div>
                    </div>
                    <div className="bg-[#101522] p-2 rounded border border-[#1b2538]">
                      <div className="text-zinc-400 text-[10px] mb-1">
                        Total de Escanteios
                      </div>
                      <div className="flex justify-between font-mono">
                        <span>+8.5: 1.85</span>
                        <span>-8.5: 1.95</span>
                      </div>
                    </div>
                    <div className="bg-[#101522] p-2 rounded border border-[#1b2538]">
                      <div className="text-zinc-400 text-[10px] mb-1">
                        Total de Cartões
                      </div>
                      <div className="flex justify-between font-mono">
                        <span>+3.5: 1.70</span>
                        <span>-3.5: 2.15</span>
                      </div>
                    </div>
                    <div className="bg-[#101522] p-2 rounded border border-[#1b2538]">
                      <div className="text-zinc-400 text-[10px] mb-1">
                        Handicap Asiático
                      </div>
                      <div className="flex justify-between font-mono">
                        <span>-1.5: 2.40</span>
                        <span>+1.5: 1.55</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
