export class User {
    playerId: string;
    PlayerName: string;
    teamId: string;

    constructor(obj?: any) {
        this.playerId = obj ? obj.playerId : '';
        this.PlayerName = obj ? obj.PlayerName : '';
        this.teamId = obj ? obj.teamId : '';
    }

    public toJSON() {
        return {
            PlayerName: this.PlayerName,
            teamId: this.teamId
        };
    }
}