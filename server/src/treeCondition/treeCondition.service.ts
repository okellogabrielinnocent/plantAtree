import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { TreeConditionServiceBase } from "./base/treeCondition.service.base";

@Injectable()
export class TreeConditionService extends TreeConditionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
