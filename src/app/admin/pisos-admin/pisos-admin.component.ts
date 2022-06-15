import { Component, OnInit } from '@angular/core';
import { PisosService } from '../../services/pisos.service';

@Component({
  selector: 'app-pisos-admin',
  templateUrl: './pisos-admin.component.html',
  styleUrls: ['./pisos-admin.component.css']
})
export class PisosAdminComponent implements OnInit {

  displayedColumns: string[] = ['job', 'name'];
  dataSource: any[] = [];
  nombre:  any = "";
  trabajo: any = "";

  constructor(private pisos: PisosService) { }

  ngOnInit(): void {
    this.pisos.getUsers().subscribe(
      (data: any) => {
        this.dataSource = Object.keys(data).map((key) => { return data[key] });
      })
  }

  SaveData(){
    const data = {
      "name": this.nombre,
      "job": this.trabajo
    };    
    this.pisos.addUser(data).subscribe(
      (data: any) => {
        console.log(data);
      })
  }
}
