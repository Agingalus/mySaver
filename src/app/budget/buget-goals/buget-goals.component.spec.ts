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
import { NgModule, Injectable, inject } from '@angular/core';
import { HttpHandler, HttpClientModule } from '@angular/common/http';
//import { AppRoutingModule } from 'src/app/app-routing.module';
import { BudgetService } from '../../service'
///////////
import { HttpModule } from '@angular/http';
import { Observable, of } from 'rxjs'
import 'rxjs/add/observable/of';
import { HttpRequest, HttpResponse, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';


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
        newBudget.BudgetID = 999999 //temporary
        console.log("Here is the newBudget object:", newBudget);
        //newBudget.BudgetID = component.getLastBudgetID();
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
        
        //This wasn't working
          //component.makeCall(newBudget);

        ////////////////////////
        //New code with mock. Based on https://stackoverflow.com/questions/46420640/angular-4-unit-testing-with-jasmine-karma-with-http-post-mocking-how-to-fix
        //describe('TrackerFormService', () => {
        // Mock the service like this and add all the functions you have in this fashion
        let testBudgetService: BudgetService,


        mockService = {
          addSession: jasmine.createSpy('addSession').and.returnValue.of('your session object mock goes here')
        };

        beforeEach(() => {
          TestBed.configureTestingModule({
            imports: [HttpModule],
            providers: [{
              provide: BudgetService,
              useValue: mockService
            }]
          });
        });

        // Do this trick to inject the service every time, and just use `service` in your tests
        beforeEach(inject([BudgetService], (testBudgetService) => {
          service = testBudgetService;
        }));

        describe('addSession', () => {
          it('add session ', () => {
            let fakeResponse = null;

            // Call the service function and subscribe to it to catch the fake response coming from the mock.
            service.addSession().subscribe((value) => {
              // in here value will be whatever you put as returnValue (remember to keep the observable.of())
              fakeResponse = value;
            });

            // expects as in any test.
            expect(fakeResponse).toBeDefined();
            expect(fakeResponse).toBe('your session object mock goes here');
          });
        ////////////////////////



        console.log("im alive");

        setTimeout(() => { done(); }, 2000);
      });
      fit('should find new new record', function () {

        expect(component).toBeTruthy();
      });

    });
  });

});
