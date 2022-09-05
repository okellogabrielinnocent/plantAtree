import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TreeTypeService } from "./treeType.service";
import { TreeTypeControllerBase } from "./base/treeType.controller.base";

@swagger.ApiTags("treeTypes")
@common.Controller("treeTypes")
export class TreeTypeController extends TreeTypeControllerBase {
  constructor(
    protected readonly service: TreeTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
