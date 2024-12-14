export class AppInvalidCredentialsException extends Error {
  constructor(public message: string) {
    super(message);
    this.name = 'InvalidCredentialsExeption';
  }
}
