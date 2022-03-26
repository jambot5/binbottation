import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ClientsGroupServiceBase } from "./base/clientsGroup.service.base";

@Injectable()
export class ClientsGroupService extends ClientsGroupServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
