/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TreeTypeWhereInput } from "./TreeTypeWhereInput";
import { Type } from "class-transformer";
import { TreeTypeOrderByInput } from "./TreeTypeOrderByInput";

@ArgsType()
class TreeTypeFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => TreeTypeWhereInput,
  })
  @Field(() => TreeTypeWhereInput, { nullable: true })
  @Type(() => TreeTypeWhereInput)
  where?: TreeTypeWhereInput;

  @ApiProperty({
    required: false,
    type: [TreeTypeOrderByInput],
  })
  @Field(() => [TreeTypeOrderByInput], { nullable: true })
  @Type(() => TreeTypeOrderByInput)
  orderBy?: Array<TreeTypeOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { TreeTypeFindManyArgs };
