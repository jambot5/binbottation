import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ClientsGroupService } from "./clientsGroup.service";
import { ClientsGroupControllerBase } from "./base/clientsGroup.controller.base";

@swagger.ApiTags("clientsGroups")
@common.Controller("clientsGroups")
export class ClientsGroupController extends ClientsGroupControllerBase {
  constructor(
    protected readonly service: ClientsGroupService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
