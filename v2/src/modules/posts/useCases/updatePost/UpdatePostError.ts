import { ErrorHandler } from '@errors/ErrorHandler';

export namespace UpdatePostError {
  export class PostNotFoundError extends ErrorHandler {
    constructor() {
      super('Post not found');
    }
  }
}
