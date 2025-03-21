import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-stadiums',
  templateUrl: './add-stadiums.component.html',
  styleUrls: ['./add-stadiums.component.css']
})
export class AddStadiumsComponent implements OnInit {
  stadium: any = {};
  constructor() { }

  ngOnInit(): void {
  }
  addStadium() {
    console.log("here object", this.stadium);
    let stadiumTab = JSON.parse(localStorage.getItem("stadiums") || '[]');
    this.stadium.id = this.generateId(stadiumTab);
    stadiumTab.push(this.stadium);
    localStorage.setItem("stadiums", JSON.stringify(stadiumTab));
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
