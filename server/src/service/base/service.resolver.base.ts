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
import { CreateServiceArgs } from "./CreateServiceArgs";
import { UpdateServiceArgs } from "./UpdateServiceArgs";
import { DeleteServiceArgs } from "./DeleteServiceArgs";
import { ServiceFindManyArgs } from "./ServiceFindManyArgs";
import { ServiceFindUniqueArgs } from "./ServiceFindUniqueArgs";
import { Service } from "./Service";
import { Organization } from "../../organization/base/Organization";
import { ServiceService } from "../service.service";

@graphql.Resolver(() => Service)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ServiceResolverBase {
  constructor(
    protected readonly service: ServiceService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Service",
    action: "read",
    possession: "any",
  })
  async _servicesMeta(
    @graphql.Args() args: ServiceFindManyArgs
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
  @graphql.Query(() => [Service])
  @nestAccessControl.UseRoles({
    resource: "Service",
    action: "read",
    possession: "any",
  })
  async services(
    @graphql.Args() args: ServiceFindManyArgs
  ): Promise<Service[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Service, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Service",
    action: "read",
    possession: "own",
  })
  async service(
    @graphql.Args() args: ServiceFindUniqueArgs
  ): Promise<Service | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Service)
  @nestAccessControl.UseRoles({
    resource: "Service",
    action: "create",
    possession: "any",
  })
  async createService(
    @graphql.Args() args: CreateServiceArgs
  ): Promise<Service> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        organization: args.data.organization
          ? {
              connect: args.data.organization,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Service)
  @nestAccessControl.UseRoles({
    resource: "Service",
    action: "update",
    possession: "any",
  })
  async updateService(
    @graphql.Args() args: UpdateServiceArgs
  ): Promise<Service | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          organization: args.data.organization
            ? {
                connect: args.data.organization,
              }
            : undefined,
        },
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

  @graphql.Mutation(() => Service)
  @nestAccessControl.UseRoles({
    resource: "Service",
    action: "delete",
    possession: "any",
  })
  async deleteService(
    @graphql.Args() args: DeleteServiceArgs
  ): Promise<Service | null> {
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
  @graphql.ResolveField(() => Organization, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "read",
    possession: "any",
  })
  async organization(
    @graphql.Parent() parent: Service
  ): Promise<Organization | null> {
    const result = await this.service.getOrganization(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
