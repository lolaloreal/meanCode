//declaring paths (routes) in this is only for loading components

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersLoginComponent } from "./users/users-login/users-login.component"
import { UsersDashboardComponent } from "./users/users-dashboard/users-dashboard.component"

import { ShowPollComponent } from "./users/users-dashboard/show-poll/show-poll.component"
import { CreatePollComponent } from "./users/users-dashboard/create-poll/create-poll.component"
import { OnePollComponent } from "./users/users-dashboard/one-poll/one-poll.component"

const routes: Routes = [
  { path: "login", component: UsersLoginComponent },
  { path: "dashboard", component: UsersDashboardComponent },
  { path: "users_polls", component: ShowPollComponent },
  { path: "create_poll", component: CreatePollComponent },
  { path: "getOne", component: OnePollComponent },
  // { path: "**", component: OnePollComponent },
  // I added this so the one component would show but i think it is a bad choice
  { path: "", pathMatch: "full", redirectTo: "/login"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
