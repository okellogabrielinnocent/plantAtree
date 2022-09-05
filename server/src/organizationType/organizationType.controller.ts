import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { OrganizationTypeService } from "./organizationType.service";
import { OrganizationTypeControllerBase } from "./base/organizationType.controller.base";

@swagger.ApiTags("organizationTypes")
@common.Controller("organizationTypes")
export class OrganizationTypeController extends OrganizationTypeControllerBase {
  constructor(
    protected readonly service: OrganizationTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
