import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Poll } from './../poll';
import { PollService } from './../poll.service';
import { User } from './../../user';
import { UserService } from './../../user.service';

@Component({
  selector: 'app-create-poll',
  templateUrl: './create-poll.component.html',
  styleUrls: ['./create-poll.component.css']
})
export class CreatePollComponent implements OnInit {
    new_poll = new Poll();
    current_user = new User;

  constructor(
    private _pollService: PollService,
    private _router: Router,
    private _userService: UserService
  ) { }

  ngOnInit() {
        this.new_poll = new Poll();
        this._userService.get_logged_in_user()
        .then(data => {
          if (data) {
            this.current_user = data
          } else {
            this._router.navigate(['/login'])
          }
        })
        .catch(err => {console.log(err)})
  }

  addQuestion() {
      this.new_poll.options.push(this.new_poll.option1)
      this.new_poll.options.push(this.new_poll.option2)
      this.new_poll.options.push(this.new_poll.option3)
      this.new_poll.options.push(this.new_poll.option4)
      this._pollService.add_question(this.new_poll)
      .then(() => {
        console.log(`Are you working ${this.new_poll}`)
        this._router.navigate(['/dashboard'])
      })
      .catch((err) => console.log(err))
}

}
