import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CartService } from "./cart.service";
import { CartControllerBase } from "./base/cart.controller.base";

@swagger.ApiTags("carts")
@common.Controller("carts")
export class CartController extends CartControllerBase {
  constructor(
    protected readonly service: CartService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
