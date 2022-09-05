import { Module } from "@nestjs/common";
import { TreeConditionModuleBase } from "./base/treeCondition.module.base";
import { TreeConditionService } from "./treeCondition.service";
import { TreeConditionController } from "./treeCondition.controller";
import { TreeConditionResolver } from "./treeCondition.resolver";

@Module({
  imports: [TreeConditionModuleBase],
  controllers: [TreeConditionController],
  providers: [TreeConditionService, TreeConditionResolver],
  exports: [TreeConditionService],
})
export class TreeConditionModule {}
