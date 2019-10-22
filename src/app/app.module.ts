import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/*import { MatDividerModule } from '@angular/material/divider'; */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SettingsComponent } from './settings/settings.component';
import { HeaderComponent } from './header/header.component';
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
import { HomeComponent } from './home/home.component';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HomeChartComponent } from './home-chart/home-chart.component';
import { HomeRecentTransactionsComponent } from './home-recent-transactions/home-recent-transactions.component';
import { TransactionPageAddComponent } from './transactionpage-add/transactionpage-add.component';
import { TransactionPageHistoryComponent } from './transactionpage-history/transactionpage-history.component';
import { TransactionPageComponent } from './transactionpage/transactionpage.component';

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    HeaderComponent,
    HomeComponent,
    ReportsComponent,
    AboutComponent,
    PremiumPlanComponent,
    UserProfileComponent,
    BudgetComponent,
    BankAccountsComponent,
    RecTransactionsComponent,
    BugetGoalsComponent
    HomeHeaderComponent,
    HomeChartComponent,
    HomeRecentTransactionsComponent,
    TransactionPageAddComponent,
    TransactionPageHistoryComponent,
    TransactionPageComponent
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
    /*MatDividerModule*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
