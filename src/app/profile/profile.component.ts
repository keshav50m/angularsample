import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EnrollmentService } from '../enrollment.service';
import { DataShareService } from '../data-share.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  //public details;
 public authData= [];
 //public user;
  constructor(private httpClient: HttpClient, private configService: EnrollmentService, private webSocketService: DataShareService) { }

  ngOnInit() {
    this.showConfig();
    // console.log(this.details)
      //here we want to listen to an event from the socket.io server
      this.webSocketService.listen('congratulations').subscribe((data) => {
        // console.log(data);
      })
      
    
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
