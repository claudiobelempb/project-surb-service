export class AppBadRequestException extends Error {
  constructor(public message: string) {
    super(message)
    this.name = 'BadRequestException'
  }
}
