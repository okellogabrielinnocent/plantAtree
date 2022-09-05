import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { OrganizationTypeResolverBase } from "./base/organizationType.resolver.base";
import { OrganizationType } from "./base/OrganizationType";
import { OrganizationTypeService } from "./organizationType.service";

@graphql.Resolver(() => OrganizationType)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class OrganizationTypeResolver extends OrganizationTypeResolverBase {
  constructor(
    protected readonly service: OrganizationTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
