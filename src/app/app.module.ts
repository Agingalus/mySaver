import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SettingsComponent } from './settings/settings.component';
import { HeaderComponent } from './header/header.component';
import { ReportsComponent } from './reports/reports.component';
import { AboutComponent } from './about/about.component';
import { PremiumPlanComponent } from './premium-plan/premium-plan.component';
import { BudgetComponent } from './budget/budget.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { BankAccountsComponent } from './budget/bank-accounts/bank-accounts.component';
import { RecTransactionsComponent } from './budget/rec-transactions/rec-transactions.component';
import { BugetGoalsComponent } from './budget/buget-goals/buget-goals.component';
import { HomeComponent } from './home/home.component';
import { HomeHeaderComponent } from './home/home-header/home-header.component';
import { HomeChartComponent } from './home/home-chart/home-chart.component';
import { HomeRecentTransactionsComponent } from './home/home-recent-transactions/home-recent-transactions.component';
import { TransactionPageAddComponent } from './transactionpage/transactionpage-add/transactionpage-add.component';
import { TransactionPageHistoryComponent } from './transactionpage/transactionpage-history/transactionpage-history.component';
import { TransactionPageComponent } from './transactionpage/transactionpage.component';
import { transactionPageButtonsComponent } from './transactionpage/transactionpage-buttons/transactionpage-buttons.component';
import { SettingsCardComponent } from './settings/settings-card/settings-card.component';
import { ProfileCardComponent } from './settings/profile-card/profile-card.component';
import { ReportMainComponent } from './reports/report-main/report-main.component';
import { AboutMainComponent } from './about/about-main/about-main.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';

//pie
// Import angular-fusioncharts


import { FusionChartsModule } from "angular-fusioncharts";

// Import FusionCharts library and chart modules
import * as FusionCharts from "fusioncharts";
import * as Charts from "fusioncharts/fusioncharts.charts";

import * as FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import { BudgetMeterComponent } from './reports/report-main/budget-meter/budget-meter.component';

// Pass the fusioncharts library and chart modules
FusionChartsModule.fcRoot(FusionCharts, Charts, FusionTheme);

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    HeaderComponent,
    HomeComponent,
    ReportsComponent,
    AboutComponent,
    PremiumPlanComponent,
    BudgetComponent,
    BankAccountsComponent,
    RecTransactionsComponent,
    BugetGoalsComponent,
    HomeHeaderComponent,
    HomeChartComponent,
    HomeRecentTransactionsComponent,
    TransactionPageAddComponent,
    TransactionPageHistoryComponent,
    TransactionPageComponent,
    transactionPageButtonsComponent,
    SettingsCardComponent,
    ProfileCardComponent,
    ReportMainComponent,
    AboutMainComponent,
    BudgetMeterComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    FusionChartsModule,
    MatFormFieldModule,
    HttpClientModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
