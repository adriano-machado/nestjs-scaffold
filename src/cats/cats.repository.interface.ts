import { Cat } from './cats.schema';
import { CreateCatDto } from './create-cat.dto';

export interface CatsRepositoryInterface {
  create(data: CreateCatDto): Promise<Cat>;

  findAll(): Promise<Cat[]>;

  findById(id: string): Promise<Cat>;

  deleteById(id: string): Promise<Cat>;

  updateById(id: string, cat: CreateCatDto): Promise<Cat>;
}
