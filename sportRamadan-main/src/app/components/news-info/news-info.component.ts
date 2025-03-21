import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-info',
  templateUrl: './news-info.component.html',
  styleUrls: ['./news-info.component.css']
})
export class NewsInfoComponent implements OnInit {
  @Input() newsInput: any;
  constructor() { }

  ngOnInit(): void {
  }

}
