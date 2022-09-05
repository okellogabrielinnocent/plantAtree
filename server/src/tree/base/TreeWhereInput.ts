/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { UserListRelationFilter } from "../../user/base/UserListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { CampaignWhereUniqueInput } from "../../campaign/base/CampaignWhereUniqueInput";
import { TreeConditionWhereUniqueInput } from "../../treeCondition/base/TreeConditionWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TreeTypeWhereUniqueInput } from "../../treeType/base/TreeTypeWhereUniqueInput";
@InputType()
class TreeWhereInput {
  @ApiProperty({
    required: false,
    type: () => UserListRelationFilter,
  })
  @ValidateNested()
  @Type(() => UserListRelationFilter)
  @IsOptional()
  @Field(() => UserListRelationFilter, {
    nullable: true,
  })
  adaptors?: UserListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => CampaignWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CampaignWhereUniqueInput)
  @IsOptional()
  @Field(() => CampaignWhereUniqueInput, {
    nullable: true,
  })
  campaign?: CampaignWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => TreeConditionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TreeConditionWhereUniqueInput)
  @IsOptional()
  @Field(() => TreeConditionWhereUniqueInput, {
    nullable: true,
  })
  condition?: TreeConditionWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: FloatNullableFilter,
  })
  @Type(() => FloatNullableFilter)
  @IsOptional()
  @Field(() => FloatNullableFilter, {
    nullable: true,
  })
  cost?: FloatNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  name?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => UserListRelationFilter,
  })
  @ValidateNested()
  @Type(() => UserListRelationFilter)
  @IsOptional()
  @Field(() => UserListRelationFilter, {
    nullable: true,
  })
  plantedBy?: UserListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => TreeTypeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TreeTypeWhereUniqueInput)
  @IsOptional()
  @Field(() => TreeTypeWhereUniqueInput, {
    nullable: true,
  })
  treeType?: TreeTypeWhereUniqueInput;
}
export { TreeWhereInput };
