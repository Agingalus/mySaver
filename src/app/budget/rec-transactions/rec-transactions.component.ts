import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  name: string;
  position: number;
  limit: string;
  balance: number;
}

export interface Food {
  value: string;
  viewValue: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Education', limit: "Chase Savings", balance: 567},
  {position: 2, name: 'Rent', limit: "Chase Banking", balance: 3000},
  {position: 3, name: 'Car Loan', limit: "Chase Banking", balance: 350},
];

@Component({
  selector: 'app-rec-transactions',
  templateUrl: './rec-transactions.component.html',
  styleUrls: ['./rec-transactions.component.css']
})
export class RecTransactionsComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'limit', 'balance'];
  dataSource = ELEMENT_DATA;

  foods: Food[] = [
    {value: '1', viewValue: 'Car Loan'},
    {value: '2', viewValue: 'Education'},
    {value: '2', viewValue: 'Rent'},
  
  ];
  constructor() { }

  ngOnInit() {
  }

}
