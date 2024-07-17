import * as graphql from "@nestjs/graphql";
import { EmailNotificationDto } from "../emailNotification/EmailNotificationDto";
import { EmailNotificationService } from "./emailnotification.service";

export class EmailNotificationResolver {
  constructor(protected readonly service: EmailNotificationService) {}

  @graphql.Mutation(() => String)
  async SendEmail(
    @graphql.Args()
    args: EmailNotificationDto
  ): Promise<string> {
    return this.service.SendEmail(args);
  }
}
