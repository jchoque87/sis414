import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { MueblesDormitorioService } from 'src/app/services/muebles-dormitorio.service';

export interface users {
  id: number;
  name: string;
  phone: string;
  username: string;
  Website: string;
  email: string;
}

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'phone', 'username','website','email'];
  dataSource: users[] = [];
  nombre: any = "";
  trabajo: any = "";

  constructor(private mueblesdormitorio: MueblesDormitorioService) { }

  ngOnInit(): void {
    this.mueblesdormitorio.getUsers().subscribe(
      (data: any) => {
        this.dataSource = data;
      })
  }
  SaveData(){
    const data = {
      "name": this.nombre,
      "job": this.trabajo
  };
    this.mueblesdormitorio.addUser(data).subscribe(
      (data:any) => {
        console.log(data);
      }
    )
  }

}
