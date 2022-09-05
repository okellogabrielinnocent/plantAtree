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
import { CampaignService } from "../campaign.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { CampaignCreateInput } from "./CampaignCreateInput";
import { CampaignWhereInput } from "./CampaignWhereInput";
import { CampaignWhereUniqueInput } from "./CampaignWhereUniqueInput";
import { CampaignFindManyArgs } from "./CampaignFindManyArgs";
import { CampaignUpdateInput } from "./CampaignUpdateInput";
import { Campaign } from "./Campaign";
import { UserFindManyArgs } from "../../user/base/UserFindManyArgs";
import { User } from "../../user/base/User";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { TreeFindManyArgs } from "../../tree/base/TreeFindManyArgs";
import { Tree } from "../../tree/base/Tree";
import { TreeWhereUniqueInput } from "../../tree/base/TreeWhereUniqueInput";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class CampaignControllerBase {
  constructor(
    protected readonly service: CampaignService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Campaign",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Campaign })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(@common.Body() data: CampaignCreateInput): Promise<Campaign> {
    return await this.service.create({
      data: data,
      select: {
        cost: true,
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Campaign",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [Campaign] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(CampaignFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Campaign[]> {
    const args = plainToClass(CampaignFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        cost: true,
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Campaign",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Campaign })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: CampaignWhereUniqueInput
  ): Promise<Campaign | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        cost: true,
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
    resource: "Campaign",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Campaign })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: CampaignWhereUniqueInput,
    @common.Body() data: CampaignUpdateInput
  ): Promise<Campaign | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          cost: true,
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
    resource: "Campaign",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Campaign })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: CampaignWhereUniqueInput
  ): Promise<Campaign | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          cost: true,
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
    resource: "User",
    action: "read",
    possession: "any",
  })
  @common.Get("/:id/adapter")
  @ApiNestedQuery(UserFindManyArgs)
  async findManyAdapter(
    @common.Req() request: Request,
    @common.Param() params: CampaignWhereUniqueInput
  ): Promise<User[]> {
    const query = plainToClass(UserFindManyArgs, request.query);
    const results = await this.service.findAdapter(params.id, {
      ...query,
      select: {
        createdAt: true,
        email: true,
        firstName: true,
        id: true,
        lastName: true,
        phoneNumber: true,
        picture: true,
        roles: true,

        treePlantedBy: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        username: true,
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
    resource: "Campaign",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/adapter")
  async connectAdapter(
    @common.Param() params: CampaignWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      adapter: {
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
    resource: "Campaign",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/adapter")
  async updateAdapter(
    @common.Param() params: CampaignWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      adapter: {
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
    resource: "Campaign",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/adapter")
  async disconnectAdapter(
    @common.Param() params: CampaignWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      adapter: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
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
    @common.Param() params: CampaignWhereUniqueInput
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
    resource: "Campaign",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/trees")
  async connectTrees(
    @common.Param() params: CampaignWhereUniqueInput,
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
    resource: "Campaign",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/trees")
  async updateTrees(
    @common.Param() params: CampaignWhereUniqueInput,
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
    resource: "Campaign",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/trees")
  async disconnectTrees(
    @common.Param() params: CampaignWhereUniqueInput,
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