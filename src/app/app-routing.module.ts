import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { AddTransactionComponent } from './add-transaction/add-transaction.component';


const routes: Routes = [
  {
    path: "settings",
    component: SettingsComponent
  },
  {
    path: "appTransaction",
    component: AddTransactionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
