//everything created must be imported

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module'
//allows us to use app-routing.modules.ts

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
//add the parent directory if components are created side by side

import { UsersLoginComponent } from './users/users-login/users-login.component';
import { UsersDashboardComponent } from './users/users-dashboard/users-dashboard.component';
import { ShowPollComponent } from './users/users-dashboard/show-poll/show-poll.component';
import { CreatePollComponent } from './users/users-dashboard/create-poll/create-poll.component';
import { OnePollComponent } from './users/users-dashboard/one-poll/one-poll.component'

import { UserService } from './users/user.service';
import { PollService } from './users/users-dashboard/poll.service';
import { FilterPipe } from './users/users-dashboard/filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UsersLoginComponent,
    UsersDashboardComponent,
    ShowPollComponent,
    CreatePollComponent,
    FilterPipe,
    OnePollComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [UserService, PollService], //must be an array || add service(s)
  bootstrap: [AppComponent]
})
export class AppModule { }
