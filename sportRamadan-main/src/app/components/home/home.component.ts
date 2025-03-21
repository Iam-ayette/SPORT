import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  matchObj: any = { scoreOne: 2, scoreTwo: 1, teamOne: "FCB", teamTwo: "Real" }
  constructor() { }

  ngOnInit(): void {
  }

}
