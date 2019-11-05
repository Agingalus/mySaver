import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Transactions } from '../../transaction';
import { TransactionService } from '../../service'
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-transactionpage-history',
  templateUrl: './transactionpage-history.component.html',
  styleUrls: ['./transactionpage-history.component.css']
})

export class TransactionPageHistoryComponent implements OnInit {

  displayedColumns: string[] = ['Date','AccountID', 'Payee', 'Category', 'Amount', 'Memo'];
  
  ourTransactions: Transactions[] 
  dataSource = new MatTableDataSource<Transactions>(this.ourTransactions);
 
  getTransactions(): void {
    this.myTransactionService.getAllTransactions().subscribe((transactionData: Transactions[]) => {
      this.ourTransactions = transactionData;
      this.dataSource = new MatTableDataSource<Transactions>(this.ourTransactions);
      this.dataSource.paginator = this.paginator;
    })
  }

  constructor(private myTransactionService: TransactionService, private router: Router) {}
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    ngOnInit() {
  
      this.getTransactions();
      this.dataSource = new MatTableDataSource<Transactions>(this.ourTransactions);
      this.dataSource.paginator = this.paginator;
    }

}
