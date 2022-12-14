/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateTreeConditionArgs } from "./CreateTreeConditionArgs";
import { UpdateTreeConditionArgs } from "./UpdateTreeConditionArgs";
import { DeleteTreeConditionArgs } from "./DeleteTreeConditionArgs";
import { TreeConditionFindManyArgs } from "./TreeConditionFindManyArgs";
import { TreeConditionFindUniqueArgs } from "./TreeConditionFindUniqueArgs";
import { TreeCondition } from "./TreeCondition";
import { TreeFindManyArgs } from "../../tree/base/TreeFindManyArgs";
import { Tree } from "../../tree/base/Tree";
import { TreeConditionService } from "../treeCondition.service";

@graphql.Resolver(() => TreeCondition)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class TreeConditionResolverBase {
  constructor(
    protected readonly service: TreeConditionService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "TreeCondition",
    action: "read",
    possession: "any",
  })
  async _treeConditionsMeta(
    @graphql.Args() args: TreeConditionFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [TreeCondition])
  @nestAccessControl.UseRoles({
    resource: "TreeCondition",
    action: "read",
    possession: "any",
  })
  async treeConditions(
    @graphql.Args() args: TreeConditionFindManyArgs
  ): Promise<TreeCondition[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => TreeCondition, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "TreeCondition",
    action: "read",
    possession: "own",
  })
  async treeCondition(
    @graphql.Args() args: TreeConditionFindUniqueArgs
  ): Promise<TreeCondition | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => TreeCondition)
  @nestAccessControl.UseRoles({
    resource: "TreeCondition",
    action: "create",
    possession: "any",
  })
  async createTreeCondition(
    @graphql.Args() args: CreateTreeConditionArgs
  ): Promise<TreeCondition> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => TreeCondition)
  @nestAccessControl.UseRoles({
    resource: "TreeCondition",
    action: "update",
    possession: "any",
  })
  async updateTreeCondition(
    @graphql.Args() args: UpdateTreeConditionArgs
  ): Promise<TreeCondition | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => TreeCondition)
  @nestAccessControl.UseRoles({
    resource: "TreeCondition",
    action: "delete",
    possession: "any",
  })
  async deleteTreeCondition(
    @graphql.Args() args: DeleteTreeConditionArgs
  ): Promise<TreeCondition | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Tree])
  @nestAccessControl.UseRoles({
    resource: "Tree",
    action: "read",
    possession: "any",
  })
  async treeCondition(
    @graphql.Parent() parent: TreeCondition,
    @graphql.Args() args: TreeFindManyArgs
  ): Promise<Tree[]> {
    const results = await this.service.findTreeCondition(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
