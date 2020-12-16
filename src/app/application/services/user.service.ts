import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { GenericCrud } from './genericCrud';
import { account } from '../models/user'


@Injectable({
  providedIn: 'root'
})
export class UserService extends GenericCrud<account, number> {

  constructor(http: HttpClient) {
    super(http, "http://localhost:3500/tp");
   }
}
