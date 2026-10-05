import React, { useState, useEffect } from 'react';
import {
  Minus,
  Maximize2,
  BarChart2,
  SlidersHorizontal,
  Volume2,
  VolumeX,
  Shield,
  Activity,
} from 'lucide-react';

export const PitchTracker: React.FC = () => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [activeTab, setActiveTab] = useState<'pitch' | 'stats' | 'events' | 'lineups' | 'settings'>('pitch');
  const [isMuted, setIsMuted] = useState(true);

  // Live simulation state
  const [ballPos, setBallPos] = useState({ x: 62, y: 48 });
  const [possession, setPossession] = useState('Havelse');
  const [actionLabel, setActionLabel] = useState('Em posse: Havelse');
  const [gameClock, setGameClock] = useState('88:24');

  useEffect(() => {
    const states = [
      { pos: { x: 55, y: 50 }, possession: 'Havelse', label: 'Em posse: Havelse' },
      { pos: { x: 68, y: 42 }, possession: 'Havelse', label: 'Construção ofensiva' },
      { pos: { x: 82, y: 35 }, possession: 'Havelse', label: 'Ataque perigoso!' },
      { pos: { x: 88, y: 48 }, possession: 'Havelse', label: 'Finalização defendida!' },
      { pos: { x: 75, y: 80 }, possession: 'Equador', label: 'Escanteio Havelse' },
      { pos: { x: 45, y: 45 }, possession: 'Japão', label: 'Em posse: Japão' },
      { pos: { x: 30, y: 60 }, possession: 'Japão', label: 'Ataque pelo flanco' },
    ];
    let idx = 0;

    const interval = setInterval(() => {
      idx = (idx + 1) % states.length;
      setBallPos(states[idx].pos);
      setPossession(states[idx].possession);
      setActionLabel(states[idx].label);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#111722] border border-[#1d273a] rounded-xl overflow-hidden shadow-lg transition-all">
      {/* Header */}
      <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#141c2b] border-b border-[#1d273a]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
          <span className="text-xs font-bold text-white tracking-wide">
            AO VIVO - Japão x Equador
          </span>
          <span className="text-[10px] text-zinc-400 font-mono">2T {gameClock}</span>
        </div>
        <button
          onClick={() => setIsMinimized(!isMinimized)}
          className="text-zinc-400 hover:text-white p-1 rounded hover:bg-[#1f2b40] transition-colors"
          title={isMinimized ? 'Expandir' : 'Minimizar'}
        >
          {isMinimized ? <Maximize2 className="w-3.5 h-3.5" /> : <Minus className="w-3.5 h-3.5" />}
        </button>
      </div>

      {!isMinimized && (
        <div>
          {/* Main Display Area */}
          {activeTab === 'pitch' && (
            <div className="p-3">
              {/* Field Graphic */}
              <div className="relative w-full aspect-[16/10] bg-gradient-to-b from-[#2e6b27] via-[#24591f] to-[#1c4718] rounded-lg border border-[#3e8535] overflow-hidden shadow-inner flex items-center justify-center">
                {/* Field Grass Stripes */}
                <div className="absolute inset-0 grid grid-cols-6 opacity-15 pointer-events-none">
                  <div className="bg-white/10"></div>
                  <div></div>
                  <div className="bg-white/10"></div>
                  <div></div>
                  <div className="bg-white/10"></div>
                  <div></div>
                </div>

                {/* Field Markings (SVG) */}
                <svg className="absolute inset-0 w-full h-full stroke-white/40 fill-none" strokeWidth="1.2">
                  {/* Outer boundary */}
                  <rect x="6%" y="6%" width="88%" height="88%" />
                  {/* Halfway line */}
                  <line x1="50%" y1="6%" x2="50%" y2="94%" />
                  {/* Center circle */}
                  <circle cx="50%" cy="50%" r="14%" />
                  <circle cx="50%" cy="50%" r="1.5%" className="fill-white/60" />

                  {/* Left Penalty Area */}
                  <rect x="6%" y="24%" width="16%" height="52%" />
                  <rect x="6%" y="36%" width="6%" height="28%" />
                  <path d="M 22% 43% A 8 8 0 0 1 22% 57%" />
                  <circle cx="17%" cy="50%" r="1%" className="fill-white/60" />

                  {/* Right Penalty Area */}
                  <rect x="78%" y="24%" width="16%" height="52%" />
                  <rect x="88%" y="36%" width="6%" height="28%" />
                  <path d="M 78% 43% A 8 8 0 0 0 78% 57%" />
                  <circle cx="83%" cy="50%" r="1%" className="fill-white/60" />

                  {/* Corner Arcs */}
                  <path d="M 6% 9% A 3 3 0 0 0 9% 6%" />
                  <path d="M 91% 6% A 3 3 0 0 0 94% 9%" />
                  <path d="M 6% 91% A 3 3 0 0 1 9% 94%" />
                  <path d="M 94% 91% A 3 3 0 0 0 91% 94%" />
                </svg>

                {/* Animated Ball Indicator */}
                <div
                  className="absolute transition-all duration-1000 ease-out z-10 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                  style={{ left: `${ballPos.x}%`, top: `${ballPos.y}%` }}
                >
                  <div className="relative flex items-center justify-center">
                    <span className="absolute w-6 h-6 rounded-full bg-white/20 animate-ping"></span>
                    <span className="w-3.5 h-3.5 rounded-full bg-white border-2 border-red-500 shadow-md"></span>
                  </div>
                </div>

                {/* Match Situation Badge overlay */}
                <div
                  className="absolute z-20 transition-all duration-700 pointer-events-none"
                  style={{
                    left: `${Math.min(Math.max(ballPos.x, 25), 75)}%`,
                    top: `${ballPos.y < 50 ? ballPos.y + 12 : ballPos.y - 14}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <div className="px-2.5 py-1 rounded bg-[#0b1019]/90 border border-white/20 backdrop-blur-xs text-[11px] font-medium text-white shadow-lg whitespace-nowrap flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00e700]"></span>
                    <span>{actionLabel}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Stats View */}
          {activeTab === 'stats' && (
            <div className="p-3 space-y-2.5 text-xs">
              <div className="flex justify-between items-center text-zinc-400 font-bold border-b border-[#1f2b40] pb-1">
                <span>Japão</span>
                <span className="text-zinc-500">ESTATÍSTICAS</span>
                <span>Equador</span>
              </div>
              <div className="space-y-1.5">
                <div className="flex justify-between text-zinc-300">
                  <span>54%</span>
                  <span className="text-zinc-400 text-[11px]">Posse de bola</span>
                  <span>46%</span>
                </div>
                <div className="w-full bg-[#1c2438] h-1.5 rounded-full overflow-hidden flex">
                  <div className="bg-[#00e700] h-full" style={{ width: '54%' }}></div>
                  <div className="bg-amber-400 h-full" style={{ width: '46%' }}></div>
                </div>
              </div>
              <div className="space-y-1.5">
                <div className="flex justify-between text-zinc-300">
                  <span>8</span>
                  <span className="text-zinc-400 text-[11px]">Finalizações</span>
                  <span>5</span>
                </div>
                <div className="w-full bg-[#1c2438] h-1.5 rounded-full overflow-hidden flex">
                  <div className="bg-[#00e700] h-full" style={{ width: '61%' }}></div>
                  <div className="bg-amber-400 h-full" style={{ width: '39%' }}></div>
                </div>
              </div>
              <div className="flex justify-between text-zinc-300 py-0.5">
                <span>4</span>
                <span className="text-zinc-400 text-[11px]">No gol</span>
                <span>2</span>
              </div>
              <div className="flex justify-between text-zinc-300 py-0.5">
                <span>5</span>
                <span className="text-zinc-400 text-[11px]">Escanteios</span>
                <span>3</span>
              </div>
              <div className="flex justify-between text-zinc-300 py-0.5">
                <span>1</span>
                <span className="text-zinc-400 text-[11px]">Cartões Amarelos</span>
                <span>2</span>
              </div>
            </div>
          )}

          {/* Events View */}
          {activeTab === 'events' && (
            <div className="p-3 space-y-2 text-xs text-zinc-300 max-h-48 overflow-y-auto">
              <div className="flex items-center gap-2 text-zinc-400 text-[11px]">
                <span className="font-mono text-white">84'</span>
                <span>Cartão Amarelo para Equador (#7 Caicedo)</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-400 text-[11px]">
                <span className="font-mono text-white">72'</span>
                <span>Substituição Japão: Sai Tanaka, entra Minamino</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-400 text-[11px]">
                <span className="font-mono text-white">61'</span>
                <span>Chute no travessão de Japão!</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-400 text-[11px]">
                <span className="font-mono text-white">45'</span>
                <span>Início do 2º Tempo</span>
              </div>
            </div>
          )}

          {/* Lineups View */}
          {activeTab === 'lineups' && (
            <div className="p-3 text-xs text-zinc-300 space-y-2">
              <div className="font-semibold text-white">Escalações Confirmadas</div>
              <div className="grid grid-cols-2 gap-2 text-[11px]">
                <div className="bg-[#141b2b] p-2 rounded border border-[#202c42]">
                  <div className="font-bold text-[#00e700] mb-1">Japão (4-3-3)</div>
                  <div>12 Schmidt (G)</div>
                  <div>4 Itakura</div>
                  <div>16 Tomiyasu</div>
                  <div>6 Endo</div>
                  <div>10 Doan</div>
                </div>
                <div className="bg-[#141b2b] p-2 rounded border border-[#202c42]">
                  <div className="font-bold text-amber-400 mb-1">Equador (4-4-2)</div>
                  <div>1 Galindez (G)</div>
                  <div>3 Hincapie</div>
                  <div>2 Torres</div>
                  <div>23 Caicedo</div>
                  <div>13 Valencia</div>
                </div>
              </div>
            </div>
          )}

          {/* Settings View */}
          {activeTab === 'settings' && (
            <div className="p-3 space-y-2 text-xs">
              <div className="flex items-center justify-between text-zinc-300">
                <span>Efeitos sonoros do radar</span>
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-1 rounded bg-[#1c263b] hover:bg-[#25324d] text-white"
                >
                  {isMuted ? <VolumeX className="w-4 h-4 text-zinc-400" /> : <Volume2 className="w-4 h-4 text-[#00e700]" />}
                </button>
              </div>
              <div className="text-[11px] text-zinc-400">
                Acompanhe o posicionamento tático e lances perigosos em tempo real com delay inferior a 1s.
              </div>
            </div>
          )}

          {/* Bottom Toolbar Icons (exact five icons from the screenshot) */}
          <div className="flex items-center justify-around py-2 border-t border-[#1d273a] bg-[#0f1522] text-zinc-400">
            <button
              onClick={() => setActiveTab('stats')}
              className={`p-1.5 rounded transition-colors ${
                activeTab === 'stats' ? 'text-[#00e700] bg-[#1a2336]' : 'hover:text-white'
              }`}
              title="Estatísticas"
            >
              <BarChart2 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setActiveTab('pitch')}
              className={`p-1.5 rounded transition-colors ${
                activeTab === 'pitch' ? 'text-[#00e700] bg-[#1a2336]' : 'hover:text-white'
              }`}
              title="Campo de Jogo"
            >
              <Activity className="w-4 h-4" />
            </button>
            <button
              onClick={() => setActiveTab('events')}
              className={`p-1.5 rounded transition-colors ${
                activeTab === 'events' ? 'text-[#00e700] bg-[#1a2336]' : 'hover:text-white'
              }`}
              title="Lances"
            >
              <div className="w-4 h-4 rounded-full border border-current flex items-center justify-center text-[9px] font-bold">
                ⚽
              </div>
            </button>
            <button
              onClick={() => setActiveTab('lineups')}
              className={`p-1.5 rounded transition-colors ${
                activeTab === 'lineups' ? 'text-[#00e700] bg-[#1a2336]' : 'hover:text-white'
              }`}
              title="Escalações"
            >
              <Shield className="w-4 h-4" />
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`p-1.5 rounded transition-colors ${
                activeTab === 'settings' ? 'text-[#00e700] bg-[#1a2336]' : 'hover:text-white'
              }`}
              title="Configurações"
            >
              <SlidersHorizontal className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
