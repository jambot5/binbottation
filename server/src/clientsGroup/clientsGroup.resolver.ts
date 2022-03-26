import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { ClientsGroupResolverBase } from "./base/clientsGroup.resolver.base";
import { ClientsGroup } from "./base/ClientsGroup";
import { ClientsGroupService } from "./clientsGroup.service";

@graphql.Resolver(() => ClientsGroup)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ClientsGroupResolver extends ClientsGroupResolverBase {
  constructor(
    protected readonly service: ClientsGroupService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
