import { Injectable } from "@nestjs/common";
import { EmailNotificationDto } from "../emailNotification/EmailNotificationDto";

@Injectable()
export class EmailNotificationService {
  constructor() {}
  async SendEmail(args: EmailNotificationDto): Promise<string> {
    throw new Error("Not implemented");
  }
}
