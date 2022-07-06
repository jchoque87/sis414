import { Component, OnInit } from '@angular/core';
import { MachimbresService } from '../../services/machimbres.service'
import { Persona } from 'src/app/models/persona';
@Component({
  selector: 'app-machimbres-admin',
  templateUrl: './machimbres-admin.component.html',
  styleUrls: ['./machimbres-admin.component.css']
})
export class MachimbresAdminComponent implements OnInit {

  displayedColumns: string[] = ['job', 'name', 'time', 'Button_m'];
  dataSource: any[] = [];
  nombre:  any = "";
  trabajo: any = "";
  time: any ="";
  Button_m: any ="";
  
  constructor(private machimbres: MachimbresService) { }

  ngOnInit(): void {
    this.machimbres.getUsers().subscribe(
      (data: any) => {
        this.dataSource = Object.keys(data).map((key) => {
          const newData={
            id: key,
            job:data[key].job,
            name:data[key].name,
            time:data[key].time,
          }
          return newData });

      })
  }
  SaveData(){
    const data = {
      "name": this.nombre,
      "job": this.trabajo,
      "time": this.time,
    };    
    this.machimbres.addUser(data).subscribe(
      (data: any) => {
        console.log(data);
      })
  }
  
  deleteData(key:string){

    console.log(key);
   this.machimbres.deleteUser(key).subscribe(data =>{
     console.log(data);
    }, error =>{
       console.error(error);
    });
  }



}

