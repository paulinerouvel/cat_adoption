import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/admin/services/authentication.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent implements OnInit {

  constructor(private authenticationService:AuthenticationService) { }

  ngOnInit() {
    this.authenticationService.isUserAuthenticatedRest().subscribe((result)=> {
        console.log(result);
    })
  }

}
