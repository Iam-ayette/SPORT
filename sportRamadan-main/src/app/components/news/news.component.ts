import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
newsTab: any=[
  {image:"assets/images/img_1.jpg",title:"transfer de joueur",name:"mellisa ",date:"may 30, 2025",category:"sport", avatar:"assets/images/person_1.jpg"},
  {image:"assets/images/img_2.jpg",title:"EST vs CA ",name:"ines ",date:"juin 02, 2025",category:"sport", avatar:"assets/images/person_2.jpg"},
  {image:"assets/images/img_3.jpg",title:"LIV vs FCB",name:"ali ",date:"aout 14, 2025",category:"sport", avatar:"assets/images/person_3.jpg"}

]
  constructor() { }

  ngOnInit(): void {
  }

}
