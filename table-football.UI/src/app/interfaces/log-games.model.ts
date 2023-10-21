export interface LogGamesModel {
    log_game_id: number,
    game_id: number,
    round: number,
    teams: [[number, number], ...[number, number][]], //number - userId
    conditions: [[boolean, boolean], ...[boolean, boolean][]] //boolean - победа/поражение
}
