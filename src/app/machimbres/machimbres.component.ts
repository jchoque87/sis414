import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-machimbres',
  templateUrl: './machimbres.component.html',
  styleUrls: ['./machimbres.component.css']
})
export class MachimbresComponent implements OnInit {

  constructor(private table: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.table.open(TableComponent, {
      width: '30%'
    });
  }
}
