/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { CampaignTypeService } from "../campaignType.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { CampaignTypeCreateInput } from "./CampaignTypeCreateInput";
import { CampaignTypeWhereInput } from "./CampaignTypeWhereInput";
import { CampaignTypeWhereUniqueInput } from "./CampaignTypeWhereUniqueInput";
import { CampaignTypeFindManyArgs } from "./CampaignTypeFindManyArgs";
import { CampaignTypeUpdateInput } from "./CampaignTypeUpdateInput";
import { CampaignType } from "./CampaignType";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class CampaignTypeControllerBase {
  constructor(
    protected readonly service: CampaignTypeService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "CampaignType",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: CampaignType })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: CampaignTypeCreateInput
  ): Promise<CampaignType> {
    return await this.service.create({
      data: data,
      select: {
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "CampaignType",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [CampaignType] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(CampaignTypeFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<CampaignType[]> {
    const args = plainToClass(CampaignTypeFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "CampaignType",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: CampaignType })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: CampaignTypeWhereUniqueInput
  ): Promise<CampaignType | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "CampaignType",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: CampaignType })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: CampaignTypeWhereUniqueInput,
    @common.Body() data: CampaignTypeUpdateInput
  ): Promise<CampaignType | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @nestAccessControl.UseRoles({
    resource: "CampaignType",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: CampaignType })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: CampaignTypeWhereUniqueInput
  ): Promise<CampaignType | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
