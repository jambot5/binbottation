import { Module } from "@nestjs/common";
import { ClientsGroupModuleBase } from "./base/clientsGroup.module.base";
import { ClientsGroupService } from "./clientsGroup.service";
import { ClientsGroupController } from "./clientsGroup.controller";
import { ClientsGroupResolver } from "./clientsGroup.resolver";

@Module({
  imports: [ClientsGroupModuleBase],
  controllers: [ClientsGroupController],
  providers: [ClientsGroupService, ClientsGroupResolver],
  exports: [ClientsGroupService],
})
export class ClientsGroupModule {}
