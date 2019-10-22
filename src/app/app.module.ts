import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/*import { MatDividerModule } from '@angular/material/divider'; */
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
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HomeChartComponent } from './home-chart/home-chart.component';
import { HomeRecentTransactionsComponent } from './home-recent-transactions/home-recent-transactions.component';

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
    HomeHeaderComponent,
    HomeChartComponent,
    HomeRecentTransactionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    /*MatDividerModule*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
