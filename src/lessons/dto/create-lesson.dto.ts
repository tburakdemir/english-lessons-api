import { IsNotEmpty } from 'class-validator';

export class CreateLessonDto {
  @IsNotEmpty()
  url: string;
  @IsNotEmpty()
  title: string;
  @IsNotEmpty()
  teacher: string;
  @IsNotEmpty()
  teacher_avatar: string;
  @IsNotEmpty()
  youtube_url: string;
  @IsNotEmpty()
  levels: string[];
  @IsNotEmpty()
  topics: string[];
}
