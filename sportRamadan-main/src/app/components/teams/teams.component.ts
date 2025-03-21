import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teamsTab: any=[
    { name:"LIV", owner:"med", foundation:1960},
    { name:"FCB", owner:"salah", foundation:1980},
    { name:"REAL", owner:"ali", foundation:1930}
   ]
  constructor() { }

  ngOnInit(): void {
  }

}
