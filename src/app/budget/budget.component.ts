import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { BudgetService } from '../service';
import { Budgets } from '../budgets';
import { HttpClient } from '@angular/common/http';

export interface PeriodicElement {
  name: string;
  position: number;
  limit: number;
  balance: number;
}

export interface Food {
  value: string;
  viewValue: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Saving', limit: 1.0079, balance: 3454 },
  { position: 2, name: 'Saving', limit: 4.0026, balance: 3445 },
  { position: 3, name: 'Checking', limit: 6.941, balance: 4566 },
];

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'limit', 'balance'];
  dataSource = ELEMENT_DATA;
  addNewBudgetForTest() {
    let newBudget: Budgets = { "_id": "5ddcac37b948963410ebbc53", "BudgetID": 2, "Name": "popcorn", "GoalCategory": 45, "GoalAmount": 0.99, "Description": "Earn popcorn" }
    console.log("hi from add new budget for test");
    //console.log(this.myBudgetService)
    this.myBudgetService.addBudget(newBudget)//.subscribe();
  };



  foods: Food[] = [
    { value: '1', viewValue: 'Checking' },
    { value: '2', viewValue: 'Saving' },

  ];

  constructor(private myBudgetService: BudgetService, private router: Router) { }

  ngOnInit() {

  }

}
