import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User])
  async users(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Query(() => User)
  async user(@Args('id', { type: () => String }) id: string): Promise<User> {
    return this.userService.findOne(id);
  }

  @Mutation(() => User)
  async createUser(@Args('input') createUserDto: CreateUserDto): Promise<User> {
    return this.userService.create(createUserDto);
  }

  @Mutation(() => User)
  async updateUser(@Args('input') updateUserDto: UpdateUserDto): Promise<User> {
    return this.userService.update(updateUserDto.id, updateUserDto);
  }

  @Mutation(() => User)
  async deleteUser(@Args('id', { type: () => String }) id: string): Promise<void> {
    return this.userService.remove(id);
  }
}
