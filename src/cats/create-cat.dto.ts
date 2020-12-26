import { InputType, Field, Int } from '@nestjs/graphql';
@InputType()
export class CreateCatDto {
  @Field({ nullable: true })
  name?: string;
  @Field(() => Int, { nullable: true })
  age?: number;
  @Field({ nullable: true })
  breed?: string;
}
