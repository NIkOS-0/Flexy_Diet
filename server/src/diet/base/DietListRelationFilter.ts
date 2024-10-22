/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DietWhereInput } from "./DietWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class DietListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => DietWhereInput,
  })
  @ValidateNested()
  @Type(() => DietWhereInput)
  @IsOptional()
  @Field(() => DietWhereInput, {
    nullable: true,
  })
  every?: DietWhereInput;

  @ApiProperty({
    required: false,
    type: () => DietWhereInput,
  })
  @ValidateNested()
  @Type(() => DietWhereInput)
  @IsOptional()
  @Field(() => DietWhereInput, {
    nullable: true,
  })
  some?: DietWhereInput;

  @ApiProperty({
    required: false,
    type: () => DietWhereInput,
  })
  @ValidateNested()
  @Type(() => DietWhereInput)
  @IsOptional()
  @Field(() => DietWhereInput, {
    nullable: true,
  })
  none?: DietWhereInput;
}
export { DietListRelationFilter as DietListRelationFilter };
