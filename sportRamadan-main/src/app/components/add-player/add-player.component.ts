import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  player: any = {};
  teamsList:any=[];
  constructor(private pService: PlayerService, private router: Router , private tService:TeamService) { }

  ngOnInit(): void {
    this.tService.displayAllTeams().subscribe(
      (data)=>{
        console.log("here teams from BE",data.tab);
        this.teamsList=data.tab;
      }
    )
  }

  addPlayer() {
    console.log("here object", this.player);
    this.pService.addPlayer(this.player).subscribe(
      (response) => {
        console.log("here reponse after adding player", response);
        if (response.msg == 'isAdded') {
          this.router.navigate(['admin'])
        }
      }
    );
    // let playersTab = JSON.parse(localStorage.getItem("players") || '[]');
    // this.player.id = this.generateId(playersTab);
    // playersTab.push(this.player);
    // localStorage.setItem("players", JSON.stringify(playersTab));
  }
  generateId(tab: any) {
    let max;
    if (tab.length == 0) {
      max = 0;
    } else {
      max = tab[0].id;
      for (let i = 1; i < tab.length; i++) {
        if (tab[i].id > max) {
          max = tab[i].id;
        }
      }
    }
    return max + 1;
  }


}
