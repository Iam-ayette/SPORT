import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stadiums-tab',
  templateUrl: './stadiums-tab.component.html',
  styleUrls: ['./stadiums-tab.component.css'],
})
export class StadiumsTabComponent implements OnInit {
  StadiumsTab: any = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.StadiumsTab = JSON.parse(localStorage.getItem('stadiums') || '[]');
  }

  display(id: number) {
    this.router.navigate([`stadiumInfo/${id}`]);
  }

  delete(id: number) {
    for (let i = 0; i < this.StadiumsTab.length; i++) {
      if (this.StadiumsTab[i].id == id) {
        this.StadiumsTab.splice(i, 1);
        break;
      }
    }
    localStorage.setItem('stadiums', JSON.stringify(this.StadiumsTab));
  }

  edit(id: number) {
    this.router.navigate([`editStadium/${id}`])  }
}
