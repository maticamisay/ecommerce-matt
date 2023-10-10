import { InputType, Field, PartialType } from '@nestjs/graphql';
import { CreateProductDto } from './create-product.dto';

@InputType()
export class UpdateProductDto extends PartialType(CreateProductDto) {
  @Field(() => String)
  id: string;
}
