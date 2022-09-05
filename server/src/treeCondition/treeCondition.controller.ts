import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TreeConditionService } from "./treeCondition.service";
import { TreeConditionControllerBase } from "./base/treeCondition.controller.base";

@swagger.ApiTags("treeConditions")
@common.Controller("treeConditions")
export class TreeConditionController extends TreeConditionControllerBase {
  constructor(
    protected readonly service: TreeConditionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
