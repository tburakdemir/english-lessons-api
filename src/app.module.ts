import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LessonsModule } from './lessons/lessons.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    LessonsModule,
    MongooseModule.forRoot(process.env.DATABASE_CONN_URI),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
