import { Component, OnInit } from '@angular/core';
import { IndexService } from 'src/app/services/index-service';

@Component({
  selector: 'app-index-admin',
  templateUrl: './index-admin.component.html',
  styleUrls: ['./index-admin.component.css']
})
export class IndexAdminComponent implements OnInit {
  displayedColumns: string[] = ['job', 'name'];
  dataSource: any[] = [];
  nombre:  any = "";
  trabajo: any = "";

  constructor(private index: IndexService) { }

  ngOnInit(): void {
    this.index.getUsers().subscribe(
      (data: any) => {
        this.dataSource = Object.keys(data).map((key) => { return data[key] });
      })
  }

  SaveData(){
    const data = {
      "name": this.nombre,
      "job": this.trabajo
    };    
    this.index.addUser(data).subscribe(
      (data: any) => {
        console.log(data);
      })
  }

}
