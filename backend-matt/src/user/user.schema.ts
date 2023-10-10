import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

enum RoleType {
  ADMIN = 'ADMIN',
  USER = 'USER',
  GUEST = 'GUEST',
}

@ObjectType()
@Schema()
export class User {
  @Field(() => String)
  id: mongoose.Types.ObjectId;

  @Field(() => String)
  @Prop({ required: true })
  username: string;

  @Field(() => String)
  @Prop({ required: true })
  password: string;

  @Field(() => RoleType)
  @Prop({ required: true })
  role: RoleType;
}

export const UserSchema = SchemaFactory.createForClass(User);
