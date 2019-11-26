import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatSelectModule } from '@angular/material/select';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BugetGoalsComponent } from './buget-goals.component';
import { MatCard, MatCardModule } from '@angular/material/card';

describe('BugetGoalsComponent', () => {
  let component: BugetGoalsComponent;
  let fixture: ComponentFixture<BugetGoalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BugetGoalsComponent ],
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
          MatCardModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BugetGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component in Angular', () => {
    expect(component).toBeTruthy();
  });


});

describe('Can create a budget goal in Mongo', function(){
  let component: BugetGoalsComponent;
  let fixture: ComponentFixture<BugetGoalsComponent>;

//create a test budget goal
  let createBudgetGoal =3;
//insert it into Mongo


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BugetGoalsComponent ],
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
          MatCardModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BugetGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(function(done) {
    fixture = TestBed.createComponent(BugetGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.updateBudget._id = component.updateBudget._id
    component.updateBudget.Name = "TestEdit";
    component.editBudget();
    console.log('edited budget with id '+ component.updateBudget._id)
    setTimeout(() => {done();}, 2000);

  })

  //verify that the test budget goal was made
  it('can create a budget in Mongo', () => {
    expect(createBudgetGoal).toBe(4);
  });
});

describe('Can edit budget', function(){
  let component: BugetGoalsComponent;
  let fixture: ComponentFixture<BugetGoalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BugetGoalsComponent ],
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
          MatCardModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BugetGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  //find an existing budget goal

  //then edit that existing budget goal
  let testBudgetGoal = 1;

  beforeEach(function(done) {
    fixture = TestBed.createComponent(BugetGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.updateBudget._id = component.updateBudget._id
    component.updateBudget.Name = "TestEdit";
    component.editBudget();
    console.log('edited budget with id '+ component.updateBudget._id)
    setTimeout(() => {done();}, 2000);

  })

  //verify that the edit was made
  it('can edit an existing budget', () => {
    expect(testBudgetGoal).toBe(2);
  });
});

//create a test budget goal
//verify that the test budget goal exists
//delete the test budget goal
//verify that the test budget goal doesn't exist



/*
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ShowTasksComponent } from './show-tasks.component';

import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { TaskService } from '../task.service';
import { HttpClientModule }    from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { ToDoComponent } from '../to-do/to-do.component';
import { NgModule } from '@angular/core';
import { GrouchComponent } from '../grouch/grouch.component';
import { GrouchoComponent } from '../groucho/groucho.component';
import { TableToMongoComponent } from '../table-to-mongo/table-to-mongo.component';
import { HomeDisplayComponent } from '../home-display/home-display.component';
import { LeftSideComponent}      from '../left-side/left-side.component';
import { RightSideComponent }      from '../right-side/right-side.component';
import { MatTableModule } from '@angular/material' 
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from  '@angular/material';
import { MatCardModule,  MatFormFieldModule, MatInputModule } from '@angular/material';


describe('ShowTasksComponent', () => { 
  let component: ShowTasksComponent;
  let fixture: ComponentFixture<ShowTasksComponent>;

 
  beforeEach(async(() => {   
  
    TestBed.configureTestingModule({ 
      declarations: [RightSideComponent, LeftSideComponent, GrouchoComponent, TableToMongoComponent, 
          HomeDisplayComponent, GrouchComponent, ToDoComponent, ShowTasksComponent ],
      imports: [ FormsModule, MatToolbarModule, MatSidenavModule, MatListModule, MatButtonModule,
          MatIconModule, MatTableModule, MatCardModule, MatFormFieldModule, MatInputModule, 
          HttpClientModule, AppRoutingModule],
      providers: [Injectable, TaskService, NgModule ], 
      }) 
    .compileComponents();
    }));
   
    // there are more correct ways of dealing with async testing, but, I don't want to 
    // overly complicate this. Instead I am taking advantage ot the setTimeout feature
    // of a before each statement, and nesting them to have a
    // write
    // wait
    // read
    // wait
    // delete
    // wait
    // test if deleted
    // to pass the document _id between each step, I am storing/reading it from my
    // actual component, because I can't see a simple way of either storing that state
    // here in the test code, or of passing it from one test to the next
        describe('Can Add Record', function(){ 
            beforeEach(function(done){
                // since I am nesting beforeEach statements, next 3 lines only show in first
                fixture = TestBed.createComponent(ShowTasksComponent);
                component = fixture.componentInstance;
                fixture.detectChanges();
            
                component.newTask.taskName = "TestCreate";
                component.addRecord();

                component.saved_id = component.newTask._id;
                console.log('just added record with this _id ' + component.saved_id )
                setTimeout(() => {done();}, 2000); // worked at 500, failed at 50
                });
    
                describe('Can find added Record', function(){  
                    beforeEach(function(done){
                        // fixture = TestBed.createComponent(ShowTasksComponent);
                        // component = fixture.componentInstance;
                        // fixture.detectChanges();
                        
                        component.foundTask._id = component.saved_id;
                        console.log('just before call to find ' + component.saved_id );
                        component.findTask();
                        setTimeout(() => {done();}, 2000); 
                    });
                
                    it('should find new new record', function(){
                    console.log('just before did it find new ' +  component.foundTask.taskName );
                        expect( component.foundTask.taskName ).toBe('TestCreate');
                    });
                }); 
            }); 


            describe('Can delete Record', function(){  
                beforeEach(function(done){
                    component.selectedTask._id = component.saved_id;
                    component.selectedTask.taskName = "TestCreate";
                    console.log("task about to delete " + component.selectedTask._id )
                    component.deleteTask();
                    setTimeout(() => {done();}, 2000); 
                    });
    
            describe('added Record should be gone', function(){  
                beforeEach(function(done){
                    component.foundTask._id = component.saved_id;
                    console.log('just before call to find ' + component.foundTask._id );
                    component.findTask();
                    setTimeout(() => {done();}, 2000); 
                });
            
                it('should not find deleted record', function(){
                    expect( component.foundTask).toBe(null);
                });
            });  

        }); 


        
        describe('is component created', function(){  
            beforeEach(() => {
                // since this is an independent test, I do include these 3 lines
                fixture = TestBed.createComponent(ShowTasksComponent);
                component = fixture.componentInstance;
                fixture.detectChanges();
            });

            it('should create', () => {
                expect(component).toBeTruthy();
            });
        });  

});  

*/