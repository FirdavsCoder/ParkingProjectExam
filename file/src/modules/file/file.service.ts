import { Injectable } from '@nestjs/common';
import { CreateFileDto } from './dto/create-file.dto';
import { IFileService } from './interfaces/file.service';
import { FileRepository } from './file.repository';
import { ResData } from 'src/lib/resData';
import { FileEntity } from './entities/file.entity';
import { FileNotFoundRpcException } from './exception/file.exception';

@Injectable()
export class FileService implements IFileService {
  constructor(private readonly repository: FileRepository) {}

  async findAll(): Promise<ResData<FileEntity[]>> {
    const Files = await this.repository.findAll();

    return new ResData('Successfully Found All Files', 200, Files);
  }

  async findOneById(id: number): Promise<ResData<FileEntity>> {
    const foundData = await this.repository.findOneById(id);

    if (!foundData) {
      throw new FileNotFoundRpcException();
    }

    return new ResData('Successfully Found By Id File', 200, foundData);
  }

  async create(dto: CreateFileDto): Promise<ResData<FileEntity>> {
    const newFile = new FileEntity();

    Object.assign(newFile, dto);

    const newFileEntity = await this.repository.insert(newFile);

    return new ResData('Successfully', 200, newFileEntity);
  }

  async delete(id: number): Promise<ResData<FileEntity>> {
    const foundData = await this.repository.findOneById(id);

    if (!foundData) {
      throw new FileNotFoundRpcException();
    }

    await this.repository.delete(id);

    return new ResData('Successfully delete', 200, foundData);
  }
}
