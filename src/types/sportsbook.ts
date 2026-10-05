export interface OddSelection {
  id: string;
  matchId: string;
  matchName: string; // e.g. "São Bernardo FC x CRB"
  marketName: string; // e.g. "Vencedor do encontro", "1X2", "Total de Gols"
  outcomeName: string; // e.g. "CRB", "Empate", "Mais de 3.5"
  odds: number;
}

export interface MatchMarketOdd {
  id: string;
  name: string;
  odds: number;
  subText?: string;
  trend?: 'up' | 'down' | null;
}

export interface MatchItem {
  id: string;
  time: string;
  isLive?: boolean;
  liveTime?: string;
  competition: string;
  leagueId: string;
  homeTeam: string;
  awayTeam: string;
  homeScore?: number;
  awayScore?: number;
  category: string; // e.g. "Futebol", "Basquete"
  markets: {
    winner?: {
      home: MatchMarketOdd;
      draw?: MatchMarketOdd;
      away: MatchMarketOdd;
    };
    totalGoals?: {
      over: MatchMarketOdd;
      under: MatchMarketOdd;
    };
    bothToScore?: {
      yes: MatchMarketOdd;
      no: MatchMarketOdd;
    };
  };
}

export interface LeagueGroup {
  id: string;
  name: string;
  country: string;
  flag: string;
  count: number;
  isLive?: boolean;
  subLeagues?: {
    id: string;
    name: string;
    isFavorite?: boolean;
  }[];
}

export interface UserAccount {
  isLoggedIn: boolean;
  name: string;
  email: string;
  balance: number;
}
