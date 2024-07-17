import * as graphql from "@nestjs/graphql";
import { PaymentDto } from "../payment/PaymentDto";
import { PaymentService } from "./payment.service";

export class PaymentResolver {
  constructor(protected readonly service: PaymentService) {}

  @graphql.Mutation(() => String)
  async ProcessPayment(
    @graphql.Args()
    args: PaymentDto
  ): Promise<string> {
    return this.service.ProcessPayment(args);
  }
}
