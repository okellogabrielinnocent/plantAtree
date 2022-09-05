import { Module } from "@nestjs/common";
import { TreeTypeModuleBase } from "./base/treeType.module.base";
import { TreeTypeService } from "./treeType.service";
import { TreeTypeController } from "./treeType.controller";
import { TreeTypeResolver } from "./treeType.resolver";

@Module({
  imports: [TreeTypeModuleBase],
  controllers: [TreeTypeController],
  providers: [TreeTypeService, TreeTypeResolver],
  exports: [TreeTypeService],
})
export class TreeTypeModule {}
