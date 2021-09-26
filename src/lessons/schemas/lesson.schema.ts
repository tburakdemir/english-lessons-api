import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LessonDocument = Lesson & Document;

@Schema()
export class Lesson {
  @Prop()
  url: string;
  @Prop()
  title: string;
  @Prop()
  teacher: string;
  @Prop()
  teacher_avatar: string;
  @Prop()
  youtube_url: string;
  @Prop([String])
  levels: string[];
  @Prop([String])
  topics: string[];
}

export const LessonSchema = SchemaFactory.createForClass(Lesson);
