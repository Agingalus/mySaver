import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { RecurringTransactions } from '../../recurringTransaction';
import { RecurringTransactionService } from '../../service'
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { Category } from "../../categories";
import { CategoryService } from "../../service";
import { FormControl } from '@angular/forms';
import { Budgets } from 'src/app/budgets';

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

  newRecTrans: RecurringTransactions = new RecurringTransactions();
  ourRecTransactions: RecurringTransactions[] 
  dataSource = new MatTableDataSource<RecurringTransactions>(this.ourRecTransactions);
 
  getRecTransactions(): void {
    this.myRecTransactionService.getAllRecurringTransactions().subscribe((recTransactionData: RecurringTransactions[]) => {
      this.ourRecTransactions = recTransactionData;
      this.dataSource = new MatTableDataSource<RecurringTransactions>(this.ourRecTransactions);
      this.dataSource.paginator = this.paginator;
    })
  }

  startdate = new FormControl();
  enddate = new FormControl();
  payee = new FormControl();
  frequencydays = new FormControl();
  memo = new FormControl();
  amount = new FormControl();
  frequencymonths = new FormControl();

  findCatNubFromName(theName) {
    let number;

    this.ourCategories.forEach(element => {
      if (element.name == theName) {
        number = element.categoryid;
        return;
      }
    });
    return number;
  }

  changeBudgetCategory(value) {
    this.newRecTrans.Category = this.findCatNubFromName(value);
  }

  addNewRecTrans() {
    console.log("clicked button")

    this.newRecTrans.StartDate = this.startdate.value
    this.newRecTrans.EndDate = this.enddate.value
    this.newRecTrans.Payee = this.payee.value
    this.newRecTrans.FrequencyMonths = this.frequencymonths.value
    this.newRecTrans.FrequencyDays = this.frequencydays.value
    this.newRecTrans.Memo = this.memo.value
    this.newRecTrans.Amount = this.amount.value

    this.myRecTransactionService.addRecTrans(this.newRecTrans).subscribe()
    this.startdate.setValue("");
    this.enddate.setValue("");
    this.payee.setValue("");
    this.frequencydays.setValue("");
    this.frequencymonths.setValue("");
    this.memo.setValue("");
    this.amount.setValue("");

    setTimeout(function() {window.location.reload();}, 2000);
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

