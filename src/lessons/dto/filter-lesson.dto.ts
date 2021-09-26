import { IsOptional } from 'class-validator';

export class FilterLessonDto {
  @IsOptional()
  teacher: string[];
  @IsOptional()
  levels: string[];
  @IsOptional()
  topics: string[];
}
