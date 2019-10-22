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
    /*MatDividerModule*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
