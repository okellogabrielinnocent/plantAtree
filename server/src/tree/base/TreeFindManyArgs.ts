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
import { TreeWhereInput } from "./TreeWhereInput";
import { Type } from "class-transformer";
import { TreeOrderByInput } from "./TreeOrderByInput";

@ArgsType()
class TreeFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => TreeWhereInput,
  })
  @Field(() => TreeWhereInput, { nullable: true })
  @Type(() => TreeWhereInput)
  where?: TreeWhereInput;

  @ApiProperty({
    required: false,
    type: [TreeOrderByInput],
  })
  @Field(() => [TreeOrderByInput], { nullable: true })
  @Type(() => TreeOrderByInput)
  orderBy?: Array<TreeOrderByInput>;

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

export { TreeFindManyArgs };
