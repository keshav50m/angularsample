import { Component, OnInit } from '@angular/core';
import { EnrollmentService } from '../enrollment.service';
import { Loginusers } from '../loginusers';
import { Router } from '@angular/router';
import { NgFlashMessageService } from 'ng-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginuserModle = new Loginusers('', 9636336999);
  constructor(private _enrollmentService: EnrollmentService, private router: Router, private ngFlashMessageService: NgFlashMessageService) { }

  ngOnInit() {


  }

  onSubmit() {
    this._enrollmentService.login(this.loginuserModle)
      .subscribe(
        res => {
          console.log(res.numberCheck);
          console.log(res.passwordCheck);

          if (res.numberCheck === true && res.passwordCheck === true) {
            this.router.navigateByUrl('/profile');
            console.log(true);
          }

          else {
            console.log(false);
            
            this.ngFlashMessageService.showFlashMessage({
              // Array of messages each will be displayed in new line
              messages: ["Please check the login credentials"],
              // Whether the flash can be dismissed by the user defaults to false
              dismissible: true,
              // Time after which the flash disappears defaults to 2000ms
              timeout: false,
              // Type of flash message, it defaults to info and success, warning, danger types can also be used
              type: 'danger'
            });
          }


          localStorage.setItem('token', res.token);

        },
        data => console.log(data)
      )

  }

}
