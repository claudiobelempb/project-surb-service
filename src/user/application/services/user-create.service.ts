import { PrismaService } from '@/shared/infra/database/prisma/prima.service'
import { Injectable } from '@nestjs/common'

@Injectable()
export class UserCreateService {
  constructor(private readonly prisma: PrismaService) {}
  async execute(data: any) {
    this.prisma.user.create({
      data,
    })
  }
}
