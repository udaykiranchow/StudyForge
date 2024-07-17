import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ProductsService } from "./products.service";
import { ProductsControllerBase } from "./base/products.controller.base";

@swagger.ApiTags("products")
@common.Controller("products")
export class ProductsController extends ProductsControllerBase {
  constructor(
    protected readonly service: ProductsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
