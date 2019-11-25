import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from "../../categories";
import { CategoryService } from "../../service";
import { Transactions } from "../../transaction";
import { TransactionService } from "../../service";
import { FormControl } from '@angular/forms'



@Component({
  selector: 'app-transactionpage-add',
  templateUrl: './transactionpage-add.component.html',
  styleUrls: ['./transactionpage-add.component.css']
})



export class TransactionPageAddComponent implements OnInit {
  newTransaction: Transactions = new Transactions();
  ourCategories: Category[];
  viewValue = this.ourCategories;

  getCategories(): void {
    this.myCategoryService.getAllCategories().subscribe((categoryData: Category[]) => {
      this.ourCategories = categoryData;
    })
  }

  constructor(private myCategoryService: CategoryService, private router: Router, private myTransactionService: TransactionService) { }

  ngOnInit() {

  this.getTransactions();
    
  }
*/




 AccountID = new FormControl();
 transactionDate = new FormControl();
 transactionCategory = new FormControl();
 transactionPayee = new FormControl();
 transactionMemo  = new FormControl();
 transactionAmount  = new FormControl();

 saveClick() {
  console.log("The save button was clicked");
  //Don't add a record until the user presses the button
  this.addRecord();

  console.log("button clicked");

  this.newTransaction.AccountID = this.AccountID.value
  this.newTransaction.Date = this.transactionDate.value
  this.newTransaction.Category = this.transactionCategory.value
  this.newTransaction.Payee = this.transactionPayee.value
  this.newTransaction.Memo = this.transactionMemo.value
  this.newTransaction.Amount = this.transactionAmount.value
  // don't set the value for _id
  
  this.myTransactionService.insertTransaction(this.newTransaction).subscribe();
  this.AccountID.setValue("")
  this.transactionDate.setValue("")
  this.transactionCategory.setValue("")
  this.transactionPayee.setValue("")
  this.transactionMemo.setValue("")
  this.transactionAmount.setValue("")

  }

/*
export class Transactions {
	_id: String;
	Date: Date;
	AccountID: Number;
	Category: Number;
	Payee: String;
	Memo: String;
	Amount: Number;
}*/

}