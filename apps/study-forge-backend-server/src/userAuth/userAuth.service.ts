import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserAuthServiceBase } from "./base/userAuth.service.base";

@Injectable()
export class UserAuthService extends UserAuthServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
