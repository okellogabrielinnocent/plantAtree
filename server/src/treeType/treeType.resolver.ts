import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { TreeTypeResolverBase } from "./base/treeType.resolver.base";
import { TreeType } from "./base/TreeType";
import { TreeTypeService } from "./treeType.service";

@graphql.Resolver(() => TreeType)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class TreeTypeResolver extends TreeTypeResolverBase {
  constructor(
    protected readonly service: TreeTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
