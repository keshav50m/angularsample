import { Component, OnInit } from '@angular/core';
import { EnrollmentService } from '../enrollment.service';
import { Loginusers } from '../loginusers';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginuserModle = new Loginusers('',9636336999);
  constructor(private _enrollmentService: EnrollmentService,private router : Router ){}

 ngOnInit() {

   
 }

 onSubmit(){
   this._enrollmentService.login(this.loginuserModle)
   .subscribe(
     res => {
       console.log(res.numberCheck);
       console.log(res.passwordCheck);

      if (res.numberCheck=== true || res.passwordCheck === true) {
        this.router.navigateByUrl('/profile');
        console.log(true);
      }

      else {
        console.log(false);
        this.router.navigateByUrl('/login')
      }


       localStorage.setItem('token', res.token);
      
     },
     data => console.log(data)
   )

   this._enrollmentService.test().subscribe(res =>{
     console.log(res);
   })
 }

}
