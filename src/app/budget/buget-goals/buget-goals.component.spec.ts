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

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(BugetGoalsComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  describe('Can edit budget', function(){
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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
