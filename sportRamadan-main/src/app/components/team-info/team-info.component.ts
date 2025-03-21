import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.css'],
})
export class TeamInfoComponent implements OnInit {
  foundTeam: any ={}

  constructor(private activatedRoute : ActivatedRoute, private tService:TeamService) {}

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params['id'];
    this.tService.displayTeamById(id).subscribe(
      (data)=>{
        console.log("here response from BE", data);
        this.foundTeam=data.foundTeam;
      }
     );
  }
   
}
