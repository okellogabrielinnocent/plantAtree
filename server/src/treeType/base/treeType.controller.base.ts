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
import { TreeTypeService } from "../treeType.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { TreeTypeCreateInput } from "./TreeTypeCreateInput";
import { TreeTypeWhereInput } from "./TreeTypeWhereInput";
import { TreeTypeWhereUniqueInput } from "./TreeTypeWhereUniqueInput";
import { TreeTypeFindManyArgs } from "./TreeTypeFindManyArgs";
import { TreeTypeUpdateInput } from "./TreeTypeUpdateInput";
import { TreeType } from "./TreeType";
import { TreeFindManyArgs } from "../../tree/base/TreeFindManyArgs";
import { Tree } from "../../tree/base/Tree";
import { TreeWhereUniqueInput } from "../../tree/base/TreeWhereUniqueInput";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class TreeTypeControllerBase {
  constructor(
    protected readonly service: TreeTypeService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "TreeType",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: TreeType })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(@common.Body() data: TreeTypeCreateInput): Promise<TreeType> {
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
    resource: "TreeType",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [TreeType] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(TreeTypeFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<TreeType[]> {
    const args = plainToClass(TreeTypeFindManyArgs, request.query);
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
    resource: "TreeType",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: TreeType })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: TreeTypeWhereUniqueInput
  ): Promise<TreeType | null> {
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
    resource: "TreeType",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: TreeType })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: TreeTypeWhereUniqueInput,
    @common.Body() data: TreeTypeUpdateInput
  ): Promise<TreeType | null> {
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
    resource: "TreeType",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: TreeType })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: TreeTypeWhereUniqueInput
  ): Promise<TreeType | null> {
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Tree",
    action: "read",
    possession: "any",
  })
  @common.Get("/:id/trees")
  @ApiNestedQuery(TreeFindManyArgs)
  async findManyTrees(
    @common.Req() request: Request,
    @common.Param() params: TreeTypeWhereUniqueInput
  ): Promise<Tree[]> {
    const query = plainToClass(TreeFindManyArgs, request.query);
    const results = await this.service.findTrees(params.id, {
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
    resource: "TreeType",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/trees")
  async connectTrees(
    @common.Param() params: TreeTypeWhereUniqueInput,
    @common.Body() body: TreeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      trees: {
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
    resource: "TreeType",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/trees")
  async updateTrees(
    @common.Param() params: TreeTypeWhereUniqueInput,
    @common.Body() body: TreeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      trees: {
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
    resource: "TreeType",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/trees")
  async disconnectTrees(
    @common.Param() params: TreeTypeWhereUniqueInput,
    @common.Body() body: TreeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      trees: {
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
