import { Cat } from './cats.schema';
import { CreateCatDto } from './create-cat.dto';
import { CatServiceInterface } from './cats.service.interface';
import { Inject, Injectable } from '@nestjs/common';
import { CatsRepositoryInterface } from './cats.repository.interface';

@Injectable()
export class CatsService implements CatServiceInterface {
  constructor(
    @Inject('CatsRepositoryInterface')
    private readonly catRepository: CatsRepositoryInterface,
  ) {}

  async create(createCatDto: CreateCatDto): Promise<Cat> {
    return this.catRepository.create(createCatDto);
  }

  async findAll(): Promise<Cat[]> {
    return this.catRepository.findAll();
  }

  async findById(id: string): Promise<Cat> {
    return this.catRepository.findById(id);
  }

  async deleteById(id: string): Promise<Cat> {
    return this.catRepository.deleteById(id);
  }

  async updateById(id: string, cat: CreateCatDto): Promise<Cat> {
    return this.catRepository.updateById(id, cat);
  }
}
