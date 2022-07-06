import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public authService: AuthenticationService, private router:Router) {

  }

  ngOnInit(): void {
  }

  logout(){
    this.authService.logout().subscribe(()=>{
      this.router.navigate(['']);
    });
   }
}
