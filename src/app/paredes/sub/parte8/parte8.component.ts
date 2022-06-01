import { Component, OnInit } from '@angular/core';
import { ParedService } from '../sercices/pared.service';


@Component({
  selector: 'app-parte8',
  templateUrl: './parte8.component.html',
  styleUrls: ['./parte8.component.css']
})
export class Parte8Component implements OnInit {

  tabLoadTimes: Date[] = [];
  getTimeLoaded(index: number) {
    if (!this.tabLoadTimes[index]) {
      this.tabLoadTimes[index] = new Date();
    }
    return this.tabLoadTimes[index];
  }

  displayedColumns: string[] = ['id', 'name', 'phone', 'username','website','email'];
  dataSource: any[] = [];
  nombre:     any = "";
  phone:    any = "";
  username: any = "";
  website: any = "";
  email: any = "";

  constructor(private pared: ParedService) { }

  ngOnInit(): void {
    this.pared.getUsers().subscribe(
      (data: any) => {
        this.dataSource = data;
      })
  }

  SaveData(){
    const data = {
      "name": this.nombre,
      "username": this.username,
      "phone": this.phone,
      "website": this.website,
      "email": this.email
    };
    this.pared.addUser(data).subscribe(
      (data: any) => {
        console.log(data);
      })
  }


}
