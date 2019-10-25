import { Component, OnInit } from '@angular/core';
import { data } from "../fakeData"
export interface PeriodicElement {
  id: Number;
  name: string;
  type: string;
  amount: string;
  date: string;
  account: string;
  currency: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { id: 1, name: "Metro", type: "Transport", amount: "-2.75", date: "10/15", account: "Chase", currency: "USD" },
  { id: 2, name: "Bellevue College", type: "Food", amount: "-10.56", date: "10/17", account: "Mastercard", currency: "EUR" },
  { id: 3, name: "Chase", type: "Mortgage", amount: "-1200", date: "9/30", account: "Mastercard", currency: "USD" },
  { id: 4, name: "Tommy Hilfiger", type: "Shopping", amount: "-103.94", date: "10/10", account: "Mastercard", currency: "EUR" },
  { id: 5, name: "Bellevue College", type: "School", amount: "-2477.65", date: "10/11", account: "Mastercard", currency: "USD" },
  { id: 6, name: "Ace Vet Clinic", type: "Pet", amount: "-78.00", date: "10/14", account: "Visa", currency: "EUR" },
  { id: 7, name: "Acme Company", type: "Salary", amount: "+472.96", date: "10/14", account: "Chase", currency: "USD" }
];


// export class TableBasicExample {

// }
@Component({
  selector: 'app-home-recent-transactions',
  templateUrl: './home-recent-transactions.component.html',
  styleUrls: ['./home-recent-transactions.component.css']
})
export class HomeRecentTransactionsComponent implements OnInit {

  myData = new data();
  fakeDatas = this.myData.info;
  displayedColumns: string[] = ['id', 'name', 'type', 'amount'];
  dataSource = ELEMENT_DATA;



  constructor() {

  }

  ngOnInit() {
  }

}


