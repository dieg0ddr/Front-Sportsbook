import React, { useState } from 'react';
import {
  ChevronDown,
  ChevronRight,
  Flame,
  Star,
  Zap,
  Tag,
  Gift,
  Globe,
} from 'lucide-react';
import { SIDEBAR_COUNTRIES } from '../data/mockSportsData';
import { BEST_LEAGUES_LIST } from '../data/bestLeagues';
import { ALL_SPORTS_MENU } from '../data/sportsMenuData';
import { LeagueBadge } from './LeagueBadge';
import {
  FootballIcon,
  BasketballIcon,
  TennisIcon,
  VoleyIcon,
  MmaIcon,
  EsportsIcon,
  HockeyIcon,
  TableTennisIcon,
  AmericanFootballIcon,
  BaseballIcon,
  MotorsportIcon,
  BoxingIcon,
  HandballIcon,
} from './SportIcons';

interface SidebarProps {
  selectedTimeFilter: string;
  setSelectedTimeFilter: (filter: string) => void;
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  onOpenPromo: (title: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  selectedTimeFilter,
  setSelectedTimeFilter,
  selectedCategory,
  setSelectedCategory,
  onOpenPromo,
}) => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    futebol: true,
    melhores_ligas: true,
    alemanha: false,
    basquete: false,
    tenis: false,
  });

  const [favorites, setFavorites] = useState<Record<string, boolean>>({
    'de-1': true,
    'de-2': true,
  });

  const toggleSection = (key: string) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const renderSportIcon = (iconType: string) => {
    switch (iconType) {
      case 'basketball':
        return <BasketballIcon className="w-4 h-4 text-orange-400" />;
      case 'tennis':
        return <TennisIcon className="w-4 h-4 text-lime-400" />;
      case 'esports':
        return <EsportsIcon className="w-4 h-4 text-purple-400" />;
      case 'mma':
        return <MmaIcon className="w-4 h-4 text-red-400" />;
      case 'voley':
        return <VoleyIcon className="w-4 h-4 text-yellow-400" />;
      case 'american-football':
        return <AmericanFootballIcon className="w-4 h-4 text-amber-500" />;
      case 'motorsport':
        return <MotorsportIcon className="w-4 h-4 text-red-500" />;
      case 'baseball':
        return <BaseballIcon className="w-4 h-4 text-blue-400" />;
      case 'hockey':
        return <HockeyIcon className="w-4 h-4 text-cyan-400" />;
      case 'table-tennis':
        return <TableTennisIcon className="w-4 h-4 text-emerald-400" />;
      case 'handball':
        return <HandballIcon className="w-4 h-4 text-indigo-400" />;
      case 'boxing':
        return <BoxingIcon className="w-4 h-4 text-rose-400" />;
      default:
        return <FootballIcon className="w-4 h-4 text-zinc-300" />;
    }
  };

  const timeFilters = ['Tudo', 'Hoje', '3h', '6h', '24h', 'Amanhã'];

  return (
    <aside className="w-full lg:w-[260px] xl:w-[280px] shrink-0 bg-[#0d121c] border-r border-[#1a2334] flex flex-col p-3 space-y-4 select-none text-xs lg:sticky lg:top-[57px] lg:max-h-[calc(100vh-57px)] overflow-y-auto">
      {/* Top Quick Menu (Super Odds, Promoções, Bônus) */}
      <div className="space-y-1">
        <button
          onClick={() => onOpenPromo('Super Odds Turbinadas')}
          className="w-full flex items-center justify-between p-2.5 rounded-lg bg-[#141b2a] hover:bg-[#1a2336] border border-[#1e293f] text-zinc-200 transition-colors group"
        >
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-[#00e700]" />
            <span className="font-semibold">Super Odds</span>
          </div>
          <ChevronDown className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white" />
        </button>

        <button
          onClick={() => onOpenPromo('Promoções Especiais da Semana')}
          className="w-full flex items-center justify-between p-2.5 rounded-lg bg-[#141b2a] hover:bg-[#1a2336] border border-[#1e293f] text-zinc-200 transition-colors group"
        >
          <div className="flex items-center gap-2">
            <Tag className="w-4 h-4 text-[#00e700]" />
            <span className="font-semibold">Promoções</span>
          </div>
          <ChevronDown className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white" />
        </button>

        <button
          onClick={() => onOpenPromo('Bônus de Boas-Vindas até 100%')}
          className="w-full flex items-center justify-between p-2.5 rounded-lg bg-[#141b2a] hover:bg-[#1a2336] border border-[#1e293f] text-zinc-200 transition-colors group"
        >
          <div className="flex items-center gap-2">
            <Gift className="w-4 h-4 text-[#00e700]" />
            <span className="font-semibold">Bônus</span>
          </div>
        </button>
      </div>

      {/* Instructional helper box */}
      <div className="p-2.5 rounded-lg bg-[#111724] border border-[#1a2436] text-[11px] text-zinc-400 leading-snug">
        Aqui pode entrar um menu de ícones mudando o menu abaixo...
      </div>

      {/* Main Menu Section */}
      <div className="space-y-3">
        <div className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider">
          MENU
        </div>

        {/* Time filters bar */}
        <div className="flex items-center gap-1 overflow-x-auto pb-1 scrollbar-none">
          {timeFilters.map((tf) => (
            <button
              key={tf}
              onClick={() => setSelectedTimeFilter(tf)}
              className={`px-2 py-1 rounded text-[11px] font-medium whitespace-nowrap transition-colors ${
                selectedTimeFilter === tf
                  ? 'bg-[#00e700] text-black font-bold'
                  : 'bg-[#141c2a] text-zinc-400 hover:text-white hover:bg-[#1c2638]'
              }`}
            >
              {tf}
            </button>
          ))}
        </div>

        {/* Tree List */}
        <div className="space-y-1">
          {/* Futebol Level */}
          <div>
            <div
              onClick={() => toggleSection('futebol')}
              className="flex items-center justify-between p-2 rounded-lg hover:bg-[#151d2c] cursor-pointer text-zinc-200 transition-colors"
            >
              <div className="flex items-center gap-2">
                <FootballIcon className="w-4 h-4 text-zinc-300" />
                <span className="font-bold text-white text-sm">Futebol</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-red-600 text-white">
                  AO VIVO
                </span>
                <span className="text-zinc-500 text-[11px] font-mono">1470</span>
                {openSections['futebol'] ? (
                  <ChevronDown className="w-3.5 h-3.5 text-zinc-400" />
                ) : (
                  <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
                )}
              </div>
            </div>

            {/* Futebol sub-tree */}
            {openSections['futebol'] && (
              <div className="pl-4 pr-1 py-1 space-y-0.5 border-l border-[#1a2334] ml-3">
                {/* Melhores ligas */}
                <div className="space-y-0.5">
                  <div
                    onClick={() => toggleSection('melhores_ligas')}
                    className="flex items-center justify-between p-1.5 rounded hover:bg-[#151d2c] cursor-pointer text-zinc-300 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <Flame className="w-3.5 h-3.5 text-orange-400" />
                      <span className="font-semibold text-white">Melhores ligas de Futebol</span>
                    </div>
                    {openSections['melhores_ligas'] ? (
                      <ChevronDown className="w-3 h-3 text-zinc-400" />
                    ) : (
                      <ChevronRight className="w-3 h-3 text-zinc-400" />
                    )}
                  </div>

                  {/* Submenu with the options from Frame 14.png */}
                  {openSections['melhores_ligas'] && (
                    <div className="pl-2 pr-1 py-1 space-y-0.5 border-l border-[#222e46] ml-3 max-h-[460px] overflow-y-auto scrollbar-thin">
                      {BEST_LEAGUES_LIST.map((league) => (
                        <div
                          key={league.id}
                          onClick={() => setSelectedCategory(league.name)}
                          className={`flex items-center gap-2.5 px-2 py-1.5 rounded-md cursor-pointer transition-colors text-[11px] group ${
                            selectedCategory === league.name
                              ? 'bg-[#182338] text-white font-bold'
                              : 'text-zinc-300 hover:text-white hover:bg-[#141b2a]'
                          }`}
                        >
                          <LeagueBadge type={league.badgeType} className="w-4 h-4 shrink-0" />
                          <span className="truncate group-hover:text-white">{league.name}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Countries List */}
                {SIDEBAR_COUNTRIES.map((country) => {
                  const hasSubLeagues = !!country.subLeagues;
                  const isOpen = openSections[country.id];

                  return (
                    <div key={country.id} className="space-y-0.5">
                      <div
                        onClick={() => hasSubLeagues && toggleSection(country.id)}
                        className={`flex items-center justify-between p-1.5 rounded hover:bg-[#151d2c] cursor-pointer text-zinc-300 ${
                          isOpen ? 'bg-[#141b2a]' : ''
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-sm leading-none">{country.flag}</span>
                          <span className="truncate">{country.name}</span>
                        </div>

                        <div className="flex items-center gap-1.5">
                          {country.isLive && (
                            <span className="px-1 py-0.2 rounded text-[8px] font-bold bg-red-600 text-white">
                              AO VIVO
                            </span>
                          )}
                          {hasSubLeagues && (
                            isOpen ? (
                              <ChevronDown className="w-3 h-3 text-zinc-400" />
                            ) : (
                              <ChevronRight className="w-3 h-3 text-zinc-400" />
                            )
                          )}
                        </div>
                      </div>

                      {/* Sub leagues (e.g. Alemanha) */}
                      {hasSubLeagues && isOpen && (
                        <div className="pl-5 space-y-0.5 py-0.5 border-l border-[#222e46] ml-3">
                          {country.subLeagues?.map((sub) => {
                            const isFav = favorites[sub.id];
                            return (
                              <div
                                key={sub.id}
                                className="flex items-center justify-between p-1.5 rounded hover:bg-[#172030] cursor-pointer text-zinc-300 text-[11px]"
                              >
                                <div className="flex items-center gap-2 truncate">
                                  <span className="truncate">{sub.name}</span>
                                </div>
                                <button
                                  onClick={(e) => toggleFavorite(sub.id, e)}
                                  className="text-zinc-500 hover:text-amber-400 p-0.5 transition-colors"
                                >
                                  <Star
                                    className={`w-3 h-3 ${
                                      isFav ? 'fill-amber-400 text-amber-400' : ''
                                    }`}
                                  />
                                </button>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Other Sports Menu */}
          {ALL_SPORTS_MENU.map((sport) => {
            const isOpen = openSections[sport.id];
            const isSelected = selectedCategory === sport.name;

            return (
              <div key={sport.id} className="space-y-0.5">
                <div
                  onClick={() => toggleSection(sport.id)}
                  className={`flex items-center justify-between p-2 rounded-lg hover:bg-[#151d2c] cursor-pointer text-zinc-200 transition-colors ${
                    isSelected ? 'bg-[#141b2a] text-white' : ''
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {renderSportIcon(sport.iconType)}
                    <span className="font-bold text-zinc-100 text-sm">{sport.name}</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    {sport.isLive && (
                      <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-red-600 text-white">
                        AO VIVO
                      </span>
                    )}
                    <span className="text-zinc-500 text-[11px] font-mono">{sport.totalCount}</span>
                    {isOpen ? (
                      <ChevronDown className="w-3.5 h-3.5 text-zinc-400" />
                    ) : (
                      <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
                    )}
                  </div>
                </div>

                {/* Sub leagues for this sport */}
                {isOpen && (
                  <div className="pl-4 pr-1 py-1 space-y-0.5 border-l border-[#1a2334] ml-3">
                    {sport.leagues.map((sub) => {
                      const isSubSelected = selectedCategory === sub.name;
                      return (
                        <div
                          key={sub.id}
                          onClick={() => setSelectedCategory(sub.name)}
                          className={`flex items-center justify-between p-1.5 rounded-md cursor-pointer transition-colors text-[11px] ${
                            isSubSelected
                              ? 'bg-[#182338] text-white font-bold'
                              : 'text-zinc-300 hover:text-white hover:bg-[#151d2c]'
                          }`}
                        >
                          <span className="truncate">{sub.name}</span>
                          <div className="flex items-center gap-1.5">
                            {sub.isLive && (
                              <span className="px-1 py-0.2 rounded text-[8px] font-bold bg-red-600 text-white">
                                AO VIVO
                              </span>
                            )}
                            {sub.count && (
                              <span className="text-zinc-500 font-mono text-[10px]">{sub.count}</span>
                            )}
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
      </div>
    </aside>
  );
};
