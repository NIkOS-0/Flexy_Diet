import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DietService } from "./diet.service";
import { DietControllerBase } from "./base/diet.controller.base";

@swagger.ApiTags("diets")
@common.Controller("diets")
export class DietController extends DietControllerBase {
  constructor(
    protected readonly service: DietService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
