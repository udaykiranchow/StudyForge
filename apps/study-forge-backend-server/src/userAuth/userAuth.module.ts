import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UserAuthModuleBase } from "./base/userAuth.module.base";
import { UserAuthService } from "./userAuth.service";
import { UserAuthController } from "./userAuth.controller";
import { UserAuthResolver } from "./userAuth.resolver";

@Module({
  imports: [UserAuthModuleBase, forwardRef(() => AuthModule)],
  controllers: [UserAuthController],
  providers: [UserAuthService, UserAuthResolver],
  exports: [UserAuthService],
})
export class UserAuthModule {}
