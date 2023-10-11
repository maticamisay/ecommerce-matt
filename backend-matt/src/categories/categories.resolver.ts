import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CategoriesService } from './categories.service';
import { Category } from './category.schema';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Resolver(() => Category)
export class CategoriesResolver {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Query(() => [Category])
  async categories(): Promise<Category[]> {
    return this.categoriesService.findAll();
  }

  @Query(() => Category)
  async category(@Args('id', { type: () => String }) id: string): Promise<Category> {
    return this.categoriesService.findOne(id);
  }

  @Mutation(() => Category)
  async createCategory(@Args('input') input: CreateCategoryDto): Promise<Category> {
    return this.categoriesService.create(input);
  }

  @Mutation(() => Category)
  async updateCategory(@Args('input') input: UpdateCategoryDto): Promise<Category> {
    return this.categoriesService.update(input.id, input);
  }

  @Mutation(() => Category)
  async deleteCategory(@Args('id', { type: () => String }) id: string): Promise<void> {
    return this.categoriesService.remove(id);
  }
}
