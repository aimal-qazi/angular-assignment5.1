import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  data: any[] = [];
  constructor(public service: DataService) {}
  ngOnInit(): void {
    this.data = this.service.userData;
  }
}
