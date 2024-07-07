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
import { Diet } from "./Diet";
import { DietCountArgs } from "./DietCountArgs";
import { DietFindManyArgs } from "./DietFindManyArgs";
import { DietFindUniqueArgs } from "./DietFindUniqueArgs";
import { CreateDietArgs } from "./CreateDietArgs";
import { UpdateDietArgs } from "./UpdateDietArgs";
import { DeleteDietArgs } from "./DeleteDietArgs";
import { User } from "../../user/base/User";
import { DietService } from "../diet.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Diet)
export class DietResolverBase {
  constructor(
    protected readonly service: DietService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Diet",
    action: "read",
    possession: "any",
  })
  async _dietsMeta(
    @graphql.Args() args: DietCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Diet])
  @nestAccessControl.UseRoles({
    resource: "Diet",
    action: "read",
    possession: "any",
  })
  async diets(@graphql.Args() args: DietFindManyArgs): Promise<Diet[]> {
    return this.service.diets(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Diet, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Diet",
    action: "read",
    possession: "own",
  })
  async diet(@graphql.Args() args: DietFindUniqueArgs): Promise<Diet | null> {
    const result = await this.service.diet(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Diet)
  @nestAccessControl.UseRoles({
    resource: "Diet",
    action: "create",
    possession: "any",
  })
  async createDiet(@graphql.Args() args: CreateDietArgs): Promise<Diet> {
    return await this.service.createDiet({
      ...args,
      data: {
        ...args.data,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Diet)
  @nestAccessControl.UseRoles({
    resource: "Diet",
    action: "update",
    possession: "any",
  })
  async updateDiet(@graphql.Args() args: UpdateDietArgs): Promise<Diet | null> {
    try {
      return await this.service.updateDiet({
        ...args,
        data: {
          ...args.data,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
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

  @graphql.Mutation(() => Diet)
  @nestAccessControl.UseRoles({
    resource: "Diet",
    action: "delete",
    possession: "any",
  })
  async deleteDiet(@graphql.Args() args: DeleteDietArgs): Promise<Diet | null> {
    try {
      return await this.service.deleteDiet(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async getUser(@graphql.Parent() parent: Diet): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
