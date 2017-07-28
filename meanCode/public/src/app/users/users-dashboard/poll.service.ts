import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';
import { Poll } from './poll';

@Injectable()
export class PollService {

  constructor(
      private _http: Http
  ) { }

  add_question(question){
    return this._http.post('/add_question', question)
    .map(data => data.json())
    .toPromise();
  }

  get_all_polls(){
      return this._http.get('/polls')
      .map(data => data.json())
      .toPromise()
  }

  destroy_poll(poll) {
      return this._http.post('/polls/destroy', poll)
      .map(data => data.json())
      .toPromise()
  }

  get_one(poll_id) {
      console.log("poll_id from service", poll_id)
      return this._http.post('/polls/id', {poll_id: poll_id})
      .map(data => data.json())
      .toPromise()
  }

}
