import { Component, OnInit } from '@angular/core';
import { AppComponent } from "../app.component"; // <---------------------- Why is this here? 
import { data } from "../fakeData"

@Component({
  selector: 'app-home-recent-transactions',
  templateUrl: './home-recent-transactions.component.html',
  styleUrls: ['./home-recent-transactions.component.css']
})
export class HomeRecentTransactionsComponent implements OnInit {
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado']; // <---------------------- Why is this here? 
  myData = new data();
  fakeDatas = this.myData.info;


  // ]; <---------------------------------------------------------- Why is this here? 
  constructor() {

  }

  ngOnInit() {
  }

}
