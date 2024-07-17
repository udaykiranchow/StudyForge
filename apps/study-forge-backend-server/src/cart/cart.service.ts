import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CartServiceBase } from "./base/cart.service.base";

@Injectable()
export class CartService extends CartServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
