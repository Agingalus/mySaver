import { NgModule, Component } from '@angular/core'; // <---------------- Do we need Component? 
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { TransactionPageAddComponent } from './transactionpage/transactionpage-add/transactionpage-add.component';
import { HomeComponent } from './home/home.component';
import { TransactionPageHistoryComponent } from './transactionpage/transactionpage-history/transactionpage-history.component';
import { ReportsComponent } from './reports/reports.component';
import { AboutComponent } from './about/about.component';
import { PremiumPlanComponent } from './premium-plan/premium-plan.component';
import { BudgetComponent } from './budget/budget.component';
import { TransactionPageComponent } from './transactionpage/transactionpage.component';


const routes: Routes = [
  {
    path: "reports",
    component: ReportsComponent
  },
  {
    path: "transactionHistory",
    component: TransactionPageHistoryComponent
  },
  {
    path: "settings",
    component: SettingsComponent
  },
  {
    path: "transactionAdd",
    component: TransactionPageAddComponent
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
    path: "transactionPage",
    component: TransactionPageComponent
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
