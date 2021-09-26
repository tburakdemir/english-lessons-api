import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LessonsModule } from './lessons/lessons.module';

@Module({
  imports: [
    LessonsModule,
    MongooseModule.forRoot('mongodb://localhost/engvid'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
