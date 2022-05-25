import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { PisosService } from '../services/pisos.service';

/*
export interface users {
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
  email: string;
}
*/
@Component({
  selector: 'app-pisos',
  templateUrl: './pisos.component.html',
  styleUrls: ['./pisos.component.css']
})
export class PisosComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'phone', 'username','website','email'];
  dataSource: any[] = [];

  constructor(private pisos: PisosService) { }

  ngOnInit(): void {
    this.pisos.getUsers().subscribe(
      (data: any) => {
        this.dataSource = data;
      })
  }

}
