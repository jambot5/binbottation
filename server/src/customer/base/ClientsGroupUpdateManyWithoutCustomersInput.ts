/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ClientsGroupWhereUniqueInput } from "../../clientsGroup/base/ClientsGroupWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";
@InputType()
class ClientsGroupUpdateManyWithoutCustomersInput {
  @Field(() => [ClientsGroupWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ClientsGroupWhereUniqueInput],
  })
  connect?: Array<ClientsGroupWhereUniqueInput>;

  @Field(() => [ClientsGroupWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ClientsGroupWhereUniqueInput],
  })
  disconnect?: Array<ClientsGroupWhereUniqueInput>;

  @Field(() => [ClientsGroupWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ClientsGroupWhereUniqueInput],
  })
  set?: Array<ClientsGroupWhereUniqueInput>;
}
export { ClientsGroupUpdateManyWithoutCustomersInput };
