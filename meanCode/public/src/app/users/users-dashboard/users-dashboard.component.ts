import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
//import router that allows redirecting

import { User } from "./../user"
//our user rules
import { UserService } from "./../user.service"
//what we used for login (our library)

@Component({
  selector: 'app-users-dashboard',
  templateUrl: './users-dashboard.component.html',
  styleUrls: ['./users-dashboard.component.css']
})
export class UsersDashboardComponent implements OnInit {
  user_list: Array<User>
  //list of all users that we want to populate
  current_user: User
  //the user who just logged in

  constructor(
      private _userService: UserService,
      private router: Router
  ) { }
  //must include these

  ngOnInit() {
    this._userService.get_all_users()
      .then(data => this.user_list = data)
      .catch(err => console.log(err))

    this._userService.get_logged_in_user()
      .then(data => {
        if(data){
          this.current_user = data
        } else {
          this.router.navigate(["/login"])
        }
      })
      .catch(err => console.log(err))

  }

}
