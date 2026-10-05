export interface SportSubLeague {
  id: string;
  name: string;
  count?: number;
  isLive?: boolean;
}

export interface SportMenuCategory {
  id: string;
  name: string;
  iconType: string;
  totalCount: number;
  isLive?: boolean;
  leagues: SportSubLeague[];
}

export const ALL_SPORTS_MENU: SportMenuCategory[] = [
  {
    id: 'basquete',
    name: 'Basquete',
    iconType: 'basketball',
    totalCount: 238,
    isLive: true,
    leagues: [
      { id: 'b-nba', name: 'NBA (EUA)', count: 12, isLive: true },
      { id: 'b-euro', name: 'Euroliga', count: 8, isLive: true },
      { id: 'b-nbb', name: 'NBB (Brasil)', count: 4 },
      { id: 'b-acb', name: 'Liga ACB (Espanha)', count: 6 },
      { id: 'b-ncaa', name: 'NCAA Basketball', count: 18 },
      { id: 'b-ecup', name: 'Eurocup', count: 5 },
    ],
  },
  {
    id: 'tenis',
    name: 'Tênis',
    iconType: 'tennis',
    totalCount: 114,
    isLive: true,
    leagues: [
      { id: 't-atp', name: 'ATP - Masters 1000', count: 14, isLive: true },
      { id: 't-wta', name: 'WTA - Premier', count: 12, isLive: true },
      { id: 't-gs', name: 'Grand Slam', count: 24 },
      { id: 't-chal', name: 'ATP Challenger', count: 18, isLive: true },
      { id: 't-itf', name: 'ITF World Tour', count: 28 },
    ],
  },
  {
    id: 'esports',
    name: 'E-Sports',
    iconType: 'esports',
    totalCount: 85,
    isLive: true,
    leagues: [
      { id: 'e-cs2', name: 'CS2 (Counter-Strike)', count: 22, isLive: true },
      { id: 'e-lol', name: 'League of Legends (CBLOL)', count: 16, isLive: true },
      { id: 'e-val', name: 'Valorant Champions Tour', count: 14, isLive: true },
      { id: 'e-dota', name: 'Dota 2 - Pro Circuit', count: 12 },
      { id: 'e-r6', name: 'Rainbow Six Siege', count: 8 },
    ],
  },
  {
    id: 'mma',
    name: 'MMA / UFC',
    iconType: 'mma',
    totalCount: 42,
    leagues: [
      { id: 'm-ufc', name: 'UFC - Card Principal', count: 12 },
      { id: 'm-fn', name: 'UFC Fight Night', count: 14 },
      { id: 'm-pfl', name: 'PFL Championship', count: 8 },
      { id: 'm-bel', name: 'Bellator MMA', count: 8 },
    ],
  },
  {
    id: 'volei',
    name: 'Vôlei',
    iconType: 'voley',
    totalCount: 56,
    isLive: true,
    leagues: [
      { id: 'v-sup-m', name: 'Superliga Masculina Brasil', count: 6, isLive: true },
      { id: 'v-sup-f', name: 'Superliga Feminina Brasil', count: 8 },
      { id: 'v-cev', name: 'CEV Champions League', count: 10 },
      { id: 'v-vnl', name: 'Liga das Nações (VNL)', count: 12 },
    ],
  },
  {
    id: 'futebol-americano',
    name: 'Futebol Americano',
    iconType: 'american-football',
    totalCount: 36,
    leagues: [
      { id: 'fa-nfl', name: 'NFL', count: 16 },
      { id: 'fa-ncaa', name: 'NCAA Football', count: 14 },
      { id: 'fa-cfl', name: 'CFL Canadá', count: 6 },
    ],
  },
  {
    id: 'formula1',
    name: 'Fórmula 1',
    iconType: 'motorsport',
    totalCount: 18,
    leagues: [
      { id: 'f1-pilotos', name: 'Mundial de Pilotos 2026', count: 1 },
      { id: 'f1-const', name: 'Mundial de Construtores', count: 1 },
      { id: 'f1-gp', name: 'GP de São Paulo (Interlagos)', count: 16 },
    ],
  },
  {
    id: 'beisebol',
    name: 'Beisebol',
    iconType: 'baseball',
    totalCount: 64,
    isLive: true,
    leagues: [
      { id: 'bb-mlb', name: 'MLB (EUA)', count: 15, isLive: true },
      { id: 'bb-npb', name: 'NPB (Japão)', count: 6 },
      { id: 'bb-kbo', name: 'KBO (Coreia)', count: 5 },
    ],
  },
  {
    id: 'hoquei',
    name: 'Hóquei no Gelo',
    iconType: 'hockey',
    totalCount: 48,
    leagues: [
      { id: 'h-nhl', name: 'NHL (EUA/Canadá)', count: 14 },
      { id: 'h-khl', name: 'KHL', count: 8 },
      { id: 'h-shl', name: 'SHL Suécia', count: 6 },
    ],
  },
  {
    id: 'tenis-mesa',
    name: 'Tênis de Mesa',
    iconType: 'table-tennis',
    totalCount: 72,
    isLive: true,
    leagues: [
      { id: 'tm-ttcup', name: 'TT Cup Internacional', count: 24, isLive: true },
      { id: 'tm-setka', name: 'Setka Cup', count: 28, isLive: true },
      { id: 'tm-wtt', name: 'WTT Champions', count: 12 },
    ],
  },
  {
    id: 'handebol',
    name: 'Handebol',
    iconType: 'handball',
    totalCount: 29,
    leagues: [
      { id: 'hb-ehf', name: 'EHF Champions League', count: 8 },
      { id: 'hb-bnd', name: 'Bundesliga Handebol', count: 9 },
      { id: 'hb-asobal', name: 'Liga ASOBAL Espanha', count: 6 },
    ],
  },
  {
    id: 'boxe',
    name: 'Boxe',
    iconType: 'boxing',
    totalCount: 19,
    leagues: [
      { id: 'bx-wbc', name: 'Disputas de Cinturão WBC/WBA', count: 6 },
      { id: 'bx-intl', name: 'Lutas Profissionais Internacionais', count: 13 },
    ],
  },
];
