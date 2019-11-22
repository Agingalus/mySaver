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
          BrowserAnimationsModule
      
      ]
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
});
