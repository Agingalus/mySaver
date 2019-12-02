import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { Category } from "../../categories";
import { CategoryService } from "../../service";
import { FormControl } from '@angular/forms';
import { Transactions } from "../../transaction";
import { TransactionService } from "../../service";

@Component({
  selector: 'app-transactionpage-add',
  templateUrl: './transactionpage-add.component.html',
  styleUrls: ['./transactionpage-add.component.css']
})

export class TransactionPageAddComponent implements OnInit {
  
  ourCategories: Category[];
  viewValue = this.ourCategories;
  
  getCatagories(): void {
    this.myCategoryService.getAllCategories().subscribe((categoryData: Category[]) => {
      this.ourCategories = categoryData;
    })
  }

  newTrans: Transactions = new Transactions();
  ourRecTransactions: Transactions[] 
  dataSource = new MatTableDataSource<Transactions>(this.ourRecTransactions);
 
  getRecTransactions(): void {
    this.myTransactionService.getAllTransactions().subscribe((transactionData: Transactions[]) => {
      this.ourRecTransactions = transactionData;
      this.dataSource = new MatTableDataSource<Transactions>(this.ourRecTransactions);
      this.dataSource.paginator = this.paginator;
    })
  }

  transactionDate = new FormControl();
  accountID = new FormControl();
  payee = new FormControl();
  memo = new FormControl();
  amount = new FormControl();
  Date = new FormControl();

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
    this.newTrans.Category = this.findCatNubFromName(value);
  }

  addNewTrans() {
    console.log("clicked button")

    this.newTrans.Date = this.transactionDate.value;
    this.newTrans.AccountID = this.accountID.value;
    this.newTrans.Payee = this.payee.value;
    this.newTrans.Memo = this.memo.value;
    this.newTrans.Amount = this.amount.value;

    this.myTransactionService.insertTransaction(this.newTrans).subscribe();
    this.transactionDate.setValue("");
    this.accountID.setValue("");
    this.payee.setValue("");
    this.memo.setValue("");
    this.amount.setValue("");

  }


  constructor(private myCategoryService: CategoryService, private myTransactionService: TransactionService, private router: Router) {}
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    ngOnInit() {
  
      this.getRecTransactions();
      this.dataSource = new MatTableDataSource<Transactions>(this.ourRecTransactions);
      this.dataSource.paginator = this.paginator;

      this.getCatagories();
    }

}



// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { Category } from "../../categories";
// import { CategoryService } from "../../service";
// import { Transactions } from "../../transaction";
// import { TransactionService } from "../../service";
// import { FormControl } from '@angular/forms'
// import {MatAutocompleteModule} from '@angular/material/autocomplete'; 


// @Component({
//   selector: 'app-transactionpage-add',
//   templateUrl: './transactionpage-add.component.html',
//   styleUrls: ['./transactionpage-add.component.css']
// })

// export class TransactionPageAddComponent implements OnInit {
//   newTransaction: Transactions = new Transactions();
//   ourCategories: Category[];
//   viewValue = this.ourCategories;

//   getCategories(): void {
//     this.myCategoryService.getAllCategories().subscribe((categoryData: Category[]) => {
//       this.ourCategories = categoryData;
//     })
//   }
  
//   constructor(private myCategoryService: CategoryService, private router: Router, private myTransactionService: TransactionService) { }
  
//   ngOnInit() {

//   this.getCategories();
    
//   }
  


// /*
//   ourTransactions: Transactions[];
//   viewValue = this.ourTransactions;
//   getTransactions(): void {
//     this.myTransactionService.getAllTransactions().subscribe((transactionData: Transactions[]) => {
//       this.ourTransactions = transactionData;
//     })
//   }
  
//   constructor(private myTransactionService: TransactionService, private router: Router) { }
  
//   ngOnInit() {

//   this.getTransactions();
    
//   }
// */

// // constructor(private myTransactionService: TransactionService, private router: Router) {}

//  addRecord(): void {
//    //this.newTask._id = (new Date().valueOf()).toString();  // fairly safe random number
//    // if unlucky and get a duplicate, Mongo will just reject, user can try again
//    this.myTransactionService.insertTransaction(this.newTransaction).subscribe();
//  }


//  AccountID = new FormControl();
//  transactionDate = new FormControl();
//  transactionCategory = new FormControl();
//  transactionPayee = new FormControl();
//  transactionMemo  = new FormControl();
//  transactionAmount  = new FormControl();

//  saveClick() {
//   console.log("The save button was clicked");
//   //Don't add a record until the user presses the button
//   this.addRecord();

//   console.log("button clicked");

//   this.newTransaction.AccountID = this.AccountID.value
//   this.newTransaction.Date = this.transactionDate.value
//   this.newTransaction.Category = this.transactionCategory.value
//   this.newTransaction.Payee = this.transactionPayee.value
//   this.newTransaction.Memo = this.transactionMemo.value
//   this.newTransaction.Amount = this.transactionAmount.value
//   // don't set the value for _id
  
//   this.myTransactionService.insertTransaction(this.newTransaction).subscribe();
//   this.AccountID.setValue("")
//   this.transactionDate.setValue("")
//   this.transactionCategory.setValue("")
//   this.transactionPayee.setValue("")
//   this.transactionMemo.setValue("")
//   this.transactionAmount.setValue("")

//   }
// /*
// addNewBudget() {

//     console.log("btn clicked")

//     if (!isNaN(Number(this.amount.value))) {
//       console.log("yes")
//       this.newBudget.GoalAmount = Number(this.amount.value);
//     }
//     else {
//       console.log("no")
//     }

//     this.newBudget.Name = this.name.value
//     this.newBudget.Description = this.description.value
//     console.log("this is the new buget");
//     console.log(this.newBudget);
//     this.myBudgetService.addBudget(this.newBudget).subscribe();
//     this.name.setValue("");
//     this.amount.setValue("");
//     this.description.setValue("");

//   }
// */





// /*
// export class Transactions {
// 	_id: String;
// 	Date: Date;
// 	AccountID: Number;
// 	Category: Number;
// 	Payee: String;
// 	Memo: String;
// 	Amount: Number;
// }*/

// }