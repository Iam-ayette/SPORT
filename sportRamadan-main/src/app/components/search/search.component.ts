import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { response } from 'express';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchForm!: FormGroup;
  result: any = [];
  emptyMsg: string = '';
  constructor(private formBuilder: FormBuilder , private mService:MatchService) { }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      score: ['', [Validators.required]],
    });
  }

  search() {
     this.mService.searchMatches(this.searchForm.value).subscribe(
      (response)=>{
        console.log("here response after login",response);
        this.result=response.tab
      }
    );
  }
}