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

const HISTORY_DATA: historyData[] = [
  {position: 1, date: '10-22-2019', account: 'checking', category: 'gym', payee: 'BC', memo: '', amount: 58.00, accountRunningTotal: 430.23, editTransactionOrViewDetails: 'button'},
  {position: 2, date: '10-22-2019', account: 'visa', category: 'books', payee: 'BC', memo: 'Angular', amount: 100.00, accountRunningTotal: 1000.94, editTransactionOrViewDetails: 'button'},
  {position: 3, date: '10-22-2019', account: 'visa', category: 'education', payee: 'BC', memo: '', amount: 600.00, accountRunningTotal: 400.94, editTransactionOrViewDetails: 'button'},
];;

@Component({
  selector: 'app-transactionpage-history',
  templateUrl: './transactionpage-history.component.html',
  styleUrls: ['./transactionpage-history.component.css']
})
export class TransactionPageHistoryComponent implements OnInit {
  displayedColumns: string[] = ['position', 'date', 'account', 'category', 'payee', 'memo', 'amount', 'accountRunningTotal', 'editTransactionOrViewDetails'];
  dataSource = HISTORY_DATA;

  foods: Food[] = [
    {value: '1', viewValue: 'Car Loan'},
    {value: '2', viewValue: 'Education'},
    {value: '2', viewValue: 'Rent'},
  
  ];
  constructor() { }

  ngOnInit() {
  }

}
