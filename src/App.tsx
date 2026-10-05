/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { UserAccount, OddSelection } from './types/sportsbook';
import { INITIAL_BETSLIP_SELECTIONS, POPULAR_MULTIPLES } from './data/mockSportsData';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { HeroBanner } from './components/HeroBanner';
import { PopularMultiples } from './components/PopularMultiples';
import { MatchesList } from './components/MatchesList';
import { BasketballRows } from './components/BasketballRows';
import { PitchTracker } from './components/PitchTracker';
import { BetSlip } from './components/BetSlip';
import { Footer } from './components/Footer';
import { MobileView } from './components/MobileView';
import { AuthModal } from './components/AuthModal';
import { DepositModal } from './components/DepositModal';
import { PromoModal } from './components/PromoModal';
import { SupportModal } from './components/SupportModal';
import { Dices, Gamepad2, Sparkles } from 'lucide-react';

export default function App() {
  // User state
  const [user, setUser] = useState<UserAccount>({
    isLoggedIn: false,
    name: 'Diego Ribeiro',
    email: 'diego.ddr007@gmail.com',
    balance: 250.0,
  });

  // Navigation tab state
  const [activeNav, setActiveNav] = useState<'cassino' | 'esportes' | 'virtuais'>('esportes');

  // Betslip state initialized with the 4 matches from the screenshot
  const [selections, setSelections] = useState<OddSelection[]>(INITIAL_BETSLIP_SELECTIONS);

  // Filters
  const [selectedSport, setSelectedSport] = useState<string>('futebol');
  const [selectedTimeFilter, setSelectedTimeFilter] = useState<string>('Hoje');
  const [selectedCategory, setSelectedCategory] = useState<string>('Futebol');

  // Modals state
  const [isAuthOpen, setIsAuthOpen] = useState<boolean>(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [isDepositOpen, setIsDepositOpen] = useState<boolean>(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState<boolean>(false);
  const [promoModalTitle, setPromoModalTitle] = useState<string | null>(null);
  const [isSupportOpen, setIsSupportOpen] = useState<boolean>(false);
  const [isMobileBetslipOpen, setIsMobileBetslipOpen] = useState<boolean>(false);

  // Toggle selection in betslip
  const handleToggleOdd = (odd: OddSelection) => {
    setSelections((prev) => {
      const exists = prev.find(
        (s) => s.matchId === odd.matchId && s.outcomeName === odd.outcomeName
      );
      if (exists) {
        return prev.filter((s) => s.id !== exists.id);
      }
      // Remove other pick from same match if single outcome market
      const filtered = prev.filter((s) => s.matchId !== odd.matchId);
      return [...filtered, odd];
    });
  };

  const handleRemoveSelection = (id: string) => {
    setSelections((prev) => prev.filter((s) => s.id !== id));
  };

  const handleClearAll = () => {
    setSelections([]);
  };

  const handleOpenAuth = (mode: 'login' | 'register') => {
    setAuthMode(mode);
    setIsAuthOpen(true);
  };

  const handleLoginSuccess = (account: UserAccount) => {
    setUser(account);
  };

  const handleDepositSuccess = (amount: number) => {
    setUser((prev) => ({
      ...prev,
      balance: prev.balance + amount,
    }));
  };

  const handlePlaceBetSuccess = (stake: number, totalWin: number) => {
    setUser((prev) => ({
      ...prev,
      balance: Math.max(0, prev.balance - stake),
    }));
  };

  const handleLogout = () => {
    setUser((prev) => ({ ...prev, isLoggedIn: false }));
  };

  return (
    <div className="min-h-screen bg-[#0b0e14] text-[#e1e7ec] flex flex-col font-sans">
      {/* Top Header */}
      <Header
        user={user}
        activeNav={activeNav}
        setActiveNav={setActiveNav}
        onOpenAuth={handleOpenAuth}
        onOpenDeposit={() => setIsDepositOpen(true)}
        onToggleUserMenu={() => setIsUserMenuOpen(!isUserMenuOpen)}
        isUserMenuOpen={isUserMenuOpen}
        onLogout={handleLogout}
      />

      {/* Main Content Area */}
      {activeNav === 'esportes' ? (
        <>
          {/* Mobile View (Strictly matches image.png) */}
          <div className="block lg:hidden w-full">
            <MobileView
              user={user}
              onOpenAuth={handleOpenAuth}
              selectedOdds={selections}
              onToggleOdd={handleToggleOdd}
              onOpenDeposit={() => setIsDepositOpen(true)}
              onOpenBetslip={() => setIsMobileBetslipOpen(true)}
            />

            {/* Mobile Betslip Bottom Drawer */}
            {isMobileBetslipOpen && (
              <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex flex-col justify-end">
                <div className="bg-[#0f141f] border-t border-[#1e293f] rounded-t-2xl max-h-[85vh] overflow-y-auto p-4 flex flex-col space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-[#1b2538]">
                    <h3 className="text-sm font-black text-white uppercase tracking-wider">
                      Cupom de Apostas ({selections.length})
                    </h3>
                    <button
                      onClick={() => setIsMobileBetslipOpen(false)}
                      className="w-8 h-8 rounded-full bg-[#162032] flex items-center justify-center text-zinc-400 hover:text-white"
                    >
                      ✕
                    </button>
                  </div>
                  <BetSlip
                    selections={selections}
                    onRemoveSelection={handleRemoveSelection}
                    onClearAll={handleClearAll}
                    user={user}
                    onOpenAuth={handleOpenAuth}
                    onPlaceBetSuccess={(stake, win) => {
                      handlePlaceBetSuccess(stake, win);
                      setIsMobileBetslipOpen(false);
                    }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Desktop View (Preserved completely) */}
          <main className="hidden lg:flex flex-1 w-full max-w-[1720px] mx-auto px-2 sm:px-4 lg:px-6 py-4 flex-col lg:flex-row gap-4 items-start">
            {/* Left Column (Sidebar) */}
            <Sidebar
              selectedTimeFilter={selectedTimeFilter}
              setSelectedTimeFilter={setSelectedTimeFilter}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              onOpenPromo={(title) => setPromoModalTitle(title)}
            />

            {/* Center Column (Sportsbook Main Feed) */}
            <div className="flex-1 min-w-0 space-y-5 w-full">
              {/* Nations League Banner */}
              <HeroBanner
                onLearnMore={() =>
                  setPromoModalTitle('A LIGA DAS NAÇÕES COMEÇOU - Regras & Super Cotações')
                }
              />

              {/* Circular Sports Selector + Popular Multiples Carousel */}
              <PopularMultiples
                items={POPULAR_MULTIPLES}
                selectedOdds={selections}
                onToggleOdd={handleToggleOdd}
                selectedSport={selectedSport}
                setSelectedSport={setSelectedSport}
                showCards={selectedSport !== 'basquete'}
              />

              {selectedSport === 'basquete' ? (
                <BasketballRows
                  selectedOdds={selections}
                  onToggleOdd={handleToggleOdd}
                />
              ) : (
                <MatchesList
                  selectedOdds={selections}
                  onToggleOdd={handleToggleOdd}
                />
              )}
            </div>

            {/* Right Column (Live Radar & Betslip) */}
            <div className="w-full lg:w-[320px] xl:w-[340px] shrink-0 space-y-4">
              {/* Live Match Pitch Radar Tracker */}
              <PitchTracker />

              {/* Cupom de Apostas (Betslip) */}
              <BetSlip
                selections={selections}
                onRemoveSelection={handleRemoveSelection}
                onClearAll={handleClearAll}
                user={user}
                onOpenAuth={handleOpenAuth}
                onPlaceBetSuccess={handlePlaceBetSuccess}
              />
            </div>
          </main>
        </>
      ) : activeNav === 'cassino' ? (
        /* Cassino View */
        <div className="flex-1 max-w-7xl mx-auto w-full p-6 space-y-6">
          <div className="bg-[#121927] border border-[#202c40] rounded-2xl p-6 text-center space-y-3">
            <div className="w-14 h-14 rounded-2xl bg-[#00e700]/20 text-[#00e700] mx-auto flex items-center justify-center">
              <Dices className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-black text-white">Cassino Ao Vivo & Slots</h2>
            <p className="text-xs text-zinc-400 max-w-lg mx-auto">
              Experimente Roleta Brasileira, Blackjack, Aviator, Spaceman e centenas de slots dos maiores provedores mundiais.
            </p>
            <button
              onClick={() => setActiveNav('esportes')}
              className="px-5 py-2.5 rounded-lg bg-[#00e700] text-black font-extrabold text-xs uppercase"
            >
              Voltar para Esportes
            </button>
          </div>
        </div>
      ) : (
        /* Virtuais View */
        <div className="flex-1 max-w-7xl mx-auto w-full p-6 space-y-6">
          <div className="bg-[#121927] border border-[#202c40] rounded-2xl p-6 text-center space-y-3">
            <div className="w-14 h-14 rounded-2xl bg-[#00e700]/20 text-[#00e700] mx-auto flex items-center justify-center">
              <Gamepad2 className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-black text-white">Esportes Virtuais 24/7</h2>
            <p className="text-xs text-zinc-400 max-w-lg mx-auto">
              Corridas de galgos, cavalos e campeonatos de futebol virtual com partidas a cada 3 minutos.
            </p>
            <button
              onClick={() => setActiveNav('esportes')}
              className="px-5 py-2.5 rounded-lg bg-[#00e700] text-black font-extrabold text-xs uppercase"
            >
              Voltar para Esportes
            </button>
          </div>
        </div>
      )}

      {/* Footer with legal disclaimer, Ministerio da Fazenda seal, and trust badges */}
      <div className="hidden lg:block">
        <Footer
          onOpenSupport={() => setIsSupportOpen(true)}
          onOpenPolicy={(title) => setPromoModalTitle(title)}
        />
      </div>

      {/* Modals */}
      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        initialMode={authMode}
        onLoginSuccess={handleLoginSuccess}
      />

      <DepositModal
        isOpen={isDepositOpen}
        onClose={() => setIsDepositOpen(false)}
        onDepositSuccess={handleDepositSuccess}
      />

      <PromoModal
        isOpen={!!promoModalTitle}
        onClose={() => setPromoModalTitle(null)}
        title={promoModalTitle || ''}
      />

      <SupportModal
        isOpen={isSupportOpen}
        onClose={() => setIsSupportOpen(false)}
      />
    </div>
  );
}
