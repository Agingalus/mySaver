import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { AddTransactionComponent } from './add-transaction/add-transaction.component';
import { HomeComponent } from './home/home.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { ReportsComponent } from './reports/reports.component';


const routes: Routes = [
  {
    path: "reports",
    component: ReportsComponent
  },
  {
    path: "transactionHistory",
    component: TransactionHistoryComponent
  },
  {
    path: "settings",
    component: SettingsComponent
  },
  {
    path: "addTransaction",
    component: AddTransactionComponent
  }, {
    path: "",
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
