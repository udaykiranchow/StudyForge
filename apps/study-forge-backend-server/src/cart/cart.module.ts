import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CartModuleBase } from "./base/cart.module.base";
import { CartService } from "./cart.service";
import { CartController } from "./cart.controller";
import { CartResolver } from "./cart.resolver";

@Module({
  imports: [CartModuleBase, forwardRef(() => AuthModule)],
  controllers: [CartController],
  providers: [CartService, CartResolver],
  exports: [CartService],
})
export class CartModule {}
