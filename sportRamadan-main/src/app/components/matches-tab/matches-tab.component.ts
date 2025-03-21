import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { log } from 'console';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-matches-tab',
  templateUrl: './matches-tab.component.html',
  styleUrls: ['./matches-tab.component.css']
})
export class MatchesTabComponent implements OnInit {
  matchesTab: any = [];

  constructor(private router: Router, private mService: MatchService) { }

  ngOnInit(): void {
    // this.matchesTab = JSON.parse(localStorage.getItem('matches') || '[]')
    this.mService.displayAllMatches().subscribe(
      (response: any) => {
        console.log("here response from service", response);
        this.matchesTab = response.tab;
      }
    );
  
  }

  display(id: number) {
    //location.replace("login.component.html");
    this.router.navigate([`matchInfo/${id}`])
  }
  edit(id: number) {
    this.router.navigate([`editMatch/${id}`])
  }
  delete(id: number) {
    //   for (let i = 0; i < this.matchesTab.length; i++) {
    //     if (this.matchesTab[i].id == id) {
    //       this.matchesTab.splice(i, 1);
    //       break;
    //     }
    //   }
    //   localStorage.setItem("matches", JSON.stringify(this.matchesTab));
    this.mService.deleteMatch(id).subscribe(
      (response)=>{
        console.log("here response from service after delete", response);
        if (response.msg=="OK") {
          this.mService.displayAllMatches().subscribe((data)=>{
            console.log(data);
            this.matchesTab=data.tab;
          })
        }
      }
    );
  }
}
