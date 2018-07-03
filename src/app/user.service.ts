import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import {User} from './models/user';

@Injectable()
export class UserService {

  constructor(public api: ApiService) { }

  findByDocument(document: string) {
    return this.api.get('user/'+document);
  }

  add(user: User) {
    return this.api.post('user', user);
  }

  updateById(user: User) {
    return this.api.put('user/'+user.id, user)
  }

}
