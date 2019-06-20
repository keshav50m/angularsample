import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EnrollmentService } from '../enrollment.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  //public details;
 public authData= [];
 //public user;
  constructor(private httpClient: HttpClient, private configService: EnrollmentService) { }

  ngOnInit() {
    this.showConfig();
    //console.log(this.details);
  }

  showConfig() {
    this.configService.getConfig().subscribe((data => {
      //this.details = data[0];
      this.authData=data.authData;
      //this.user=this.authData[0];
      console.log(data.authData+" flag");
    }))
  }
}
