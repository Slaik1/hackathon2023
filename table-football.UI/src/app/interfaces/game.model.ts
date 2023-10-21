export interface GameModel {
    gameId: number,
    name: string,
    mode: string,
    slots: number,
    status: string | null,
    currentRound: number | null,
    teams: [[number, number], ...[number, number][]], //number - userId
    logGameId: number
}