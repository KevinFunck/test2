export class Team {
    id: string;
    teamName: string;

    constructor(obj?: any) {
        this.id = obj ? obj.id : '';
        this.teamName = obj ? obj.teamName : '';
    }

    public toJSON() {
        return {
            teamName: this.teamName
        };
    }
}