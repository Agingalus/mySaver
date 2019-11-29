import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule, NgModel } from "@angular/forms";
import { MatSelectModule } from '@angular/material/select';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BugetGoalsComponent } from './buget-goals.component';
import { MatCard, MatCardModule } from '@angular/material/card';
import { Budgets } from 'src/app/budgets';
import { HttpClient } from 'selenium-webdriver/http';
import { NgModule, Injectable } from '@angular/core';
import { HttpHandler, HttpClientModule } from '@angular/common/http';
//import { AppRoutingModule } from 'src/app/app-routing.module';
import { BudgetService } from '../../service'



describe('BugetGoalsComponent', () => {
  let component: BugetGoalsComponent;
  let fixture: ComponentFixture<BugetGoalsComponent>;


  // function addNewBudget(newBudget, myFunction) {

  //   console.log("btn clicked")


  //   myFunction(newBudget);


  // }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BugetGoalsComponent, //ReportsComponent, TransactionPageHistoryComponent, SettingsComponent, TransactionPageAddComponent, AboutComponent
      ],
      imports: [
        MatTableModule,
        MatPaginatorModule,
        MatInputModule,
        MatSelectModule,
        RouterTestingModule,
        HttpClientTestingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FormsModule,
        MatCardModule,
        HttpClientModule,
        //AppRoutingModule
      ],
      providers: [NgModule, Injectable, BudgetService]
    })
      .compileComponents();
  }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(BugetGoalsComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  // describe('Can edit budget', function () {
  //   beforeEach(function (done) {
  //     fixture = TestBed.createComponent(BugetGoalsComponent);
  //     component = fixture.componentInstance;
  //     fixture.detectChanges();

  //     component.updateBudget._id = component.updateBudget._id
  //     component.updateBudget.Name = "TestEdit";
  //     component.editBudget();
  //     console.log('edited budget with id ' + component.updateBudget._id)
  //     setTimeout(() => { done(); }, 2000);

  //   })
  // });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
  describe('Can Add Record', function () {
    beforeEach(function (done) {
      fixture = TestBed.createComponent(BugetGoalsComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
      // since I am nesting beforeEach statements, next 3 lines only show in first
      let newBudget = new Budgets;
      //newBudget.BudgetID = 999999 //temporary
      console.log("Here is the newBudget object:", newBudget);
      newBudget.BudgetID = component.getLastBudgetID();
      //console.log("The new budget ID is", newBudget.BudgetID);
      //newBudget: Budgets = new Budgets();
      //newBudget._id = "5ddcac37b948963410ebbc53";
      newBudget.BudgetID = 2;
      newBudget.Name = "cheetos";
      newBudget.GoalCategory = 1;
      newBudget.GoalAmount = 10000;
      newBudget.Description = "earn cheetos";
      //newBudget = { "BudgetID": 2, "Name": "popcorn", "GoalCategory": 45, "GoalAmount": 10000, "Description": "Earn popcorn" }

      console.log("Here is the newBudget object:", newBudget);
      // console.log(newBudget);
      component.makeCall(newBudget);


      console.log("im alive");

      setTimeout(() => { done(); }, 2000);
    });
    fit('should find new new record', function () {

      expect(component).toBeTruthy();
    });

  });

});
