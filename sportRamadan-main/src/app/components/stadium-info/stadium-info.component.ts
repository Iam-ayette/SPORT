import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stadium-info',
  templateUrl: './stadium-info.component.html',
  styleUrls: ['./stadium-info.component.css']
})
export class StadiumInfoComponent implements OnInit {
// found stadium
foundStadium: any = {};
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // get Id from PATH
    let id = this.activatedRoute.snapshot.params["id"];
    // get all stadiums from LS
    let stadiums = JSON.parse(localStorage.getItem('stadiums') || '[]');
    // search players by ID
    for (let i = 0; i < stadiums.length; i++) {
      if (stadiums[i].id == id) {
        this.foundStadium = stadiums[i];
        break;
      }
    }
    console.log("Here found stadium", this.foundStadium);
  }
  

}
