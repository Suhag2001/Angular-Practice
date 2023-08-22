import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ UserAuthModule } from './user-auth/user-auth.module'

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent  ],
  imports: [
    BrowserModule,
    UserAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
