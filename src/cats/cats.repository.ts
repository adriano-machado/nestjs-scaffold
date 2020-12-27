import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cat, CatDocument } from './cats.schema';
import { CatsRepositoryInterface } from './cats.repository.interface';
import { CreateCatDto } from './create-cat.dto';

@Injectable()
export class CatsRepository implements CatsRepositoryInterface {
  constructor(@InjectModel(Cat.name) private catModel: Model<CatDocument>) {}

  async create(createCatDto: CreateCatDto): Promise<Cat> {
    const createdCat = new this.catModel(createCatDto);
    return createdCat.save();
  }

  async findAll(): Promise<Cat[]> {
    return this.catModel.find().exec();
  }

  async findById(id: string): Promise<Cat> {
    return this.catModel.findById(id).exec();
  }

  async deleteById(id: string): Promise<Cat> {
    return this.catModel.findByIdAndDelete(id).exec();
  }

  async updateById(id: string, cat: CreateCatDto): Promise<Cat> {
    return this.catModel
      .findByIdAndUpdate(id, { ...cat }, { new: true })
      .exec();
  }
}
