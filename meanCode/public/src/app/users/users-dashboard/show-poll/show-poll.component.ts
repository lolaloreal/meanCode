import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Poll } from './../poll';
import { PollService } from './../poll.service';
import { User } from './../../user';
import { UserService } from './../../user.service';

@Component({
  selector: 'app-show-poll',
  templateUrl: './show-poll.component.html',
  styleUrls: ['./show-poll.component.css']
})
export class ShowPollComponent implements OnInit {
    poll_list: Array<Poll>
    current_user: User
    // userId: String

  constructor(
      private _pollService: PollService,
      private _router: Router,
      private _userService: UserService
  ) { }

  ngOnInit() {
      this._pollService.get_all_polls()
      .then(data => this.poll_list = data)
      .catch(err => console.log(err))

      this._userService.get_logged_in_user()
      .then(data => {
        if (data) {
        this.current_user = data
      } else {
        this._router.navigate(["/login"])
      }
    })
    .catch(err => {console.log(err)})
    }

    getPolls() {
      this._pollService.get_all_polls()
      .then((data)=> {
        this.poll_list = data
      })
      .catch((err) => {console.log(err)})
    }

    delete(poll){
      this._pollService.destroy_poll(poll)
      .then(()=> {this.getPolls()})
      .catch((err) => {console.log("the error is: ", err)})
    }
  }
