import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { CatsModule } from './cats/cats.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    CatsModule,
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    MongooseModule.forRoot(
      'mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false',
      { useFindAndModify: false },
    ),
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
