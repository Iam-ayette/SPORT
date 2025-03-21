import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
articlesTab:any=[
  {image:"assets/images/img_1.jpg",title:"title1",date:"06/02/25",content:"content1"},
  {image:"assets/images/img_2.jpg",title:"title2",date:"03/01/25",content:"content2"},
  {image:"assets/images/img_3.jpg",title:"title3",date:"06/05/25",content:"content3"}
]
  constructor() { }

  ngOnInit(): void {
  }

}
