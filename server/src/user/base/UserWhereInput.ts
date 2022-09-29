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
import { CampaignListRelationFilter } from "../../campaign/base/CampaignListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrganizationListRelationFilter } from "../../organization/base/OrganizationListRelationFilter";
import { OrganizationWhereUniqueInput } from "../../organization/base/OrganizationWhereUniqueInput";
import { TreeListRelationFilter } from "../../tree/base/TreeListRelationFilter";
import { TreeWhereUniqueInput } from "../../tree/base/TreeWhereUniqueInput";
@InputType()
class UserWhereInput {
  @ApiProperty({
    required: false,
    type: () => CampaignListRelationFilter,
  })
  @ValidateNested()
  @Type(() => CampaignListRelationFilter)
  @IsOptional()
  @Field(() => CampaignListRelationFilter, {
    nullable: true,
  })
  campaignAdapters?: CampaignListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  email?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  firstName?: StringNullableFilter;

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
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  lastName?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => OrganizationListRelationFilter,
  })
  @ValidateNested()
  @Type(() => OrganizationListRelationFilter)
  @IsOptional()
  @Field(() => OrganizationListRelationFilter, {
    nullable: true,
  })
  organizationsCreatedBy?: OrganizationListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => OrganizationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OrganizationWhereUniqueInput)
  @IsOptional()
  @Field(() => OrganizationWhereUniqueInput, {
    nullable: true,
  })
  organizationsUser?: OrganizationWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  phoneNumber?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  picture?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => TreeListRelationFilter,
  })
  @ValidateNested()
  @Type(() => TreeListRelationFilter)
  @IsOptional()
  @Field(() => TreeListRelationFilter, {
    nullable: true,
  })
  treeAdapters?: TreeListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => TreeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TreeWhereUniqueInput)
  @IsOptional()
  @Field(() => TreeWhereUniqueInput, {
    nullable: true,
  })
  treePlantedBy?: TreeWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  username?: StringFilter;
}
export { UserWhereInput };
