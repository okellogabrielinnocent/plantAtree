/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { TreeWhereUniqueInput } from "../../tree/base/TreeWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";
@InputType()
class TreeUpdateManyWithoutTreeTypesInput {
  @Field(() => [TreeWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TreeWhereUniqueInput],
  })
  connect?: Array<TreeWhereUniqueInput>;

  @Field(() => [TreeWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TreeWhereUniqueInput],
  })
  disconnect?: Array<TreeWhereUniqueInput>;

  @Field(() => [TreeWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TreeWhereUniqueInput],
  })
  set?: Array<TreeWhereUniqueInput>;
}
export { TreeUpdateManyWithoutTreeTypesInput };
