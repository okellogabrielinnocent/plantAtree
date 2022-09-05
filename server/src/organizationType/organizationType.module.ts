import { Module } from "@nestjs/common";
import { OrganizationTypeModuleBase } from "./base/organizationType.module.base";
import { OrganizationTypeService } from "./organizationType.service";
import { OrganizationTypeController } from "./organizationType.controller";
import { OrganizationTypeResolver } from "./organizationType.resolver";

@Module({
  imports: [OrganizationTypeModuleBase],
  controllers: [OrganizationTypeController],
  providers: [OrganizationTypeService, OrganizationTypeResolver],
  exports: [OrganizationTypeService],
})
export class OrganizationTypeModule {}
