export class ErrorResponseModel {

  message: string;
  errors: Record<string, string>;

  constructor(data?: ErrorResponseModel) {
    if (data) {
      this.message = data.message;
      this.errors = data.errors;
    }
  }

  get errorMessage(): string {
    const validationErrorsMessages = Object.keys(this.errors || {}).map(entityKey => this.errors[ entityKey ]);
    return [ this.message, ...validationErrorsMessages ]
      .filter(message => message)
      .join('\n');
  }
}
