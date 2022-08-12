interface PlayerLogin {
    playerName: string;
    avatar: string;
    score?: number;
    isHost?: boolean;
    matchId?: string
}

export type {
    PlayerLogin,
}