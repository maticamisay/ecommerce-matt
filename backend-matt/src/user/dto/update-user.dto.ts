import { InputType, Field, PartialType, registerEnumType } from '@nestjs/graphql';
import { IsString, IsNotEmpty } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

enum RoleType {
  ADMIN = 'ADMIN',
  USER = 'USER',
  GUEST = 'GUEST',
}

registerEnumType(RoleType, {
  name: 'RoleType',
});

@InputType()
export class UpdateUserDto extends PartialType(CreateUserDto) {
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  id: string;
}
