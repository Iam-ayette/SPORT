import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  @Input() playerInput: any;
  playersTab: any = [
    { name: "messi", number: 10, age: 37, position: "ATK" },
    { name: "cr7", number: 15, age: 30, position: "MID" },
    { name: "xavi", number: 2, age: 31, position: "DEF" },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
