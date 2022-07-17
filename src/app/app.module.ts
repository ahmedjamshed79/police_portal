import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PoliceRegisterComponent } from './police-register/police-register.component';
import { PoliceRecordComponent } from './police-record/police-record.component';
import { PublicRecordComponent } from './public-record/public-record.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PoliceRegisterComponent,
    PoliceRecordComponent,
    PublicRecordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
