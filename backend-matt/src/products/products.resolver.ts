import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ProductsService } from './products.service';
import { Product } from './products.schema';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Resolver(() => Product)
export class ProductsResolver {
  constructor(private readonly productsService: ProductsService) {}

  @Query(() => [Product])
  async products(): Promise<Product[]> {
    return this.productsService.findAll();
  }

  @Query(() => Product)
  async product(@Args('id', { type: () => String }) id: string): Promise<Product> {
    return this.productsService.findOne(id);
  }

  @Mutation(() => Product)
  async createProduct(@Args('input') createProductDto: CreateProductDto): Promise<Product> {
    return this.productsService.create(createProductDto);
  }

  @Mutation(() => Product)
  async updateProduct(@Args('input') updateProductDto: UpdateProductDto): Promise<Product> {
    return this.productsService.update(updateProductDto.id, updateProductDto);
  }

  @Mutation(() => Product)
  async deleteProduct(@Args('id', { type: () => String }) id: string): Promise<void> {
    return this.productsService.remove(id);
  }
}
