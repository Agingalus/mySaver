import { Component, OnInit } from '@angular/core';
import { AppComponent } from "../app.component";
import { data } from "../fakeData"

@Component({
  selector: 'app-recent-transactions-home',
  templateUrl: './recent-transactions-home.component.html',
  styleUrls: ['./recent-transactions-home.component.css']
})
export class RecentTransactionsHomeComponent implements OnInit {
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  myData = new data();
  fakeDatas = this.myData.info;


  // ];
  constructor() {

  }

  ngOnInit() {
  }

}
