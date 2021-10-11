import { Injectable } from '@nestjs/common';

import AppLog from 'logger/logger.service';

@Injectable()
export default class UserService {
  constructor(private readonly log: AppLog) {
    this.log.setContext(UserService.name);
  }

  /**
   * Login user skypostal-api
   * @param {username} username
   * @param {password} password
   */
  async userStardeosSignup(body: object) {
    console.log(body);
  }
}
