import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { HistoryServiceBase } from "./base/history.service.base";

@Injectable()
export class HistoryService extends HistoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
