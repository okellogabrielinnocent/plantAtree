import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { CampaignTypeServiceBase } from "./base/campaignType.service.base";

@Injectable()
export class CampaignTypeService extends CampaignTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
