import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-players-tab',
  templateUrl: './players-tab.component.html',
  styleUrls: ['./players-tab.component.css']
})
export class PlayersTabComponent implements OnInit {
  playersTab: any = [];

  constructor(private router: Router, private pService: PlayerService) { }
  ngOnInit(): void {
    // this.playersTab = JSON.parse(localStorage.getItem('players') || '[]')
    this.pService.displayALLPlayers().subscribe(
      (data)=>{
        console.log("Here data from BE", data);
        this.playersTab = data.tab;
      }
    )
  }

  display(id: number) {
    //location.replace("login.component.html");
    this.router.navigate([`playerInfo/${id}`])
  }
  edit(id: number) {
    this.router.navigate([`editPlayer/${id}`])
  }
  delete(id: number) {
    for (let i = 0; i < this.playersTab.length; i++) {
      if (this.playersTab[i].id == id) {
        this.playersTab.splice(i, 1);
        break;
      }
    }
    localStorage.setItem("players", JSON.stringify(this.playersTab));
  }


}
