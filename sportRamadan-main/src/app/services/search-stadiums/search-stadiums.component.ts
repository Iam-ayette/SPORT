import { Component, OnInit } from '@angular/core';
import { StadiumsService } from '../stadiums.service';

@Component({
  selector: 'app-search-stadiums',
  templateUrl: './search-stadiums.component.html',
  styleUrls: ['./search-stadiums.component.css']
})
export class SearchStadiumsComponent implements OnInit {
  stadium: any = {};
  constructor(private stadiumService: StadiumsService) { }

  ngOnInit(): void {

  }
  searchStadiums() {
    console.log("here object", this.stadium);
    this.stadiumService.searchStadiums(this.stadium).subscribe(
      (response) => {
        console.log("here reponse after adding match", response);
      }
    )
  }
}