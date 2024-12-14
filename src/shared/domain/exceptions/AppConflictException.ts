export class AppConflictException extends Error {
  constructor(public message: string) {
    super(message);
    this.name = 'AppConflictException';
  }
}
