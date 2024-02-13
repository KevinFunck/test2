export class User {
    playerId: string;
    PlayerName: string;

    constructor(obj?: any) {
        this.playerId = obj ? obj.playerId : '';
        this.PlayerName = obj ? obj.PlayerName : '';
    }

    public toJSON() {
        return {
            PlayerName: this.PlayerName
        };
    }
}