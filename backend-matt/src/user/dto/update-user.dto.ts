import { InputType, Field, PartialType } from '@nestjs/graphql';
import { IsString, IsNotEmpty } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

@InputType()
export class UpdateUserDto extends PartialType(CreateUserDto) {
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  id: string;
}
