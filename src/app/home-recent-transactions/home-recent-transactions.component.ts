import { Component, OnInit } from '@angular/core';
import { AppComponent } from "../app.component";
import { data } from "../fakeData"

@Component({
  selector: 'app-home-recent-transactions',
  templateUrl: './home-recent-transactions.component.html',
  styleUrls: ['./home-recent-transactions.component.css']
})
export class HomeRecentTransactionsComponent implements OnInit {
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  myData = new data();
  fakeDatas = this.myData.info;


  // ];
  constructor() {

  }

  ngOnInit() {
  }

}
