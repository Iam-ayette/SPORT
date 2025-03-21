import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {
  player: any = {};
  constructor(private activateRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    //  get id from path
    let id = this.activateRoute.snapshot.params['id'];
    // get all matches from ls
    let players = JSON.parse(localStorage.getItem('players') || '[]');
    // search match by id
    for (let i = 0; i < players.length; i++) {
      if (players[i].id == id) {
        this.player = players[i];
        break;
      }
    }
    console.log("here found match", this.player);
  }
  editPlayer() {
    console.log("here new values", this.player);
    // get all players from ls
    let players = JSON.parse(localStorage.getItem('players') || '[]');
    for (let i = 0; i < players.length; i++) {
      if (players[i].id == this.player.id) {
        players[i] = this.player;
        break;
      }
    }
    localStorage.setItem("players", JSON.stringify(players));
    this.router.navigate(['/admin']);

  }
}
