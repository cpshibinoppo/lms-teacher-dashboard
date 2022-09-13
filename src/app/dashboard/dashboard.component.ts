import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  add: any;
  constructor() {}

  ngOnInit(): void {}
  show() {
    var box = document.getElementById('hideprof');
    this.add = true;
    box!.style.display = 'block';
  }
  hide() {
    var box = document.getElementById('hideprof');
    this.add = false;
    box!.style.display = 'none';
  }
}
