/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Diet as PrismaDiet, User as PrismaUser } from "@prisma/client";
import { DietCreateInput } from "./DietCreateInput";
import { Diet } from "./Diet";
import { DeleteDietArgs } from "./DeleteDietArgs";
import { DietCountArgs } from "./DietCountArgs";
import { DietUpdateInput } from "./DietUpdateInput";

export class DietServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.DietCountArgs, "select">): Promise<number> {
    return this.prisma.diet.count(args);
  }

  async diets(args: Prisma.DietFindManyArgs): Promise<PrismaDiet[]> {
    return this.prisma.diet.findMany(args);
  }
  async diet(args: Prisma.DietFindUniqueArgs): Promise<PrismaDiet | null> {
    return this.prisma.diet.findUnique(args);
  }
  async createDiet(args: Prisma.DietCreateArgs): Promise<PrismaDiet> {
    return this.prisma.diet.create(args);
  }
  async updateDiet(args: Prisma.DietUpdateArgs): Promise<PrismaDiet> {
    return this.prisma.diet.update(args);
  }
  async deleteDiet(args: Prisma.DietDeleteArgs): Promise<PrismaDiet> {
    return this.prisma.diet.delete(args);
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.diet
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
  async CreateDiet(args: DietCreateInput): Promise<Diet> {
    throw new Error("Not implemented");
  }
  async DeleteDiet(args: DeleteDietArgs): Promise<Diet> {
    throw new Error("Not implemented");
  }
  async RetrieveDiet(args: DietCountArgs): Promise<Diet> {
    throw new Error("Not implemented");
  }
  async UpdateDiet(args: DietUpdateInput): Promise<Diet> {
    throw new Error("Not implemented");
  }
}
