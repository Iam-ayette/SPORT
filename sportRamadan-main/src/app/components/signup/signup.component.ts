import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { log } from 'console';
import { response } from 'express';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  // signupForm : ID du formulaire
  signupForm!: FormGroup;
  x: boolean = true;
  path!: string;
  errorMsg!: string;
  file!: any
  imagePreview!:any
  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.path = this.router.url;  //  /signupAdmin || /subscription
    this.signupForm = this.formBuilder.group(
      {
        firstName: ['', [Validators.required, Validators.minLength(3)]],
        lastName: ['', [Validators.required, Validators.minLength(5)]],
        email: ['', [Validators.email, Validators.required]],
        pwd: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
        phone: ['', [Validators.minLength(8), Validators.maxLength(8)]]
      }
    )
  }

  // méthode pour valider le formulaire
  signup() {

    this.signupForm.value.role = (this.path == '/subscription') ? 'client' : 'admin'
    console.log("signup clicked", this.signupForm.value);
    this.userService.signup(this.signupForm.value, this.file).subscribe(
      (response) => {
        console.log("here response after signup", response);
        if (response.msg == "1") {
          this.router.navigate(['signin'])
        } else {
          this.errorMsg = "user already exist"
        }
      }
    );
  }
  onImageSelected(event: Event) {
    // const file = (event.target as HTMLInputElement).files[0];
    const inputElement = event.target as HTMLInputElement;
    if (inputElement && inputElement.files && inputElement.files.length > 0) {
      this.file = inputElement.files[0];
      console.log("here selected file", this.file);

    }
  }


}
