import { ErrorHandler } from '@errors/ErrorHandler';

export namespace CreatePostError {
  export class UserNotFoundError extends ErrorHandler {
    constructor() {
      super('User not found');
    }
  }
}
