import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stadiums',
  templateUrl: './stadiums.component.html',
  styleUrls: ['./stadiums.component.css']
})
export class StadiumsComponent implements OnInit {
  
  stadiumsTab: any = [
    { name:"croco", country:"tunis", capacity:400},
    { name:"rades", country:"tunis", capacity:2000},
    { name:"sud", country:"gabes", capacity:500}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
