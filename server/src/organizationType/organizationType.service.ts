import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { OrganizationTypeServiceBase } from "./base/organizationType.service.base";

@Injectable()
export class OrganizationTypeService extends OrganizationTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
