import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-teams-tab',
  templateUrl: './teams-tab.component.html',
  styleUrls: ['./teams-tab.component.css']
})
export class TeamsTabComponent implements OnInit {
  teamsTab: any = [];

  constructor(private router: Router , private tService:TeamService) { }
  display(id: number) {
    this.router.navigate([`teamInfo/${id}`]);
  }
  edit(id: number) {
    this.router.navigate([`editTeam/${id}`])
  }
  delete(id: number) {
    for (let i = 0; i < this.teamsTab.length; i++) {
      if (this.teamsTab[i].id == id) {
        this.teamsTab.splice(i, 1);
        break;
      }
    }
    localStorage.setItem('teams', JSON.stringify(this.teamsTab));
  }
  ngOnInit(): void {
    this.tService.displayAllTeams().subscribe(
      (data)=>{
        console.log("Here data from BE", data);
        this.teamsTab = data.tab;
      }
    )  }

}
