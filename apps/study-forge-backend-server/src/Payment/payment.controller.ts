import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { PaymentService } from "./payment.service";
import { PaymentDto } from "../payment/PaymentDto";

@swagger.ApiTags("payments")
@common.Controller("payments")
export class PaymentController {
  constructor(protected readonly service: PaymentService) {}

  @common.Post("/process-payment")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ProcessPayment(
    @common.Body()
    body: PaymentDto
  ): Promise<string> {
        return this.service.ProcessPayment(body);
      }
}
