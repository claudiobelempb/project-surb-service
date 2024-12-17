export class AppUnauthorizedException extends Error {
  constructor(public message: string) {
    super(message)
    this.name = 'AppUnauthorizedException'
  }
}
