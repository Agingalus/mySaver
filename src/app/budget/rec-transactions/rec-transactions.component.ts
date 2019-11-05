import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { RecurringTransactions } from '../../recurringTransaction';
import { RecurringTransactionService } from '../../service'
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-rec-transactions',
  templateUrl: './rec-transactions.component.html',
  styleUrls: ['./rec-transactions.component.css']
})
export class RecTransactionsComponent implements OnInit {
  displayedColumns: string[] = ['StartDate','EndDate', 'AccountName',  'Category', 'Payee', 'Memo', 'Amount', 'FrequencyMonths'];
  
  ourTransactions: RecurringTransactions[] 
  dataSource = new MatTableDataSource<RecurringTransactions>(this.ourTransactions);
 
  getTransactions(): void {
    this.myTransactionService.getAllRecurringTransactions().subscribe((transactionData: RecurringTransactions[]) => {
      this.ourTransactions = transactionData;
      this.dataSource = new MatTableDataSource<RecurringTransactions>(this.ourTransactions);
      this.dataSource.paginator = this.paginator;
    })
  }

  constructor(private myTransactionService: RecurringTransactionService, private router: Router) {}
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    ngOnInit() {
  
      this.getTransactions();
      this.dataSource = new MatTableDataSource<RecurringTransactions>(this.ourTransactions);
      this.dataSource.paginator = this.paginator;
    }

    
    foods: Food[] = [
      {value: '1', viewValue: 'Car Loan'},
      {value: '2', viewValue: 'Education'},
      {value: '2', viewValue: 'Rent'},]

}

