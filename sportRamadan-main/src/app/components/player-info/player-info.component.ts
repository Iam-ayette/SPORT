import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.css']
})
export class PlayerInfoComponent implements OnInit {
// found player
foundPlayer: any = {};
  constructor(private activatedRoute: ActivatedRoute , private pService:PlayerService) { }

  ngOnInit(): void {
    // get Id from PATH
    let id = this.activatedRoute.snapshot.params["id"];
    // get all players from LS
    this.pService.displayPlayerById(id).subscribe(
      (data)=>{
        console.log("here response from BE", data);
        this.foundPlayer=data.foundPlayer;
      }
     );
  }

}
