import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SettingsComponent } from './settings/settings.component';
import { AddTransactionComponent } from './add-transaction/add-transaction.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { ReportsComponent } from './reports/reports.component';
import { AboutComponent } from './about/about.component';
import { PremiumPlanComponent } from './premium-plan/premium-plan.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { BudgetComponent } from './budget/budget.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { BankAccountsComponent } from './budget/bank-accounts/bank-accounts.component';
import { RecTransactionsComponent } from './budget/rec-transactions/rec-transactions.component';
import { BugetGoalsComponent } from './budget/buget-goals/buget-goals.component';

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    AddTransactionComponent,
    HeaderComponent,
    HomeComponent,
    TransactionHistoryComponent,
    ReportsComponent,
    AboutComponent,
    PremiumPlanComponent,
    UserProfileComponent,
    BudgetComponent,
    BankAccountsComponent,
    RecTransactionsComponent,
    BugetGoalsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
