import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { TableComponent } from 'src/app/table/table.component';
@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  ngOnInit(): void {
  }
  constructor(private table : MatDialog) { 
   
    
  }
  openDialog() {
    this.table.open(TableComponent, {
      width: '30%'
    });
  }
  
}
