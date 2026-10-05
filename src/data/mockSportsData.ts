import { MatchItem, OddSelection } from '../types/sportsbook';

export const INITIAL_BETSLIP_SELECTIONS: OddSelection[] = [
  {
    id: 'bet-1',
    matchId: 'match-sb-crb',
    matchName: 'São Bernardo FC x CRB',
    marketName: 'Vencedor do encontro',
    outcomeName: 'CRB',
    odds: 2.75,
  },
  {
    id: 'bet-2',
    matchId: 'match-lon-cri',
    matchName: 'Londrina PR x Criciúma',
    marketName: 'Vencedor do encontro',
    outcomeName: 'Londrina PR',
    odds: 2.85,
  },
  {
    id: 'bet-3',
    matchId: 'match-juv-ope',
    matchName: 'EC Juventude x Operário PR',
    marketName: 'Vencedor do encontro',
    outcomeName: 'EC Juventude',
    odds: 1.70,
  },
  {
    id: 'bet-4',
    matchId: 'match-for-nau',
    matchName: 'Fortaleza x Náutico PE',
    marketName: 'Vencedor do encontro',
    outcomeName: 'Fortaleza',
    odds: 1.71,
  },
];

export const POPULAR_MULTIPLES: MatchItem[] = [
  {
    id: 'pop-1',
    time: '2T 88:09',
    isLive: true,
    liveTime: '2T 88:09',
    competition: 'Amistoso Internacional',
    leagueId: 'amistoso',
    homeTeam: 'Japão',
    awayTeam: 'Equador',
    homeScore: 0,
    awayScore: 0,
    category: 'Futebol',
    markets: {
      winner: {
        home: { id: 'pop-1-h', name: 'Japão', odds: 7.40 },
        draw: { id: 'pop-1-d', name: 'Empate', odds: 1.12 },
        away: { id: 'pop-1-a', name: 'Equador', odds: 12.00 },
      },
    },
  },
  {
    id: 'pop-2',
    time: '01/10 • 13:45',
    isLive: false,
    competition: 'Liga dos Campeões Fem.',
    leagueId: 'uwcl',
    homeTeam: 'Herfolge Koge [W]',
    awayTeam: 'Servette FC Chenois [W]',
    category: 'Futebol',
    markets: {
      winner: {
        home: { id: 'pop-2-h', name: 'Herfolge Koge', odds: 1.29 },
        draw: { id: 'pop-2-d', name: 'Empate', odds: 4.96 },
        away: { id: 'pop-2-a', name: 'Servette FC', odds: 7.60 },
      },
    },
  },
  {
    id: 'pop-3',
    time: '01/10 • 13:45',
    isLive: false,
    competition: 'Liga dos Campeões Fem.',
    leagueId: 'uwcl',
    homeTeam: 'FK Austria Viena [W]',
    awayTeam: 'Inter de Milão [F]',
    category: 'Futebol',
    markets: {
      winner: {
        home: { id: 'pop-3-h', name: 'FK Austria', odds: 3.74 },
        draw: { id: 'pop-3-d', name: 'Empate', odds: 3.66 },
        away: { id: 'pop-3-a', name: 'Inter de Milão', odds: 1.75 },
      },
    },
  },
];

export const PRE_MATCHES_BY_LEAGUE = [
  {
    leagueName: 'Brasileirão Série A',
    count: 10,
    matches: [
      {
        id: 'br-1',
        time: '16:00',
        competition: 'Brasileirão Série A',
        leagueId: 'brasileirao',
        homeTeam: 'Palmeiras',
        awayTeam: 'Flamengo',
        category: 'Futebol',
        markets: {
          winner: {
            home: { id: 'br-1-h', name: 'Palmeiras', odds: 2.10 },
            draw: { id: 'br-1-d', name: 'Empate', odds: 3.40 },
            away: { id: 'br-1-a', name: 'Flamengo', odds: 3.25 },
          },
        },
      },
      {
        id: 'br-2',
        time: '18:30',
        competition: 'Brasileirão Série A',
        leagueId: 'brasileirao',
        homeTeam: 'São Paulo',
        awayTeam: 'Santos',
        category: 'Futebol',
        markets: {
          winner: {
            home: { id: 'br-2-h', name: 'São Paulo', odds: 1.95 },
            draw: { id: 'br-2-d', name: 'Empate', odds: 3.30 },
            away: { id: 'br-2-a', name: 'Santos', odds: 3.80 },
          },
        },
      },
    ],
  },
  {
    leagueName: 'Champions League',
    count: 8,
    matches: [
      {
        id: 'ucl-1',
        time: '16:00',
        competition: 'Champions League',
        leagueId: 'ucl',
        homeTeam: 'Real Madrid',
        awayTeam: 'Bayern',
        category: 'Futebol',
        markets: {
          winner: {
            home: { id: 'ucl-1-h', name: 'Real Madrid', odds: 2.25 },
            draw: { id: 'ucl-1-d', name: 'Empate', odds: 3.50 },
            away: { id: 'ucl-1-a', name: 'Bayern', odds: 3.05 },
          },
        },
      },
      {
        id: 'ucl-2',
        time: '18:45',
        competition: 'Champions League',
        leagueId: 'ucl',
        homeTeam: 'Arsenal',
        awayTeam: 'Inter',
        category: 'Futebol',
        markets: {
          winner: {
            home: { id: 'ucl-2-h', name: 'Arsenal', odds: 2.05 },
            draw: { id: 'ucl-2-d', name: 'Empate', odds: 3.40 },
            away: { id: 'ucl-2-a', name: 'Inter', odds: 3.55 },
          },
        },
      },
    ],
  },
  {
    leagueName: 'Copa do Brasil',
    count: 6,
    matches: [
      {
        id: 'cdb-1',
        time: '21:30',
        competition: 'Copa do Brasil',
        leagueId: 'cdb',
        homeTeam: 'Corinthians',
        awayTeam: 'Cruzeiro',
        category: 'Futebol',
        markets: {
          winner: {
            home: { id: 'cdb-1-h', name: 'Corinthians', odds: 2.15 },
            draw: { id: 'cdb-1-d', name: 'Empate', odds: 3.20 },
            away: { id: 'cdb-1-a', name: 'Cruzeiro', odds: 3.40 },
          },
        },
      },
    ],
  },
  {
    leagueName: 'Paulistão',
    count: 8,
    matches: [
      {
        id: 'paul-1',
        time: '16:00',
        competition: 'Paulistão',
        leagueId: 'paulistao',
        homeTeam: 'Santos',
        awayTeam: 'Palmeiras',
        category: 'Futebol',
        markets: {
          winner: {
            home: { id: 'paul-1-h', name: 'Santos', odds: 3.10 },
            draw: { id: 'paul-1-d', name: 'Empate', odds: 3.25 },
            away: { id: 'paul-1-a', name: 'Palmeiras', odds: 2.20 },
          },
        },
      },
      {
        id: 'paul-2',
        time: '18:30',
        competition: 'Paulistão',
        leagueId: 'paulistao',
        homeTeam: 'São Paulo',
        awayTeam: 'Corinthians',
        category: 'Futebol',
        markets: {
          winner: {
            home: { id: 'paul-2-h', name: 'São Paulo', odds: 2.45 },
            draw: { id: 'paul-2-d', name: 'Empate', odds: 3.15 },
            away: { id: 'paul-2-a', name: 'Corinthians', odds: 2.85 },
          },
        },
      },
    ],
  },
  {
    leagueName: 'NBA (EUA)',
    count: 12,
    matches: [
      {
        id: 'nba-1',
        time: '20:30',
        competition: 'NBA (EUA)',
        leagueId: 'nba',
        homeTeam: 'Boston Celtics',
        awayTeam: 'Los Angeles Lakers',
        category: 'Basquete',
        markets: {
          winner: {
            home: { id: 'nba-1-h', name: 'Boston Celtics', odds: 1.45 },
            draw: { id: 'nba-1-d', name: 'Empate', odds: 14.00 },
            away: { id: 'nba-1-a', name: 'LA Lakers', odds: 2.80 },
          },
        },
      },
      {
        id: 'nba-2',
        time: '23:00',
        competition: 'NBA (EUA)',
        leagueId: 'nba',
        homeTeam: 'Golden State Warriors',
        awayTeam: 'Denver Nuggets',
        category: 'Basquete',
        markets: {
          winner: {
            home: { id: 'nba-2-h', name: 'GS Warriors', odds: 2.10 },
            draw: { id: 'nba-2-d', name: 'Empate', odds: 13.50 },
            away: { id: 'nba-2-a', name: 'Denver Nuggets', odds: 1.75 },
          },
        },
      },
    ],
  },
  {
    leagueName: 'ATP - Masters 1000',
    count: 14,
    matches: [
      {
        id: 'atp-1',
        time: '14:00',
        competition: 'ATP - Masters 1000',
        leagueId: 'atp',
        homeTeam: 'Carlos Alcaraz',
        awayTeam: 'Jannik Sinner',
        category: 'Tênis',
        markets: {
          winner: {
            home: { id: 'atp-1-h', name: 'Carlos Alcaraz', odds: 1.88 },
            draw: { id: 'atp-1-d', name: 'Empate', odds: 18.00 },
            away: { id: 'atp-1-a', name: 'Jannik Sinner', odds: 1.92 },
          },
        },
      },
    ],
  },
  {
    leagueName: 'CS2 (Counter-Strike)',
    count: 22,
    matches: [
      {
        id: 'cs2-1',
        time: '17:00',
        competition: 'CS2 (Counter-Strike)',
        leagueId: 'cs2',
        homeTeam: 'FURIA Esports',
        awayTeam: 'FaZe Clan',
        category: 'E-Sports',
        markets: {
          winner: {
            home: { id: 'cs2-1-h', name: 'FURIA Esports', odds: 2.30 },
            draw: { id: 'cs2-1-d', name: 'Empate', odds: 15.00 },
            away: { id: 'cs2-1-a', name: 'FaZe Clan', odds: 1.62 },
          },
        },
      },
    ],
  },
  {
    leagueName: 'UFC - Card Principal',
    count: 12,
    matches: [
      {
        id: 'ufc-1',
        time: '23:30',
        competition: 'UFC - Card Principal',
        leagueId: 'ufc',
        homeTeam: 'Alex Poatan Pereira',
        awayTeam: 'Magomed Ankalaev',
        category: 'MMA / UFC',
        markets: {
          winner: {
            home: { id: 'ufc-1-h', name: 'Alex Poatan', odds: 1.80 },
            draw: { id: 'ufc-1-d', name: 'Empate', odds: 50.00 },
            away: { id: 'ufc-1-a', name: 'M. Ankalaev', odds: 2.05 },
          },
        },
      },
    ],
  },
  {
    leagueName: 'NFL',
    count: 16,
    matches: [
      {
        id: 'nfl-1',
        time: '21:15',
        competition: 'NFL',
        leagueId: 'nfl',
        homeTeam: 'Kansas City Chiefs',
        awayTeam: 'San Francisco 49ers',
        category: 'Futebol Americano',
        markets: {
          winner: {
            home: { id: 'nfl-1-h', name: 'KC Chiefs', odds: 1.74 },
            draw: { id: 'nfl-1-d', name: 'Empate', odds: 14.00 },
            away: { id: 'nfl-1-a', name: 'SF 49ers', odds: 2.15 },
          },
        },
      },
    ],
  },
];

export const LIVE_SECTION_MATCHES: MatchItem[] = [
  {
    id: 'live-1',
    time: '23m',
    isLive: true,
    liveTime: '23m',
    competition: 'FIFA European Cup',
    leagueId: 'fifa-ec',
    homeTeam: 'Manchester',
    awayTeam: 'Liverpool',
    homeScore: 1,
    awayScore: 0,
    category: 'Futebol',
    markets: {
      winner: {
        home: { id: 'live-1-h', name: 'Manchester', odds: 1.02 },
        draw: { id: 'live-1-d', name: 'Empate', odds: 12.00 },
        away: { id: 'live-1-a', name: 'Liverpool', odds: 30.00 },
      },
      totalGoals: {
        over: { id: 'live-1-ov', name: 'Mais de 3.5', odds: 1.56 },
        under: { id: 'live-1-un', name: 'Menos de 3.5', odds: 2.13 },
      },
      bothToScore: {
        yes: { id: 'live-1-bty', name: 'Sim', odds: 3.95 },
        no: { id: 'live-1-btn', name: 'Não', odds: 1.17 },
      },
    },
  },
  {
    id: 'live-2',
    time: 'Começar em breve',
    isLive: true,
    liveTime: 'Começar em breve',
    competition: 'FIFA Asean Cup',
    leagueId: 'fifa-ac',
    homeTeam: 'Indonésia',
    awayTeam: 'Bangladesh',
    homeScore: 0,
    awayScore: 0,
    category: 'Futebol',
    markets: {
      winner: {
        home: { id: 'live-2-h', name: 'Indonésia', odds: 1.02 },
        draw: { id: 'live-2-d', name: 'Empate', odds: 12.00 },
        away: { id: 'live-2-a', name: 'Bangladesh', odds: 30.00 },
      },
      totalGoals: {
        over: { id: 'live-2-ov', name: 'Mais de 3.5', odds: 1.56 },
        under: { id: 'live-2-un', name: 'Menos de 3.5', odds: 2.13 },
      },
      bothToScore: {
        yes: { id: 'live-2-bty', name: 'Sim', odds: 3.95 },
        no: { id: 'live-2-btn', name: 'Não', odds: 1.17 },
      },
    },
  },
];

export const SIDEBAR_COUNTRIES = [
  {
    id: 'de',
    name: 'Alemanha',
    flag: '🇩🇪',
    subLeagues: [
      { id: 'de-1', name: 'Alemanha - Bundesliga 1', isFavorite: true },
      { id: 'de-2', name: 'Alemanha - Bundesliga 2', isFavorite: true },
      { id: 'de-3', name: 'Alemanha - 3. Liga', isFavorite: false },
      { id: 'de-4', name: 'Alemanha - Bundesliga', isFavorite: false },
      { id: 'de-5', name: 'Alemanha Copa DFB', isFavorite: false },
      { id: 'de-6', name: 'Alemanha - Regionalliga', isFavorite: false },
    ],
  },
  { id: 'sa', name: 'América do Sul', flag: '🌐' },
  { id: 'ar', name: 'Argentina', flag: '🇦🇷', isLive: true },
  { id: 'au', name: 'Austrália', flag: '🇦🇺' },
  { id: 'at', name: 'Áustria', flag: '🇦🇹' },
  { id: 'be', name: 'Bélgica', flag: '🇧🇪' },
  { id: 'bo', name: 'Bolívia', flag: '🇧🇴' },
  { id: 'ba', name: 'Bósnia e Herzegovina', flag: '🇧🇦' },
  { id: 'br', name: 'Brasil', flag: '🇧🇷', isLive: true },
  { id: 'bg', name: 'Bulgária', flag: '🇧🇬' },
  { id: 'ca', name: 'Canadá', flag: '🇨🇦' },
  { id: 'qa', name: 'Catar', flag: '🇶🇦' },
  { id: 'cl', name: 'Chile', flag: '🇨🇱' },
  { id: 'cy', name: 'Chipre', flag: '🇨🇾' },
  { id: 'co', name: 'Colômbia', flag: '🇨🇴' },
];
