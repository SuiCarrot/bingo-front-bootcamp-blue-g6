interface PlayerLogin {
    id?: string;
    name: string;
    avatar: string;
    score?: number;
    isHost?: boolean;
    matchId: string | undefined;
}

interface PlayerContext {
    valuesLogin: PlayerLogin;
    setValuesLogin: (values: PlayerLogin) => void;
}

interface Cards {
    id?: string;
    numbers: number[];
    playerId: string | null;
}

interface CardsContextType {
    quantityCards: Cards[];
    setQuantityCards: (values: Cards[]) => void;
}

interface MatchGame {
    id?: string;
    name: string;
    numberOfCards: number;
    drawTime: number;
    numberOfRounds: number;
    link?: string;
    winner?: string;
}

interface MatchGameContextType {
    valuesMatch: MatchGame;
    setValuesMatch: (values: MatchGame) => void
}

interface DrawNumbers {
    id?: string;
    actualNumber: number[];
    lastNumbers: number[];
    drawNumbers: number[];
    baseNumbers: number[];
}

export type {
    PlayerLogin,
    PlayerContext,
    Cards,
    CardsContextType,
    MatchGame,
    MatchGameContextType,
    DrawNumbers,
}