import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
//lets us redirect to other angular routes

import { User } from "./../user"
import { UserService } from "./../user.service"

@Component({
  selector: 'app-users-login',
  templateUrl: './users-login.component.html',
  styleUrls: ['./users-login.component.css']
})
export class UsersLoginComponent implements OnInit {
  new_user = new User //the user object (ex) {name: michael, _id: 1324, createdAt:}

  constructor(private _userService: UserService, private router: Router) { }
  //imports our library (UserService) with its methods (login, get_all_users, and get_logged_in_users)

  ngOnInit() {
  }

  login(){
    console.log(this.new_user)
    this._userService.login(this.new_user)
    //when a user logs in we will console.logs//if successful we will navigate to dashboard (replacing the component)
      .then(() => {
        this.router.navigate(["/dashboard"])//navigate is a function that in an array
      })
      .catch(err => console.log(err))

    this.new_user = new User
  }

}
