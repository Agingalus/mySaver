import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { BudgetComponent } from './budget.component';
import { BankAccountsComponent } from '../budget/bank-accounts/bank-accounts.component';
import { RecTransactionsComponent } from '../budget/rec-transactions/rec-transactions.component';
import { BugetGoalsComponent } from '../budget/buget-goals/buget-goals.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatSelectModule } from '@angular/material/select';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BudgetService } from '../service'
import { NgModule } from '@angular/core';
import { Budgets } from '../budgets';
import "hammerjs";

describe('BudgetComponent', () => {
  let component: BudgetComponent;
  let fixture: ComponentFixture<BudgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BudgetComponent,
        BankAccountsComponent,
        RecTransactionsComponent,
        BugetGoalsComponent
      ],
      imports: [
        MatCardModule,
        MatTableModule,
        MatPaginatorModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        MatSelectModule,
        RouterTestingModule,
        HttpClientTestingModule,
        BrowserAnimationsModule,


      ],
      providers: [NgModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // describe('Can Add Record', function () {
  //   beforeEach(function (done) {
  //     // since I am nesting beforeEach statements, next 3 lines only show in first
  //     let newBudget: Budgets = { "_id": "5ddcac37b948963410ebbc53", "BudgetID": 2, "Name": "popcorn", "GoalCategory": 45, "GoalAmount": 10000, "Description": "Earn popcorn" }


  //     // fixture = TestBed.createComponent(BudgetComponent);
  //     // component = fixture.componentInstance;
  //     // fixture.detectChanges();
  //     //let myBudgetService: BudgetService;
  //     // myBudgetService.addBudget(newBudget).subscribe();
  //     // component.newTask.taskName = "TestCreate";
  //     component.addNewBudgetForTest();


  //     // component.saved_id = component.newTask._id;
  //     console.log("im alive");
  //     // console.log('just added record with this _id ' + component.saved_id)
  //     setTimeout(() => { done(); }, 2000); // worked at 500, failed at 50
  //   });
  //   describe('Can find added Record', function () {
  //     beforeEach(function (done) {
  //       fixture = TestBed.createComponent(BudgetComponent);
  //       component = fixture.componentInstance;
  //       fixture.detectChanges();

  //       //component.foundTask._id = "5db7a6c01c9d44000040f2c3";
  //       //console.log('just before call to find ' + "5db7a6c01c9d44000040f2c3");
  //       //component.findTask();
  //       setTimeout(() => { done(); }, 2000);
  //     });

  //     it('should find new new record', function () {
  //       //console.log('just before did it find new ' + component.foundTask.taskName);
  //       expect(component).toBeTruthy();
  //     });
  //   });
  // });
});
