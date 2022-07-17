import { PublicRecordComponent } from './public-record/public-record.component';
import { PoliceRegisterComponent } from './police-register/police-register.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PoliceRecordComponent } from './police-record/police-record.component';

const routes: Routes = [
  {
    path:"",
    component: NavBarComponent
  },
  {
    path:"police-register",
    component: PoliceRegisterComponent,
  },
  {
    path:"police-record",
    component: PoliceRecordComponent,
  },
  {
    path:"public-record",
    component: PublicRecordComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
