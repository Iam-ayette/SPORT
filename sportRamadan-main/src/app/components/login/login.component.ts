import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';
import { UserService } from 'src/app/services/user.service';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  error:string=''
  constructor(private formBuilder: FormBuilder, private router:Router,private userService: UserService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group(
      {
        email: ['', [Validators.email, Validators.required]],
        pwd: ['', [Validators.required]],
      }
    )

  }

// méthode pour valider le formulaire
  login() {
    console.log("login clicked", this.loginForm.value);
    return this.userService.login(this.loginForm.value).subscribe(
      (response)=>{
        console.log("here response after login",response);
        if (response.msg=="2") {
          sessionStorage.setItem("jwt",response.user);
          const decoded:any=jwtDecode(response.user);
          if (decoded.user.role=='admin') {
            this.router.navigate(['/admin'])
          } else {
            this.router.navigate(['/'])
          }
        } else {
          this.error="please check email/pwd"
        }
      }
    );
  }
}
