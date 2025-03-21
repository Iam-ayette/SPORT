import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users-tab',
  templateUrl: './users-tab.component.html',
  styleUrls: ['./users-tab.component.css']
})
export class UsersTabComponent implements OnInit {
  usersTab: any = [];

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.displayAllUsers().subscribe(
      (response: any) => {
        console.log("here response from service", response);
        this.usersTab = response.tab;
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
   
    this.userService.deleteUser(id).subscribe(
      (response)=>{
        console.log("here response from service after delete", response);
        if (response.msg=="OK") {
          this.userService.displayAllUsers().subscribe((data)=>{
            console.log(data);
            this.usersTab=data.tab;
          })
        }
      }
    );
  }
}
