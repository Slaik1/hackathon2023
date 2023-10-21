export interface LogGamesModel {
    logId: number,
    gameId: number,
    round: number,
    teams: [[number, number | null], ...[number, number | null][]], //number - userId
    conditions: [[boolean, boolean | null], ...[boolean, boolean | null][]] //boolean - победа/поражение
}
