import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from '@nestjs/mongoose';



@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest', { keepAlive: true, keepAliveInitialDelay: 300000 })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
