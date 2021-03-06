/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import * as gqlUserRoles from "../../auth/gqlUserRoles.decorator";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CreateClientsGroupArgs } from "./CreateClientsGroupArgs";
import { UpdateClientsGroupArgs } from "./UpdateClientsGroupArgs";
import { DeleteClientsGroupArgs } from "./DeleteClientsGroupArgs";
import { ClientsGroupFindManyArgs } from "./ClientsGroupFindManyArgs";
import { ClientsGroupFindUniqueArgs } from "./ClientsGroupFindUniqueArgs";
import { ClientsGroup } from "./ClientsGroup";
import { CustomerFindManyArgs } from "../../customer/base/CustomerFindManyArgs";
import { Customer } from "../../customer/base/Customer";
import { ClientsGroupService } from "../clientsGroup.service";

@graphql.Resolver(() => ClientsGroup)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ClientsGroupResolverBase {
  constructor(
    protected readonly service: ClientsGroupService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "ClientsGroup",
    action: "read",
    possession: "any",
  })
  async _clientsGroupsMeta(
    @graphql.Args() args: ClientsGroupFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @graphql.Query(() => [ClientsGroup])
  @nestAccessControl.UseRoles({
    resource: "ClientsGroup",
    action: "read",
    possession: "any",
  })
  async clientsGroups(
    @graphql.Args() args: ClientsGroupFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<ClientsGroup[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "ClientsGroup",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => ClientsGroup, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "ClientsGroup",
    action: "read",
    possession: "own",
  })
  async clientsGroup(
    @graphql.Args() args: ClientsGroupFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<ClientsGroup | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "ClientsGroup",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => ClientsGroup)
  @nestAccessControl.UseRoles({
    resource: "ClientsGroup",
    action: "create",
    possession: "any",
  })
  async createClientsGroup(
    @graphql.Args() args: CreateClientsGroupArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<ClientsGroup> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "ClientsGroup",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"ClientsGroup"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => ClientsGroup)
  @nestAccessControl.UseRoles({
    resource: "ClientsGroup",
    action: "update",
    possession: "any",
  })
  async updateClientsGroup(
    @graphql.Args() args: UpdateClientsGroupArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<ClientsGroup | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "ClientsGroup",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"ClientsGroup"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => ClientsGroup)
  @nestAccessControl.UseRoles({
    resource: "ClientsGroup",
    action: "delete",
    possession: "any",
  })
  async deleteClientsGroup(
    @graphql.Args() args: DeleteClientsGroupArgs
  ): Promise<ClientsGroup | null> {
    try {
      // @ts-ignore
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Customer])
  @nestAccessControl.UseRoles({
    resource: "ClientsGroup",
    action: "read",
    possession: "any",
  })
  async customers(
    @graphql.Parent() parent: ClientsGroup,
    @graphql.Args() args: CustomerFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Customer[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Customer",
    });
    const results = await this.service.findCustomers(parent.id, args);

    if (!results) {
      return [];
    }

    return results.map((result) => permission.filter(result));
  }
}
