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
import { UserUpdateManyWithoutCampaignsInput } from "./UserUpdateManyWithoutCampaignsInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { TreeUpdateManyWithoutCampaignsInput } from "./TreeUpdateManyWithoutCampaignsInput";
@InputType()
class CampaignUpdateInput {
  @ApiProperty({
    required: false,
    type: () => UserUpdateManyWithoutCampaignsInput,
  })
  @ValidateNested()
  @Type(() => UserUpdateManyWithoutCampaignsInput)
  @IsOptional()
  @Field(() => UserUpdateManyWithoutCampaignsInput, {
    nullable: true,
  })
  adapter?: UserUpdateManyWithoutCampaignsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  cost?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => TreeUpdateManyWithoutCampaignsInput,
  })
  @ValidateNested()
  @Type(() => TreeUpdateManyWithoutCampaignsInput)
  @IsOptional()
  @Field(() => TreeUpdateManyWithoutCampaignsInput, {
    nullable: true,
  })
  trees?: TreeUpdateManyWithoutCampaignsInput;
}
export { CampaignUpdateInput };
