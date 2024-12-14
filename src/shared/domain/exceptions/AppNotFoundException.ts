export class AppNotFoundException extends Error {
  constructor(public message: string) {
    super(message);
    this.name = 'AppNotFoundException';
  }
}
