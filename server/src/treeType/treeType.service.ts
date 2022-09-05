import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { TreeTypeServiceBase } from "./base/treeType.service.base";

@Injectable()
export class TreeTypeService extends TreeTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
