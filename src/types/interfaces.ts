interface PlayerLogin {
    id?: string;
    name: string;
    avatar: string;
    score?: number;
    isHost?: boolean;
    matchId: string | undefined;
}

interface Cards {
    id?: string;
    numbers: number[];
    playerId: string | null;
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

interface DrawNumbers {
    id?: string;
    actualNumber: number[];
    lastNumbers: number[];
    drawNumbers: number[];
    baseNumbers: number[];
}

export type {
    PlayerLogin,
    Cards,
    MatchGame,
    DrawNumbers,
}