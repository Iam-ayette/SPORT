import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';


@Component({
  selector: 'app-edit-match',
  templateUrl: './edit-match.component.html',
  styleUrls: ['./edit-match.component.css']
})
export class EditMatchComponent implements OnInit {
  match: any = {};
  constructor(private activateRoute: ActivatedRoute, private router: Router, private mService:MatchService) { }

  ngOnInit(): void {
    //  get id from path
    let id = this.activateRoute.snapshot.params['id'];
    this.mService.displayMatchById(id).subscribe(
      (data)=>{
        console.log("here response from BE", data);
        this.match=data.foundMatch;
      }
    );
    // get all matches from ls
    // let matches = JSON.parse(localStorage.getItem('matches') || '[]');
    // // search match by id
    // for (let i = 0; i < matches.length; i++) {
    //   if (matches[i].id == id) {
    //     this.match = matches[i];
    //     break;
    //   }
    // }
    // console.log("here found match", this.match);

  }
  editMatch() {
    console.log("here new values", this.match);
    this.mService.editMatch(this.match).subscribe(
      (data)=>{
        console.log("here response after edit",data);
        if (data.isEdited==true) {
          this.router.navigate(['/admin']);
        }
      }
    );

    // get all matches from ls
    // let matches = JSON.parse(localStorage.getItem('matches') || '[]');
    // for (let i = 0; i < matches.length; i++) {
    //   if (matches[i].id == this.match.id) {
    //     matches[i] = this.match;
    //     break;
    //   }
    // }
    // localStorage.setItem("matches",JSON.stringify(matches));
    

  }
}
