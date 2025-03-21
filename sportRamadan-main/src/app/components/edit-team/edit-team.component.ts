import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.css']
})
export class EditTeamComponent implements OnInit {
  team: any = {};
  constructor(private activateRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    //  get id from path
    let id = this.activateRoute.snapshot.params['id'];
    // get all matches from ls
    let teams = JSON.parse(localStorage.getItem('teams') || '[]');
    // search match by id
    for (let i = 0; i < teams.length; i++) {
      if (teams[i].id == id) {
        this.team = teams[i];
        break;
      }
    }
    console.log("here found match", this.team);
  }
  editTeam() {
    console.log("here new values", this.team);
    // get all matches from ls
    let teams = JSON.parse(localStorage.getItem('teams') || '[]');
    for (let i = 0; i < teams.length; i++) {
      if (teams[i].id == this.team.id) {
        teams[i] = this.team;
        break;
      }
    }
    localStorage.setItem("teams",JSON.stringify(teams));
    this.router.navigate(['/admin']);

  }
}
