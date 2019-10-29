import { Component, OnInit } from '@angular/core';

export interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-settings-card',
  templateUrl: './settings-card.component.html',
  styleUrls: ['./settings-card.component.css']
})

export class SettingsCardComponent implements OnInit {
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
