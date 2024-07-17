import { Module } from "@nestjs/common";
import { EmailNotificationService } from "./emailnotification.service";
import { EmailNotificationController } from "./emailnotification.controller";
import { EmailNotificationResolver } from "./emailnotification.resolver";

@Module({
  controllers: [EmailNotificationController],
  providers: [EmailNotificationService, EmailNotificationResolver],
  exports: [EmailNotificationService],
})
export class EmailNotificationModule {}
