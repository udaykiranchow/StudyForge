import { Injectable } from "@nestjs/common";
import { PaymentDto } from "../payment/PaymentDto";

@Injectable()
export class PaymentService {
  constructor() {}
  async ProcessPayment(args: PaymentDto): Promise<string> {
    throw new Error("Not implemented");
  }
}
