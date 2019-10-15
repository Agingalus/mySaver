import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { AddTransactionComponent } from './add-transaction/add-transaction.component';
import { HomeComponent } from './home/home.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { ReportsComponent } from './reports/reports.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AboutComponent } from './about/about.component';
import { PremiumPlanComponent } from './premium-plan/premium-plan.component';
import { BudgetComponent } from './budget/budget.component';


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
  }, 
  {
    path: "userProfile",
    component: UserProfileComponent
  }, 
  {
    path: "aboutPage",
    component: AboutComponent
  }, 
  {
    path: "premiumPlan",
    component: PremiumPlanComponent
  }, 
  {
    path: "budgetPage",
    component: BudgetComponent
  }, 
  {
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
