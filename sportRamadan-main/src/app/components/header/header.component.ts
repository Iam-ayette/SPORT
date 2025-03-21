import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  decodedToken:any;
  constructor( private router:Router) { }

  ngOnInit(): void {
  }
isLoggedIn(){
  const token=sessionStorage.getItem('jwt')
  if (token) {
     this.decodedToken=jwtDecode(token);
  }
return !!token;
}
logout(){
  sessionStorage.removeItem('jwt');
  this.router.navigate([''])
}

}
