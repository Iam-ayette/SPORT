import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {
  match: any = {};
  constructor(private matchService: MatchService, private router:Router) { }

  ngOnInit(): void {
  }

  addMatch() {
    console.log("here object", this.match);
    this.matchService.addMatch(this.match).subscribe(
      (response)=>{
        console.log("here reponse after adding match" , response);
        if (response.msg=='isAdded') {
          this.router.navigate(['admin'])
        }
      }
    );
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
