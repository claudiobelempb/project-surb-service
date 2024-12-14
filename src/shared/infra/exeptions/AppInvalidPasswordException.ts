export class AppInvalidPasswordException extends Error {
  constructor(public message: string) {
    super(message);
    this.name = 'InvalidPasswordExeption';
  }
}
