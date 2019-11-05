import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from "../../fakeData"
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Transactions } from '../../transaction';
import { TransactionService } from '../../service'
import { Router } from '@angular/router';

// let preTransaction = new Transactions();
// preTransaction.AccountID = 0;
// preTransaction.Amount = 0;
// preTransaction.Payee = 'none'
// preTransaction.Category = 0;
function compare(a, b) {
  if (a.AccountID < b.AccountID) {
    return -1;
  }
  if (a.AccountID > b.AccountID) {
    return 1;
  }
  return 0;
};
let totalPerCat = [];
function addByCat(pTransactions) {
  for (let i = 0; i < pTransactions.length; i++) {
    if (totalPerCat[pTransactions[i].Category] == null) {
      totalPerCat[pTransactions[i].Category] = pTransactions[i].Amount;

    }
    else {
      totalPerCat[pTransactions[i].Category] += pTransactions[i].Amount
    }

  }

}

@Component({
  selector: 'app-home-recent-transactions',
  templateUrl: './home-recent-transactions.component.html',
  styleUrls: ['./home-recent-transactions.component.css']
})

export class HomeRecentTransactionsComponent implements OnInit {

  //myData = new data();
  //fakeDatas = this.myData.info;
  displayedColumns: string[] = ['AccountID', 'Payee', 'Category', 'Amount'];
  //dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);


  ourTransactions: Transactions[] //= [preTransaction, preTransaction, preTransaction];
  dataSource = new MatTableDataSource<Transactions>(this.ourTransactions);
  //dataSource = ELEMENT_DATA;

  getTransactions(): void {
    this.myTransactionService.getAllTransactions().subscribe((transactionData: Transactions[]) => {
      this.ourTransactions = transactionData;
      this.ourTransactions.sort(compare);
      console.log("this is from home-recent-transactions");
      console.log(this.ourTransactions);
      this.dataSource = new MatTableDataSource<Transactions>(this.ourTransactions);
      this.dataSource.paginator = this.paginator;
      addByCat(this.ourTransactions);
      console.log("this is all cats added together");
      console.log(totalPerCat);
    })
  }

  constructor(private myTransactionService: TransactionService, private router: Router
  ) {
  }
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  ngOnInit() {

    this.getTransactions();
    this.dataSource = new MatTableDataSource<Transactions>(this.ourTransactions);
    this.dataSource.paginator = this.paginator;
  }

}




