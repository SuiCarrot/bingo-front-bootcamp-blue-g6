interface PlayerLogin {
    id?: string;
    name: string;
    avatar: string;
    score: number;
    isHost: boolean;
    matchId: string;
}

interface Cards {
    id?: string;
    numbers: string[];
    playerId: string;
}

interface MatchGame {
    name: string;
    numberOfCards: number;
    drawTime: number;
    numberOfRounds: number;
    link: number;
    winner: number;
}

export type {
    PlayerLogin,
    Cards,
    MatchGame,
}