import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { TreeConditionResolverBase } from "./base/treeCondition.resolver.base";
import { TreeCondition } from "./base/TreeCondition";
import { TreeConditionService } from "./treeCondition.service";

@graphql.Resolver(() => TreeCondition)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class TreeConditionResolver extends TreeConditionResolverBase {
  constructor(
    protected readonly service: TreeConditionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
