import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
  team: any = {};
  constructor(private teamService: TeamService, private route:Router) { }

  ngOnInit(): void {
  }

  addTeam() {
    console.log("here object", this.team);
    this.teamService.addTeam(this.team).subscribe(
      (response) => {
        console.log("here reponse after adding player", response);
        if (response.msg == 'isAdded') {
          this.route.navigate(['admin'])
        }
      }
    );
    // let teamsTab = JSON.parse(localStorage.getItem("teams") || '[]');
    // this.team.id = this.generateId(teamsTab);
    // teamsTab.push(this.team);
    // localStorage.setItem("teams", JSON.stringify(teamsTab));
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
