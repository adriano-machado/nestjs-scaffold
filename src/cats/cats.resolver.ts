import { Query, Resolver, Mutation, Args } from '@nestjs/graphql';
import { CatsService } from './cats.service';
import { Cat } from './cats.schema';
import { CreateCatDto } from './create-cat.dto';

@Resolver()
export class CatsResolver {
  constructor(private catsService: CatsService) {}

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
