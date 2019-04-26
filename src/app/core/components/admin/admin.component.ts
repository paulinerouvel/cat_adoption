import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/admin/services/authentication.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent implements OnInit {

  constructor(private authenticationService:AuthenticationService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.authenticationService.isUserAuthenticatedRest().subscribe(result=> {
        console.log(result);
    })
    console.log(this.activatedRoute.snapshot.paramMap.get('lastname'));
    console.log(this.activatedRoute.snapshot.paramMap.get('firstname'));
  
  }

}
