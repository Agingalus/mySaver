import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from "../../categories";
import { CategoryService } from "../../service";


@Component({
  selector: 'app-transactionpage-add',
  templateUrl: './transactionpage-add.component.html',
  styleUrls: ['./transactionpage-add.component.css']
})

export class TransactionPageAddComponent implements OnInit {
  
  ourCategories: Category[];
  viewValue = this.ourCategories;
  getCategories(): void {
    this.myCategoryService.getAllCategories().subscribe((categoryData: Category[]) => {
      this.ourCategories = categoryData;
    })
  }
  
  constructor(private myCategoryService: CategoryService, private router: Router) { }
  
  ngOnInit() {

  this.getCategories();
    
  }
  


/*
  ourTransactions: Transactions[];
  viewValue = this.ourTransactions;
  getTransactions(): void {
    this.myTransactionService.getAllTransactions().subscribe((transactionData: Transactions[]) => {
      this.ourTransactions = transactionData;
    })
  }
  
  constructor(private myTransactionService: TransactionService, private router: Router) { }
  
  ngOnInit() {

  this.getTransactions();
    
  }
  */


}
