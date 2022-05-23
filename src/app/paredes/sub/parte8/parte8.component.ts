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

  constructor(private pared: ParedService) { }

  ngOnInit(): void {
    this.pared.getUsers().subscribe(
      (data: any) => {
        this.dataSource = data;
      })
  }


}
