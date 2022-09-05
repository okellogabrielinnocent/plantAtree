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
import { TreeConditionService } from "../treeCondition.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { TreeConditionCreateInput } from "./TreeConditionCreateInput";
import { TreeConditionWhereInput } from "./TreeConditionWhereInput";
import { TreeConditionWhereUniqueInput } from "./TreeConditionWhereUniqueInput";
import { TreeConditionFindManyArgs } from "./TreeConditionFindManyArgs";
import { TreeConditionUpdateInput } from "./TreeConditionUpdateInput";
import { TreeCondition } from "./TreeCondition";
import { TreeFindManyArgs } from "../../tree/base/TreeFindManyArgs";
import { Tree } from "../../tree/base/Tree";
import { TreeWhereUniqueInput } from "../../tree/base/TreeWhereUniqueInput";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class TreeConditionControllerBase {
  constructor(
    protected readonly service: TreeConditionService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "TreeCondition",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: TreeCondition })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: TreeConditionCreateInput
  ): Promise<TreeCondition> {
    return await this.service.create({
      data: data,
      select: {
        acidity: true,
        createdAt: true,
        estimatedLifeSpane: true,
        id: true,
        others: true,
        plantingSeason: true,
        rootType: true,
        soilContent: true,
        soilDepth: true,
        updatedAt: true,
        waterAmount: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "TreeCondition",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [TreeCondition] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(TreeConditionFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<TreeCondition[]> {
    const args = plainToClass(TreeConditionFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        acidity: true,
        createdAt: true,
        estimatedLifeSpane: true,
        id: true,
        others: true,
        plantingSeason: true,
        rootType: true,
        soilContent: true,
        soilDepth: true,
        updatedAt: true,
        waterAmount: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "TreeCondition",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: TreeCondition })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: TreeConditionWhereUniqueInput
  ): Promise<TreeCondition | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        acidity: true,
        createdAt: true,
        estimatedLifeSpane: true,
        id: true,
        others: true,
        plantingSeason: true,
        rootType: true,
        soilContent: true,
        soilDepth: true,
        updatedAt: true,
        waterAmount: true,
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
    resource: "TreeCondition",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: TreeCondition })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: TreeConditionWhereUniqueInput,
    @common.Body() data: TreeConditionUpdateInput
  ): Promise<TreeCondition | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          acidity: true,
          createdAt: true,
          estimatedLifeSpane: true,
          id: true,
          others: true,
          plantingSeason: true,
          rootType: true,
          soilContent: true,
          soilDepth: true,
          updatedAt: true,
          waterAmount: true,
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
    resource: "TreeCondition",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: TreeCondition })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: TreeConditionWhereUniqueInput
  ): Promise<TreeCondition | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          acidity: true,
          createdAt: true,
          estimatedLifeSpane: true,
          id: true,
          others: true,
          plantingSeason: true,
          rootType: true,
          soilContent: true,
          soilDepth: true,
          updatedAt: true,
          waterAmount: true,
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Tree",
    action: "read",
    possession: "any",
  })
  @common.Get("/:id/treeCondition")
  @ApiNestedQuery(TreeFindManyArgs)
  async findManyTreeCondition(
    @common.Req() request: Request,
    @common.Param() params: TreeConditionWhereUniqueInput
  ): Promise<Tree[]> {
    const query = plainToClass(TreeFindManyArgs, request.query);
    const results = await this.service.findTreeCondition(params.id, {
      ...query,
      select: {
        campaign: {
          select: {
            id: true,
          },
        },

        condition: {
          select: {
            id: true,
          },
        },

        cost: true,
        createdAt: true,
        id: true,
        name: true,

        treeType: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @nestAccessControl.UseRoles({
    resource: "TreeCondition",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/treeCondition")
  async connectTreeCondition(
    @common.Param() params: TreeConditionWhereUniqueInput,
    @common.Body() body: TreeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      treeCondition: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "TreeCondition",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/treeCondition")
  async updateTreeCondition(
    @common.Param() params: TreeConditionWhereUniqueInput,
    @common.Body() body: TreeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      treeCondition: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "TreeCondition",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/treeCondition")
  async disconnectTreeCondition(
    @common.Param() params: TreeConditionWhereUniqueInput,
    @common.Body() body: TreeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      treeCondition: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
