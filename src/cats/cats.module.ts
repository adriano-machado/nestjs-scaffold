import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsService } from './cats.service';
import { Cat, CatSchema } from './cats.schema';
import { CatsResolver } from './cats.resolver';
import { CatsRepository } from './cats.repository';

@Module({
  imports: [MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }])],
  providers: [
    CatsResolver,
    {
      provide: 'CatsRepositoryInterface',
      useClass: CatsRepository,
    },
    {
      provide: 'CatsServiceInterface',
      useClass: CatsService,
    },
  ],
})
export class CatsModule {}
