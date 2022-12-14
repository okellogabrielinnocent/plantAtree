/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, CampaignType } from "@prisma/client";

export class CampaignTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.CampaignTypeFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CampaignTypeFindManyArgs>
  ): Promise<number> {
    return this.prisma.campaignType.count(args);
  }

  async findMany<T extends Prisma.CampaignTypeFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CampaignTypeFindManyArgs>
  ): Promise<CampaignType[]> {
    return this.prisma.campaignType.findMany(args);
  }
  async findOne<T extends Prisma.CampaignTypeFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CampaignTypeFindUniqueArgs>
  ): Promise<CampaignType | null> {
    return this.prisma.campaignType.findUnique(args);
  }
  async create<T extends Prisma.CampaignTypeCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CampaignTypeCreateArgs>
  ): Promise<CampaignType> {
    return this.prisma.campaignType.create<T>(args);
  }
  async update<T extends Prisma.CampaignTypeUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CampaignTypeUpdateArgs>
  ): Promise<CampaignType> {
    return this.prisma.campaignType.update<T>(args);
  }
  async delete<T extends Prisma.CampaignTypeDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.CampaignTypeDeleteArgs>
  ): Promise<CampaignType> {
    return this.prisma.campaignType.delete(args);
  }
}
