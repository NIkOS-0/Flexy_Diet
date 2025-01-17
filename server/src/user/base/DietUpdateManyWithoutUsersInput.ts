/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { DietWhereUniqueInput } from "../../diet/base/DietWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class DietUpdateManyWithoutUsersInput {
  @Field(() => [DietWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [DietWhereUniqueInput],
  })
  connect?: Array<DietWhereUniqueInput>;

  @Field(() => [DietWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [DietWhereUniqueInput],
  })
  disconnect?: Array<DietWhereUniqueInput>;

  @Field(() => [DietWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [DietWhereUniqueInput],
  })
  set?: Array<DietWhereUniqueInput>;
}

export { DietUpdateManyWithoutUsersInput as DietUpdateManyWithoutUsersInput };
