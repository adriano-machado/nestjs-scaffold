import { Query, Resolver, Mutation, Args } from '@nestjs/graphql';
import { Cat } from './cats.schema';
import { CreateCatDto } from './create-cat.dto';
import { CatServiceInterface } from './cats.service.interface';
import { Inject } from '@nestjs/common';

@Resolver()
export class CatsResolver {
  constructor(
    @Inject('CatsServiceInterface')
    private readonly catsService: CatServiceInterface,
  ) {}

  @Query(() => [Cat])
  async allCats() {
    return this.catsService.findAll();
  }

  @Query(() => Cat)
  async catById(@Args('id') id: string) {
    return this.catsService.findById(id);
  }

  @Mutation(() => Cat)
  async createCat(@Args('cat') cat: CreateCatDto) {
    return this.catsService.create(cat);
  }

  @Mutation(() => Cat)
  async deleteCatById(@Args('id') id: string) {
    return this.catsService.deleteById(id);
  }

  @Mutation(() => Cat)
  async updateCatById(@Args('id') id: string, @Args('cat') cat: CreateCatDto) {
    return this.catsService.updateById(id, cat);
  }
}
