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
import { CreateCampaignArgs } from "./CreateCampaignArgs";
import { UpdateCampaignArgs } from "./UpdateCampaignArgs";
import { DeleteCampaignArgs } from "./DeleteCampaignArgs";
import { CampaignFindManyArgs } from "./CampaignFindManyArgs";
import { CampaignFindUniqueArgs } from "./CampaignFindUniqueArgs";
import { Campaign } from "./Campaign";
import { UserFindManyArgs } from "../../user/base/UserFindManyArgs";
import { User } from "../../user/base/User";
import { TreeFindManyArgs } from "../../tree/base/TreeFindManyArgs";
import { Tree } from "../../tree/base/Tree";
import { CampaignService } from "../campaign.service";

@graphql.Resolver(() => Campaign)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class CampaignResolverBase {
  constructor(
    protected readonly service: CampaignService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Campaign",
    action: "read",
    possession: "any",
  })
  async _campaignsMeta(
    @graphql.Args() args: CampaignFindManyArgs
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
  @graphql.Query(() => [Campaign])
  @nestAccessControl.UseRoles({
    resource: "Campaign",
    action: "read",
    possession: "any",
  })
  async campaigns(
    @graphql.Args() args: CampaignFindManyArgs
  ): Promise<Campaign[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Campaign, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Campaign",
    action: "read",
    possession: "own",
  })
  async campaign(
    @graphql.Args() args: CampaignFindUniqueArgs
  ): Promise<Campaign | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Campaign)
  @nestAccessControl.UseRoles({
    resource: "Campaign",
    action: "create",
    possession: "any",
  })
  async createCampaign(
    @graphql.Args() args: CreateCampaignArgs
  ): Promise<Campaign> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Campaign)
  @nestAccessControl.UseRoles({
    resource: "Campaign",
    action: "update",
    possession: "any",
  })
  async updateCampaign(
    @graphql.Args() args: UpdateCampaignArgs
  ): Promise<Campaign | null> {
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

  @graphql.Mutation(() => Campaign)
  @nestAccessControl.UseRoles({
    resource: "Campaign",
    action: "delete",
    possession: "any",
  })
  async deleteCampaign(
    @graphql.Args() args: DeleteCampaignArgs
  ): Promise<Campaign | null> {
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
  @graphql.ResolveField(() => [User])
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async adapter(
    @graphql.Parent() parent: Campaign,
    @graphql.Args() args: UserFindManyArgs
  ): Promise<User[]> {
    const results = await this.service.findAdapter(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Tree])
  @nestAccessControl.UseRoles({
    resource: "Tree",
    action: "read",
    possession: "any",
  })
  async trees(
    @graphql.Parent() parent: Campaign,
    @graphql.Args() args: TreeFindManyArgs
  ): Promise<Tree[]> {
    const results = await this.service.findTrees(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
