import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from '@nestjs/mongoose';
import { ProductsModule } from './Products/products.module';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';



@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest', { keepAlive: true, keepAliveInitialDelay: 300000 }),
            GraphQLModule.forRoot({
              autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
              sortSchema: true
            }),
            ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
