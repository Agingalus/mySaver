/*
import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../Task';
import { Alert } from 'selenium-webdriver';*/

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
  selectedTask: Task;  // a property set by the <li> click event, defined next

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
    console.log("time to refresh");
   
    //#### this.router.navigate(['/update-book', id]);   passing a value
    // need to clear slected task so that page doesn't draw that HTML segment
    this.selectedTask = null;
    this.router.navigate(['/tasks']); 
    
  }
  


  // when user clicks on any <li> in our list, this saves that name li in the above property
  // the HTML page in turn uses that property to set a conditional CSS for that selected line
  // and to display for information about that one object
 onSelect(PassedInTaskItem: Task): void {
   this.selectedTask = PassedInTaskItem;
 }

 
 
  constructor(private myTaskService: TaskService, private router: Router) { }
  // ####  added the private router: Router into the constructor

 

  ngOnInit() {
    this.foundTask.taskName = "tbd";
    this.foundTask.createdOn = null;
    this.foundTask._id = "fill in _id here";
    this.newTask.taskName = "";
    this.newTask._id = "not yet set";
    this.getTasks();
  }

}
