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
import { OrganizationService } from "../organization.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { OrganizationCreateInput } from "./OrganizationCreateInput";
import { OrganizationWhereInput } from "./OrganizationWhereInput";
import { OrganizationWhereUniqueInput } from "./OrganizationWhereUniqueInput";
import { OrganizationFindManyArgs } from "./OrganizationFindManyArgs";
import { OrganizationUpdateInput } from "./OrganizationUpdateInput";
import { Organization } from "./Organization";
import { UserFindManyArgs } from "../../user/base/UserFindManyArgs";
import { User } from "../../user/base/User";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { ServiceFindManyArgs } from "../../service/base/ServiceFindManyArgs";
import { Service } from "../../service/base/Service";
import { ServiceWhereUniqueInput } from "../../service/base/ServiceWhereUniqueInput";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class OrganizationControllerBase {
  constructor(
    protected readonly service: OrganizationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Organization })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: OrganizationCreateInput
  ): Promise<Organization> {
    return await this.service.create({
      data: {
        ...data,

        createdBy: data.createdBy
          ? {
              connect: data.createdBy,
            }
          : undefined,
      },
      select: {
        createdAt: true,

        createdBy: {
          select: {
            id: true,
          },
        },

        id: true,
        location: true,
        name: true,
        organizationEmail: true,
        organizationPhoneNumber: true,
        types: true,
        updatedAt: true,
        webSite: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [Organization] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(OrganizationFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Organization[]> {
    const args = plainToClass(OrganizationFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,

        createdBy: {
          select: {
            id: true,
          },
        },

        id: true,
        location: true,
        name: true,
        organizationEmail: true,
        organizationPhoneNumber: true,
        types: true,
        updatedAt: true,
        webSite: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Organization })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: OrganizationWhereUniqueInput
  ): Promise<Organization | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,

        createdBy: {
          select: {
            id: true,
          },
        },

        id: true,
        location: true,
        name: true,
        organizationEmail: true,
        organizationPhoneNumber: true,
        types: true,
        updatedAt: true,
        webSite: true,
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
    resource: "Organization",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Organization })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: OrganizationWhereUniqueInput,
    @common.Body() data: OrganizationUpdateInput
  ): Promise<Organization | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          createdBy: data.createdBy
            ? {
                connect: data.createdBy,
              }
            : undefined,
        },
        select: {
          createdAt: true,

          createdBy: {
            select: {
              id: true,
            },
          },

          id: true,
          location: true,
          name: true,
          organizationEmail: true,
          organizationPhoneNumber: true,
          types: true,
          updatedAt: true,
          webSite: true,
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
    resource: "Organization",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Organization })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: OrganizationWhereUniqueInput
  ): Promise<Organization | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,

          createdBy: {
            select: {
              id: true,
            },
          },

          id: true,
          location: true,
          name: true,
          organizationEmail: true,
          organizationPhoneNumber: true,
          types: true,
          updatedAt: true,
          webSite: true,
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
  @common.Get("/:id/contactPerson")
  @ApiNestedQuery(UserFindManyArgs)
  async findManyContactPerson(
    @common.Req() request: Request,
    @common.Param() params: OrganizationWhereUniqueInput
  ): Promise<User[]> {
    const query = plainToClass(UserFindManyArgs, request.query);
    const results = await this.service.findContactPerson(params.id, {
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
    resource: "Organization",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/contactPerson")
  async connectContactPerson(
    @common.Param() params: OrganizationWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      contactPerson: {
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
    resource: "Organization",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/contactPerson")
  async updateContactPerson(
    @common.Param() params: OrganizationWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      contactPerson: {
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
    resource: "Organization",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/contactPerson")
  async disconnectContactPerson(
    @common.Param() params: OrganizationWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      contactPerson: {
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
    resource: "Service",
    action: "read",
    possession: "any",
  })
  @common.Get("/:id/services")
  @ApiNestedQuery(ServiceFindManyArgs)
  async findManyServices(
    @common.Req() request: Request,
    @common.Param() params: OrganizationWhereUniqueInput
  ): Promise<Service[]> {
    const query = plainToClass(ServiceFindManyArgs, request.query);
    const results = await this.service.findServices(params.id, {
      ...query,
      select: {
        cost: true,
        createdAt: true,
        id: true,
        name: true,

        organization: {
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
    resource: "Organization",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/services")
  async connectServices(
    @common.Param() params: OrganizationWhereUniqueInput,
    @common.Body() body: ServiceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      services: {
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
    resource: "Organization",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/services")
  async updateServices(
    @common.Param() params: OrganizationWhereUniqueInput,
    @common.Body() body: ServiceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      services: {
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
    resource: "Organization",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/services")
  async disconnectServices(
    @common.Param() params: OrganizationWhereUniqueInput,
    @common.Body() body: ServiceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      services: {
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
