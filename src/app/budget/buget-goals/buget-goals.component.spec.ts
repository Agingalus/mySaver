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
import { Budgets } from 'src/app/budgets';



describe('BugetGoalsComponent', () => {
  let component: BugetGoalsComponent;
  let fixture: ComponentFixture<BugetGoalsComponent>;

  // function addNewBudget(newBudget, myFunction) {

  //   console.log("btn clicked")


  //   myFunction(newBudget);


  // }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BugetGoalsComponent],
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
      let newBudget: Budgets = { "_id": "5ddcac37b948963410ebbc53", "BudgetID": 2, "Name": "popcorn", "GoalCategory": 45, "GoalAmount": 10000, "Description": "Earn popcorn" }

      // console.log(newBudget);
      component.makeCall(newBudget);


      console.log("im alive");

      setTimeout(() => { done(); }, 2000);
    });
    it('should find new new record', function () {

      expect(component).toBeTruthy();
    });

  });

});
