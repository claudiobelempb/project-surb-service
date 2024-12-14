export class StandarError {
  readonly timestamp: Date;
  readonly status: number;
  readonly error: string;
  readonly message: string;
  readonly path: string;

  constructor(
    timestamp: Date,
    status: number,
    error: string,
    message: string,
    path: string,
  ) {
    this.timestamp = timestamp;
    this.status = status;
    this.error = error;
    this.message = message;
    this.path = path;
  }
}
