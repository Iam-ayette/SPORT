import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-match-info',
  templateUrl: './match-info.component.html',
  styleUrls: ['./match-info.component.css']
})
export class MatchInfoComponent implements OnInit {
// found match
 foundMatch: any = {};
  constructor(private activatedRoute: ActivatedRoute, private mService: MatchService) { }

  ngOnInit(): void {
    
    // get Id from PATH
    let id = this.activatedRoute.snapshot.params["id"];
    // get match by id to display into form
   this.mService.displayMatchById(id).subscribe(
    (data)=>{
      console.log("here response from BE", data);
      this.foundMatch=data.foundMatch;
    }
   );
   

  }

}
