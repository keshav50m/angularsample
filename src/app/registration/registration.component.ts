import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { EnrollmentService } from '../enrollment.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  userModle = new User('', '', 9636336999, 'keshav50m');
  //  registrationForm = new FormGroup({
  //   userName: new FormControl(''),
  //   email: new FormControl(''),
  //   number: new FormControl(),
  //   password: new FormControl('')
  //  });
  constructor(private _enrollmentService: EnrollmentService, private router: Router, private fb: FormBuilder) { }
  submitted = false;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  phoneNumber = "^(\+\d{1,3}[- ]?)?\d{10}$";  

  registrationForm = this.fb.group({
    name: [''],
    email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
    number: [, [Validators.required, Validators.pattern(this.phoneNumber)]],
    password: ['',[Validators.required, Validators.minLength(8)]]
  })
  ngOnInit() {


  }

  onSubmit() {
    console.log(this.registrationForm.value);
    this._enrollmentService.enroll(this.registrationForm.value)

      .subscribe(
        // response => console.log('Success', response),
        // error => console.log('Error!', error)

        res => {
          console.log(res)
          // localStorage.setItem('token', res.token)
          // this.router.navigateByUrl('/login');
        },
        data => console.log(data)
        

      );
    // this.router.navigateByUrl('/login');
  }

}
