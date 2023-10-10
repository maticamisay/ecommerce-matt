import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

enum RoleType {
  ADMIN = 'ADMIN',
  USER = 'USER',
  GUEST = 'GUEST',
}

registerEnumType(RoleType, {
  name: 'RoleType',
  description: 'Different types of roles available',
});

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
  @Prop({ type: String, enum: RoleType, default: RoleType.USER })
  role: RoleType;
}

export const UserSchema = SchemaFactory.createForClass(User);
