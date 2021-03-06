import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Lesson, LessonDocument } from './schemas/lesson.schema';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';
import { FilterLessonDto } from './dto/filter-lesson.dto';

@Injectable()
export class LessonsService {
  constructor(
    @InjectModel(Lesson.name) private lessonModel: Model<LessonDocument>,
  ) {}

  async create(createLessonDto: CreateLessonDto): Promise<Lesson> {
    const createdLesson = new this.lessonModel(createLessonDto);
    return createdLesson.save();
  }

  async findAll(query: FilterLessonDto): Promise<Lesson[]> {
    const _query = this.lessonModel.find();
    for (const queryKey of Object.keys(query)) {
      if (queryKey == 'limit' || queryKey == 'skip') continue;
      if (Array.isArray(query[queryKey])) {
        _query.where(queryKey).in(query[queryKey]);
      } else {
        _query.where(queryKey).equals(query[queryKey]);
      }
    }
    const limit = parseInt(query.limit) || 10;
    const skip = parseInt(query.skip) || 0;
    return _query.limit(limit).skip(skip).exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} lesson`;
  }

  update(id: number, updateLessonDto: UpdateLessonDto) {
    return `This action updates a #${id} lesson`;
  }

  remove(id: number) {
    return `This action removes a #${id} lesson`;
  }
}
