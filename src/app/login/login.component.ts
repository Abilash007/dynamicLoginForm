import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
    private fb: FormBuilder) { }
  loginForm: FormGroup;
  ngOnInit(): void {
    this.createForm();
  }

  navigateToHome() {
    sessionStorage.setItem("userName", this.loginForm.controls.UserName.value);
    this.router.navigateByUrl('/authorized/home');
    this.startTimer();
  }

  startTimer() {
    setTimeout(() => {
      sessionStorage.clear();
      this.router.navigateByUrl('/login');
    }, 500000);
  }
  createForm() {
    this.loginForm = this.fb.group({
      UserName: ['', ''],
      Password: ['', ''],
    });
  }
}
