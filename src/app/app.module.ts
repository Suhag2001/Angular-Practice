import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ UserAuthModule } from './user-auth/user-auth.module'

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import {FormsModule} from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertComponent } from './alert/alert.component'
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AlertComponent  ],
  imports: [
    BrowserModule,
    UserAuthModule,
    FormsModule,
    NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
