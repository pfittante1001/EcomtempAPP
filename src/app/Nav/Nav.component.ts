import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_Service/Auth.service';
import { AlertifyService } from '../_Service/Alertify.service';
import { Router } from '@angular/router';

@Component({
// tslint:disable-next-line: component-selector
  selector: 'app-Nav',
  templateUrl: './Nav.component.html',
  styleUrls: ['./Nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};

  constructor(public authService: AuthService, private alertify: AlertifyService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      this.alertify.success('Logged in Susuccessfully');
    }, error => {
     this.alertify.error(error);
    }, () => {

      this.router.navigate(['/Product']);
    });

  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  loggedOut() {
    localStorage.removeItem('token');
    this.alertify.message('Logged Out');
    this.router.navigate(['/Home']);
  }
}
