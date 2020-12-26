import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CatDocument = Cat & Document;
@Schema()
@ObjectType()
export class Cat {
  @Field(() => ID)
  _id: string;

  @Field({ nullable: true })
  @Prop()
  name: string;

  @Field(() => Int, { nullable: true })
  @Prop()
  age: number;

  @Field({ nullable: true })
  @Prop()
  breed: string;
}

export const CatSchema = SchemaFactory.createForClass(Cat);
