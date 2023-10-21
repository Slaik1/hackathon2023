export interface LogGamesModel {
    logId: number,
    gameId: number,
    round: number,
    teams: [[number, number], ...[number, number][]], //number - userId
    conditions: [[boolean, boolean], ...[boolean, boolean][]] //boolean - победа/поражение
}
