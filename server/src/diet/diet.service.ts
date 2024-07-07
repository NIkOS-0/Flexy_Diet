import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DietServiceBase } from "./base/diet.service.base";

@Injectable()
export class DietService extends DietServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
