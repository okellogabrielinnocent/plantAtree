import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CampaignTypeService } from "./campaignType.service";
import { CampaignTypeControllerBase } from "./base/campaignType.controller.base";

@swagger.ApiTags("campaignTypes")
@common.Controller("campaignTypes")
export class CampaignTypeController extends CampaignTypeControllerBase {
  constructor(
    protected readonly service: CampaignTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
