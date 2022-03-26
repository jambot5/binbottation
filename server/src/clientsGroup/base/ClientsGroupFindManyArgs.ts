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
import { ClientsGroupWhereInput } from "./ClientsGroupWhereInput";
import { Type } from "class-transformer";
import { ClientsGroupOrderByInput } from "./ClientsGroupOrderByInput";

@ArgsType()
class ClientsGroupFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ClientsGroupWhereInput,
  })
  @Field(() => ClientsGroupWhereInput, { nullable: true })
  @Type(() => ClientsGroupWhereInput)
  where?: ClientsGroupWhereInput;

  @ApiProperty({
    required: false,
    type: [ClientsGroupOrderByInput],
  })
  @Field(() => [ClientsGroupOrderByInput], { nullable: true })
  @Type(() => ClientsGroupOrderByInput)
  orderBy?: Array<ClientsGroupOrderByInput>;

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

export { ClientsGroupFindManyArgs };
