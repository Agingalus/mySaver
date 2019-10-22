import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  limit: number;
  balance: number;
}

export interface Food {
  value: string;
  viewValue: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Saving', limit: 1.0079, balance: 3454},
  {position: 2, name: 'Saving', limit: 4.0026, balance: 3445},
  {position: 3, name: 'Checking', limit: 6.941, balance: 4566},
];
@Component({
  selector: 'app-bank-accounts',
  templateUrl: './bank-accounts.component.html',
  styleUrls: ['./bank-accounts.component.css']
})
export class BankAccountsComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'limit', 'balance'];
  dataSource = ELEMENT_DATA;

  foods: Food[] = [
    {value: '1', viewValue: 'Checking'},
    {value: '2', viewValue: 'Saving'},
  
  ];
  constructor() { }

  ngOnInit() {
  }

}
