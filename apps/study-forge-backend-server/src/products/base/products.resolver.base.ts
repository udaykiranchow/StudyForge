/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Products } from "./Products";
import { ProductsCountArgs } from "./ProductsCountArgs";
import { ProductsFindManyArgs } from "./ProductsFindManyArgs";
import { ProductsFindUniqueArgs } from "./ProductsFindUniqueArgs";
import { CreateProductsArgs } from "./CreateProductsArgs";
import { UpdateProductsArgs } from "./UpdateProductsArgs";
import { DeleteProductsArgs } from "./DeleteProductsArgs";
import { ProductsService } from "../products.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Products)
export class ProductsResolverBase {
  constructor(
    protected readonly service: ProductsService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Products",
    action: "read",
    possession: "any",
  })
  async _productsItemsMeta(
    @graphql.Args() args: ProductsCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Products])
  @nestAccessControl.UseRoles({
    resource: "Products",
    action: "read",
    possession: "any",
  })
  async productsItems(
    @graphql.Args() args: ProductsFindManyArgs
  ): Promise<Products[]> {
    return this.service.productsItems(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Products, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Products",
    action: "read",
    possession: "own",
  })
  async products(
    @graphql.Args() args: ProductsFindUniqueArgs
  ): Promise<Products | null> {
    const result = await this.service.products(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Products)
  @nestAccessControl.UseRoles({
    resource: "Products",
    action: "create",
    possession: "any",
  })
  async createProducts(
    @graphql.Args() args: CreateProductsArgs
  ): Promise<Products> {
    return await this.service.createProducts({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Products)
  @nestAccessControl.UseRoles({
    resource: "Products",
    action: "update",
    possession: "any",
  })
  async updateProducts(
    @graphql.Args() args: UpdateProductsArgs
  ): Promise<Products | null> {
    try {
      return await this.service.updateProducts({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Products)
  @nestAccessControl.UseRoles({
    resource: "Products",
    action: "delete",
    possession: "any",
  })
  async deleteProducts(
    @graphql.Args() args: DeleteProductsArgs
  ): Promise<Products | null> {
    try {
      return await this.service.deleteProducts(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
