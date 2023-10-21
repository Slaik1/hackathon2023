export interface GameModel {
    gameId: number,
    name: string,
    mode: string,
    slots: number,
    status: string | null,
    currentRound: number | null,
    teams: [[number, number | null], ...[number, number | null][]], //number - userId
    logGameId: number | null
}
