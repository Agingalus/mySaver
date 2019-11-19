import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { RecurringTransactions } from '../../recurringTransaction';
import { RecurringTransactionService } from '../../service'
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { Category } from "../../categories";
import { CategoryService } from "../../service";

@Component({
  selector: 'app-rec-transactions',
  templateUrl: './rec-transactions.component.html',
  styleUrls: ['./rec-transactions.component.css']
})

export class RecTransactionsComponent implements OnInit {
  displayedColumns: string[] = ['StartDate','EndDate', 'AccountName',  'Category', 'Payee', 'Memo', 'Amount', 'FrequencyMonths'];
  
  ourCategories: Category[];
  viewValue = this.ourCategories;
  
  getCatagories(): void {
    this.myCategoryService.getAllCategories().subscribe((categoryData: Category[]) => {
      this.ourCategories = categoryData;
    })
  }

  ourRecTransactions: RecurringTransactions[] 
  dataSource = new MatTableDataSource<RecurringTransactions>(this.ourRecTransactions);
 
  getRecTransactions(): void {
    this.myRecTransactionService.getAllRecurringTransactions().subscribe((recTransactionData: RecurringTransactions[]) => {
      this.ourRecTransactions = recTransactionData;
      this.dataSource = new MatTableDataSource<RecurringTransactions>(this.ourRecTransactions);
      this.dataSource.paginator = this.paginator;
    })
  }

  constructor(private myCategoryService: CategoryService, private myRecTransactionService: RecurringTransactionService, private router: Router) {}
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    ngOnInit() {
  
      this.getRecTransactions();
      this.dataSource = new MatTableDataSource<RecurringTransactions>(this.ourRecTransactions);
      this.dataSource.paginator = this.paginator;

      this.getCatagories();
    }

}

