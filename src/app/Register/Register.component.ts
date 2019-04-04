import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {AuthService} from '../_Service/Auth.service';
import { AlertifyService } from '../_Service/Alertify.service';

@Component({
// tslint:disable-next-line: component-selector
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.css']
})
export class RegisterComponent implements OnInit {
// @Input() customersFromHome: any; Used to deomonstrate passing information from parent to child
@Output() cancelRegister = new EventEmitter();
  model: any = {};
  constructor(private authService: AuthService, private alertify: AlertifyService) {}

  ngOnInit() {
  }

  register() {
    this.authService.register(this.model).subscribe(() => {
    this.alertify.success('registration successful');
    }, error => {
      this.alertify.error(error);
    });
  }

  cancel() {
    this.cancelRegister.emit(false);
  }
}
