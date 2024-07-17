import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { EmailNotificationService } from "./emailnotification.service";
import { EmailNotificationDto } from "../emailNotification/EmailNotificationDto";

@swagger.ApiTags("emailNotifications")
@common.Controller("emailNotifications")
export class EmailNotificationController {
  constructor(protected readonly service: EmailNotificationService) {}

  @common.Post("/send-email")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async SendEmail(
    @common.Body()
    body: EmailNotificationDto
  ): Promise<string> {
        return this.service.SendEmail(body);
      }
}
