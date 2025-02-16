import { Component } from '@angular/core';
import { Team } from './team';
import { Player } from './player';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  team = new Team("Rebeccah's Team");

  players = [
    { name: "John", jersey: 10, active: true },
    { name: "Patrick", jersey: 24, active: false },
    { name: "Travis", jersey: 36, active: true },
    { name: "Steve", jersey: 29, active: true },
    { name: "Matthew", jersey: 16, active: false },
  ];

  ngOnInit(): void {
    this.players.forEach(player => { // foreach loop that iterates over the players array
      this.team.addPlayer(player); // adds each individual player from the array to Rebecccah's Team object via the "addPlayer" method
    });
  }

  removePlayer(index: number) {
    this.team.removePlayer(index);
  }

  setActive(index: number, isActive: boolean) {
    this.team.setActive(index, isActive);
  }

  getPlayerCount(): number {
    return this.team.getPlayerCount();
  }

  getActivePlayers(): Player[] {
    return this.team.getActivePlayers();
  }

  logActivePlayers(): void {
    this.team.logActivePlayers();

  }
}
