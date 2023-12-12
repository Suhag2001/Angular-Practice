import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ UserAuthModule } from './user-auth/user-auth.module'
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import {FormsModule} from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertComponent } from './alert/alert.component'
import {MatBadgeModule} from '@angular/material/badge';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { UsdInrPipe } from './pipes/usd-inr.pipe';
import { UserComponent } from './user/user.component';
import{ReactiveFormsModule} from '@angular/forms';
import { RedClgDirective } from './directive/red-clg.directive';
import { ChildComponent } from './child/child.component';
import { Child2Component } from './child2/child2.component';
import { Child3Component } from './child3/child3.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentModule } from './student/student.module';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ChildComponent,
    Child2Component,
      Child3Component,
    AlertComponent,
   UserComponent,
    UsdInrPipe,
    RedClgDirective,
    FooterComponent,
      ],
  imports: [
    BrowserModule,
    UserAuthModule,
    FormsModule,
    NgbModule,
    MatBadgeModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    HttpClientModule,
    StudentModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
