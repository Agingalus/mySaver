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

  amount = new FormControl();
  description = new FormControl();
  name = new FormControl();

  ourBudgets: Budgets[]; 
  foundBudget: Budgets = new Budgets();


  findBudget(): void {
    this.myBudgetService.getAllBudgets(this.foundBudget._id).subscribe((foundData: Budgets) => {
      this.foundBudget = foundData;
    })
  }

  getCatagories(): void {
    this.myCategoryService.getAllCategories().subscribe((categoryData: Category[]) => {
      this.ourCategories = categoryData;
    })
  }

  dataSource = new MatTableDataSource<Budgets>(this.ourBudgets);

  getBudget(): void {
    this.myBudgetService.getAllBudgets().subscribe((budgetData: Budgets[]) => {
      this.ourBudgets = budgetData;
      this.dataSource = new MatTableDataSource<Budgets>(this.ourBudgets);
      this.dataSource.paginator = this.paginator;
    })
  }
  

 
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

    this.newBudget.BudgetID = this.getLastBudgetID();
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
/*
import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../Task';
import { Alert } from 'selenium-webdriver';

import { Router } from '@angular/router';   // ###### to allow me to jum to another page
// or back to myself to get a refresh

@Component({
  selector: 'app-show-tasks',
  templateUrl: './show-tasks.component.html',
  styleUrls: ['./show-tasks.component.css']
})
export class ShowTasksComponent implements OnInit {

  ourTasks: Task[]; 
  newTask: Task = new Task();
  foundTask: Task = new Task();

   // use this version of getTask to test local code, or enable the one below
  // getTasks(): void {
  //   let aDate: Date = new Date(2018, 11, 24, 10, 33, 30, 0);

  //   var localTaskArray: Task[] = [
  //     { taskName: "John", createdOn: aDate},
  //     { taskName: "George",  createdOn: aDate },
  //     { taskName: "Ringo",  createdOn: aDate },
  //   ];
     
  //   this.ourTasks = localTaskArray;
  // }
  selectedTask: Task = new Task(); // a property set by the <li> click event, defined next

 // when user clicks on any <li> in our list, this saves that name li in the above property
 // the HTML page in turn uses that property to set a conditional CSS for that selected line
 // and to display for information about that one object
 onSelect(PassedInTaskItem: Task): void {
  this.selectedTask = PassedInTaskItem;
}

  getTasks(): void {
    this.myTaskService.getAllTasks().subscribe((taskData: Task[]) => {
      this.ourTasks = taskData;
    })
  }


  deleteTask(): void {
    this.myTaskService.deleteTask( this.selectedTask).subscribe();
  }

  findTask(): void {
    this.myTaskService.getTask(this.foundTask._id).subscribe((foundData: Task) => {
      this.foundTask = foundData;
    })
  }
  

  addRecord(): void {
    this.newTask._id = (new Date().valueOf()).toString();  // fairly safe random number
    // if unlucky and get a duplicate, Mongo will just reject, user can try again
    this.myTaskService.insertTask(this.newTask).subscribe();
  }

  updateRecord(): void {
    this.myTaskService.updateTask( this.selectedTask).subscribe();
     
    // need to clear slected task so that page doesn't draw that HTML segment
    this.selectedTask = null;
    this.router.navigate(['/tasks']); 
      //#### this.router.navigate(['/update-book', id]);   can also pass a value

  }
  



  constructor(private myTaskService: TaskService, private router: Router) { }
  // ####  added the private router: Router into the constructor

  // for test code
  saved_id: string;


  
  ngOnInit() {
    this.foundTask.taskName = "tbd";
    this.foundTask.createdOn = null;
    this.foundTask._id = "fill in _id here";
    this.newTask.taskName = "";
    this.newTask._id = "not yet set";
    this.selectedTask._id = "tbd";
    this.selectedTask.taskName = "not yet set"
    this.saved_id = 'not yet set';
    this.getTasks();
  }
*/