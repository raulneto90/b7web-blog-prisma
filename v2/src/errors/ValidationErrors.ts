interface IErrorItem {
  field: string;
  errors: string[];
}

export class ValidationErrors {
  readonly statusCode: number;
  readonly message: string;
  readonly errors: IErrorItem[];

  constructor(message: string, errors: IErrorItem[], statusCode = 400) {
    this.statusCode = statusCode;
    this.message = message;
    this.errors = errors;
  }
}
