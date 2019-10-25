import { Component, OnInit } from '@angular/core';

export interface historyData {
  position: number;
  date: string;
  account: string;
  category: string;
  payee: string;
  memo: string;
  amount: number;
  accountRunningTotal: number;
  editTransactionOrViewDetails: string;
}

export interface Food {
  value: string;
  viewValue: string;
}

const ELEMENT_DATA: historyData[] = [
  {position: 1, date: '10-22-2019', account: 'checking', category: 'gym', payee: 'BC', memo: '', amount: 58.00, accountRunningTotal: 430.23, editTransactionOrViewDetails: 'button'},
  {position: 2, date: '10-22-2019', account: 'visa', category: 'books', payee: 'BC', memo: 'Angular', amount: 100.00, accountRunningTotal: 1000.94, editTransactionOrViewDetails: 'button'},
  {position: 3, date: '10-22-2019', account: 'visa', category: 'education', payee: 'BC', memo: '', amount: 600.00, accountRunningTotal: 400.94, editTransactionOrViewDetails: 'button'},
];
@Component({
  selector: 'app-transactionpage-add',
  templateUrl: './transactionpage-add.component.html',
  styleUrls: ['./transactionpage-add.component.css']
})
export class TransactionPageAddComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'limit', 'balance'];
  dataSource = ELEMENT_DATA;

  foods: Food[] = [
    {value: '1', viewValue: 'value1'},
    {value: '2', viewValue: 'value2'},
    {value: '3', viewValue: 'value3'},
    {value: '4', viewValue: 'value4'},
    {value: '5', viewValue: 'value5'},
    {value: '6', viewValue: 'value6'},
    {value: '7', viewValue: 'value7'},

  ];
  constructor() { }

  ngOnInit() {
  }

}
