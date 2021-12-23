import { ErrorHandler } from '@errors/ErrorHandler';

export namespace AuthenticateUserError {
  export class UserOrPasswordIncorrectError extends ErrorHandler {
    constructor() {
      super('User or password incorrect', 401);
    }
  }
}
