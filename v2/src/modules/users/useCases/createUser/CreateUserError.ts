import { ErrorHandler } from '@errors/ErrorHandler';

export namespace CreateUserError {
  export class UserAlreadyExistsError extends ErrorHandler {
    constructor() {
      super('User already exists', 400);
    }
  }
}
