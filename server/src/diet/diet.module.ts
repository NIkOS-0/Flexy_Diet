import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DietModuleBase } from "./base/diet.module.base";
import { DietService } from "./diet.service";
import { DietController } from "./diet.controller";
import { DietResolver } from "./diet.resolver";

@Module({
  imports: [DietModuleBase, forwardRef(() => AuthModule)],
  controllers: [DietController],
  providers: [DietService, DietResolver],
  exports: [DietService],
})
export class DietModule {}
