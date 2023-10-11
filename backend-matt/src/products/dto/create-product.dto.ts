import { InputType, Field } from '@nestjs/graphql';
import { IsString, IsNotEmpty, IsNumber, IsMongoId } from 'class-validator';

@InputType()
export class CreateProductDto {
  @Field()
  @IsString()
  @IsNotEmpty()
  name: string;

  @Field()
  @IsMongoId()
  @IsNotEmpty()
  category: string;

  @Field()
  @IsNumber()
  @IsNotEmpty()
  price: number;
}
