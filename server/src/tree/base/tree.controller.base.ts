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
import { TreeService } from "../tree.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { TreeCreateInput } from "./TreeCreateInput";
import { TreeWhereInput } from "./TreeWhereInput";
import { TreeWhereUniqueInput } from "./TreeWhereUniqueInput";
import { TreeFindManyArgs } from "./TreeFindManyArgs";
import { TreeUpdateInput } from "./TreeUpdateInput";
import { Tree } from "./Tree";
import { UserFindManyArgs } from "../../user/base/UserFindManyArgs";
import { User } from "../../user/base/User";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class TreeControllerBase {
  constructor(
    protected readonly service: TreeService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Tree",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Tree })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(@common.Body() data: TreeCreateInput): Promise<Tree> {
    return await this.service.create({
      data: {
        ...data,

        campaign: data.campaign
          ? {
              connect: data.campaign,
            }
          : undefined,

        condition: data.condition
          ? {
              connect: data.condition,
            }
          : undefined,

        treeType: {
          connect: data.treeType,
        },
      },
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Tree",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [Tree] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(TreeFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Tree[]> {
    const args = plainToClass(TreeFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Tree",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Tree })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: TreeWhereUniqueInput
  ): Promise<Tree | null> {
    const result = await this.service.findOne({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Tree",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Tree })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: TreeWhereUniqueInput,
    @common.Body() data: TreeUpdateInput
  ): Promise<Tree | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          campaign: data.campaign
            ? {
                connect: data.campaign,
              }
            : undefined,

          condition: data.condition
            ? {
                connect: data.condition,
              }
            : undefined,

          treeType: {
            connect: data.treeType,
          },
        },
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
    resource: "Tree",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Tree })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: TreeWhereUniqueInput
  ): Promise<Tree | null> {
    try {
      return await this.service.delete({
        where: params,
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
  @common.Get("/:id/adaptors")
  @ApiNestedQuery(UserFindManyArgs)
  async findManyAdaptors(
    @common.Req() request: Request,
    @common.Param() params: TreeWhereUniqueInput
  ): Promise<User[]> {
    const query = plainToClass(UserFindManyArgs, request.query);
    const results = await this.service.findAdaptors(params.id, {
      ...query,
      select: {
        createdAt: true,
        email: true,
        firstName: true,
        id: true,
        lastName: true,

        organizationsUser: {
          select: {
            id: true,
          },
        },

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
    resource: "Tree",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/adaptors")
  async connectAdaptors(
    @common.Param() params: TreeWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      adaptors: {
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
    resource: "Tree",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/adaptors")
  async updateAdaptors(
    @common.Param() params: TreeWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      adaptors: {
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
    resource: "Tree",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/adaptors")
  async disconnectAdaptors(
    @common.Param() params: TreeWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      adaptors: {
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
    resource: "User",
    action: "read",
    possession: "any",
  })
  @common.Get("/:id/plantedBy")
  @ApiNestedQuery(UserFindManyArgs)
  async findManyPlantedBy(
    @common.Req() request: Request,
    @common.Param() params: TreeWhereUniqueInput
  ): Promise<User[]> {
    const query = plainToClass(UserFindManyArgs, request.query);
    const results = await this.service.findPlantedBy(params.id, {
      ...query,
      select: {
        createdAt: true,
        email: true,
        firstName: true,
        id: true,
        lastName: true,

        organizationsUser: {
          select: {
            id: true,
          },
        },

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
    resource: "Tree",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/plantedBy")
  async connectPlantedBy(
    @common.Param() params: TreeWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      plantedBy: {
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
    resource: "Tree",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/plantedBy")
  async updatePlantedBy(
    @common.Param() params: TreeWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      plantedBy: {
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
    resource: "Tree",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/plantedBy")
  async disconnectPlantedBy(
    @common.Param() params: TreeWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      plantedBy: {
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
