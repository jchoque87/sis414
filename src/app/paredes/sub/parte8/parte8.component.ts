import { Component, OnInit } from '@angular/core';
import { ParedService } from '../sercices/pared.service';



@Component({
  selector: 'app-parte8',
  templateUrl: './parte8.component.html',
  styleUrls: ['./parte8.component.css']
})

export class Parte8Component implements OnInit {


  displayedColumns: string[] = ['name','decor','desing','place', 'details','actualizar','borrar'];
  dataSource:   any[] = [];
  name:         any = "";
  decoracion:    any = "";
  desing:       any = "";
  lugar:          any = "";
  detalles:        any = "";
  borrar:          any="";
  actualizar:          any="";

  constructor(private pared: ParedService) { }


  ngOnInit(): void {
    this.pared.getUsers().subscribe(
      (data: any) => {
        this.dataSource = Object.keys(data).map((key) => {
          const newData={
            id:key,
            name:data[key].name,
            decor:data[key].decor,
            desing:data[key].desing,
            place:data[key].place,
            details:data[key].details
          }
          return newData });
      })
  }



  SaveData(){
    const data = {
      "name": this.name,
      "decor": this.decoracion,
      "desing": this.desing,
      "place": this.lugar,
      "details": this.detalles,
    };
    this.pared.addUser(data).subscribe(
      (data: any) => {
        console.log(data);
      })
  }

  deleteData(key:string){
    console.log(key);
   this.pared.deleteUser(key).subscribe(data =>{
     console.log(data);
    }, error =>{
       console.error(error);
    });
  }
}

