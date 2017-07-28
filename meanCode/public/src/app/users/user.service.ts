//service is a middleman (almost like our own library)
//transfers the information from client side to server side||both ways
//then go to app module and ADD it
import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

import { User } from './user'

import "rxjs"

@Injectable()
export class UserService {

  constructor(private _http: Http) { }

  login(user: User){
    return this._http.post("/login", user)
            .map(data => data.json())
            .toPromise()
  }

  get_all_users(){
    return this._http.get("/all_users")
            .map(data => data.json())
            .toPromise()
  }

  get_logged_in_user(){
    return this._http.get("/get_logged_in_user")
            .map(data => data.json())
            .toPromise()
  }


}
