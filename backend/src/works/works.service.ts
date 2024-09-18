import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Work, WorkDocument } from './work.schema';

@Injectable()
export class WorksService {
  constructor(@InjectModel(Work.name) private workModel: Model<WorkDocument>) {}

  async findAll(): Promise<Work[]> {
    return this.workModel.find().exec();
  }

  async create(work: Work): Promise<Work> {
    const newWork = new this.workModel(work);
    return newWork.save();
  }

  async update(id: string, work: Work): Promise<Work> {
    return this.workModel.findByIdAndUpdate(id, work, { new: true }).exec();
  }

  async delete(id: string): Promise<any> {
    return this.workModel.findByIdAndDelete(id).exec();
  }
}
