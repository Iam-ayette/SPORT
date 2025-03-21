import { Component, EventEmitter, Input, OnInit , Output } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  // matchInput : PARAM du app-result
  @Input() matchInput: any;
  @Output()matchOutput:EventEmitter<any>=new EventEmitter()
  constructor(private mService:MatchService) { }

  ngOnInit(): void {
  }

  scoreColor(a: number, b: number): string {
    if (a > b) {
      return "green"
    } else if (a < b) {
      return "orange"
    } else {
      return "blue";
    }
  }
  scoreResult(a: number, b: number): string {
    if (a > b) {
      return "Win"
    } else if (a < b) {
      return "Loss"
    } else {
      return "Draw";
    }
  }
  deleteMatch(id: any) {
    alert(id);
    this.mService.deleteMatch(id).subscribe(
      (response)=>{
        console.log("here response after delete",response.msg);
        if(response.msg=='OK'){
          this.mService.displayAllMatches().subscribe(
            (data)=>{
              console.log("here response after delete",data.tab);
              this.matchOutput.emit(data.tab);
              
            }
          )
        }
        
        
      }
    )
  }
}
