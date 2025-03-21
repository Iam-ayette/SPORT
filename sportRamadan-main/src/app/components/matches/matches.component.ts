import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  matchesTab: any = [
  ]
  constructor(private mService:MatchService) { }

  ngOnInit(): void {
    this.mService.displayAllMatches().subscribe(
      (data:any)=>{
        this.matchesTab=data.tab;
      }
    )
  }
updateMatches(T:any){
  this.matchesTab=T;
}
}
