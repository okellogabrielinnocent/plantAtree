import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { CampaignTypeResolverBase } from "./base/campaignType.resolver.base";
import { CampaignType } from "./base/CampaignType";
import { CampaignTypeService } from "./campaignType.service";

@graphql.Resolver(() => CampaignType)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class CampaignTypeResolver extends CampaignTypeResolverBase {
  constructor(
    protected readonly service: CampaignTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
