export interface GameModel {
    game_id: number,
    name: string,
    slots: number,
    status: string | null,
    current_round: number | null,
    teams: [[number, number], ...[number, number][]], //number - userId
    log_game_id: number
}