import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ProductsModuleBase } from "./base/products.module.base";
import { ProductsService } from "./products.service";
import { ProductsController } from "./products.controller";
import { ProductsResolver } from "./products.resolver";

@Module({
  imports: [ProductsModuleBase, forwardRef(() => AuthModule)],
  controllers: [ProductsController],
  providers: [ProductsService, ProductsResolver],
  exports: [ProductsService],
})
export class ProductsModule {}
