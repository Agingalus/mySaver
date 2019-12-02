import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Budgets } from '../../budgets';
import { BudgetService } from '../../service'
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { Category } from "../../categories";
import { CategoryService } from "../../service";
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-buget-goals',
  templateUrl: './buget-goals.component.html',
  styleUrls: ['./buget-goals.component.css']
})
export class BugetGoalsComponent implements OnInit {

  displayedColumns: string[] = ['BudgetID', 'Name', 'GoalCategory', 'GoalAmount', 'Description'];
  newBudget: Budgets = new Budgets();
  updateBudget: Budgets = new Budgets();
  ourCategories: Category[];
  viewValue = this.ourCategories;

  getCatagories(): void {
    this.myCategoryService.getAllCategories().subscribe((categoryData: Category[]) => {
      this.ourCategories = categoryData;
    })
  }

  ourBudgets: Budgets[]
  dataSource = new MatTableDataSource<Budgets>(this.ourBudgets);

  getBudget(): void {
    this.myBudgetService.getAllBudgets().subscribe((budgetData: Budgets[]) => {
      this.ourBudgets = budgetData;
      this.dataSource = new MatTableDataSource<Budgets>(this.ourBudgets);
      this.dataSource.paginator = this.paginator;
    })
  }
  amount = new FormControl();
  description = new FormControl();
  name = new FormControl();

 
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
    this.newBudget.GoalCategory = this.findCatNubFromName(value);
  }

  getLastBudgetID() {
    let lastID: number = 1;
    if (this.ourBudgets.length > 1) {
      this.ourBudgets.forEach(element => {
        if (element.BudgetID > lastID) {
          lastID = element.BudgetID;
        }
      });
    }
    return ++lastID;

  }
  addNewBudget() {

    console.log("btn clicked")

    if (!isNaN(Number(this.amount.value))) {
      console.log("yes")
      this.newBudget.GoalAmount = Number(this.amount.value);
    }
    else {
      console.log("no")
    }

    this.newBudget.BudgetID = this.getLastBudgetID();
    this.newBudget.Name = this.name.value
    this.newBudget.Description = this.description.value
    console.log("this is the new buget");
    console.log(this.newBudget);
    this.myBudgetService.addBudget(this.newBudget).subscribe();
    this.name.setValue("");
    this.amount.setValue("");
    this.description.setValue("");
  }

  editBudget() {
    console.log("edit button clicked")

    if (!isNaN(Number(this.amount.value))) {
      console.log("yes")
      this.newBudget.GoalAmount = Number(this.amount.value);
    }
    else {
      console.log("no")
    }

    this.newBudget.Name = this.name.value
    this.newBudget.Description = this.description.value
    console.log("edit budget");
    console.log(this.updateBudget);
    this.myBudgetService.updateBudget(this.updateBudget).subscribe();
    this.name.setValue("");
    this.amount.setValue("");
    this.description.setValue("");
  }

  constructor(private myCategoryService: CategoryService, private myBudgetService: BudgetService, private router: Router) { }
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  ngOnInit() {

    this.getBudget();
    this.dataSource = new MatTableDataSource<Budgets>(this.ourBudgets);
    this.dataSource.paginator = this.paginator;

    this.getCatagories();
  }


}
