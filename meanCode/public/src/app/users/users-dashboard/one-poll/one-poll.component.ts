import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Poll } from './../poll';
import { PollService } from './../poll.service';
import { User } from './../../user';
import { UserService } from './../../user.service';

@Component({
  selector: 'app-one-poll',
  templateUrl: './one-poll.component.html',
  styleUrls: ['./one-poll.component.css']
})
export class OnePollComponent implements OnInit {
    poll = new Poll;
    current_user: User
    poll_list: Array<Poll>

  constructor(
    private _route: ActivatedRoute,
    private _pollService: PollService,
    private _userService: UserService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.getPolls()

    this._route.params.subscribe(
      param => {
        console.log('request one poll')
        console.log(param.id)
        this._pollService.get_one(param.id)
        .then((data) => {
          this.poll = data
        })
        .catch((err) => {console.log(err)})

      }
    )
  }

  getPolls() {
    this._pollService.get_all_polls()
    .then((data) => {
      this.poll_list = data
    })
    .catch((err) => {console.log(err)})
  }

}
