import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  name: string;
  position: number;
  limit: number;
  description: string;
}

export interface Food {
  value: string;
  viewValue: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Education', limit: 500, description: "Paying for classes"},
  {position: 2, name: 'Groceries', limit: 350, description: "Keep food budget under $300"},
  {position: 3, name: 'Living', limit: 3000, description: "Rent, utilities"},
  {position: 4, name: 'Transportation', limit: 200, description: "Gas"}
];
@Component({
  selector: 'app-buget-goals',
  templateUrl: './buget-goals.component.html',
  styleUrls: ['./buget-goals.component.css']
})
export class BugetGoalsComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'limit', 'description'];
  dataSource = ELEMENT_DATA;

  foods: Food[] = [
    {value: '1', viewValue: 'Education'},
    {value: '2', viewValue: 'Living'},
    {value: '3', viewValue: 'Groceries'},
    {value: '4', viewValue: 'Shopping'},
    {value: '5', viewValue: 'Fitness'},
  
  ];
  constructor() { }

  ngOnInit() {
  }

}
