import { ErrorHandler } from '@errors/ErrorHandler';

export namespace DeletePostError {
  export class PostNotFoundError extends ErrorHandler {
    constructor() {
      super('Post not found');
    }
  }
}
