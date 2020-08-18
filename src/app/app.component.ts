import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'palnarProject';
  isSessionEnable: any;
  constructor(private router: Router) {
    sessionStorage.clear();
    
  }
  logout() {
    this.router.navigateByUrl('/login');
    
  }

  isEnable() {
    if(sessionStorage.getItem('userName') !== null){
      this.isSessionEnable = true;
     } else {
      this.isSessionEnable = false;
     }
     return this.isSessionEnable;
  }
}
