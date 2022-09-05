import { Module } from "@nestjs/common";
import { CampaignTypeModuleBase } from "./base/campaignType.module.base";
import { CampaignTypeService } from "./campaignType.service";
import { CampaignTypeController } from "./campaignType.controller";
import { CampaignTypeResolver } from "./campaignType.resolver";

@Module({
  imports: [CampaignTypeModuleBase],
  controllers: [CampaignTypeController],
  providers: [CampaignTypeService, CampaignTypeResolver],
  exports: [CampaignTypeService],
})
export class CampaignTypeModule {}
