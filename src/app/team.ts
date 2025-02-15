import { Player } from "./player";

export class Team {
    players: Player[] = [];
    teamName: string;

    constructor(teamName: string) {
        this.teamName = teamName
    }

    addPlayer(player: Player): void {
        this.players.push(player);
    }

    removePlayer(index: number): void {
        this.players.splice(index, 1);
    }

    setActive(index: number, isActive: boolean): void {
        this.players[index].active = isActive;
    }

    getPlayerCount(): number {
        return this.players.length;
    }

    logActivePlayers(): void {
        // const - makes activePlayers only accessible within this method
        const activePlayers = this.players.filter(player => player.active) // filtering the array for players with active status set to true
        console.log(activePlayers)
    }

    getActivePlayers(): Player[] {
        return this.players.filter(player => player.active)
    }


}
