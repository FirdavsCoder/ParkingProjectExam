import { Injectable } from '@nestjs/common';
import { CreateUserTariffDto } from './dto/create-user-tariff.dto';
import { UpdateUserTariffDto } from './dto/update-user-tariff.dto';
import { UserTariffRepository } from './user-tariff.repository';
import { UserTariffEntity } from './entities/user-tariff.entity';
import { ResData } from '../../lib/resData';
import { UserTariffNotFoundRpcException } from './exception/user-tariff.exception';

@Injectable()
export class UserTariffService {
  constructor(private readonly repository: UserTariffRepository) {}

  async findAll(): Promise<ResData<Array<UserTariffEntity>>> {
    const userTariffs = await this.repository.findAll();

    return new ResData('Successfully Found All User Tariffs', 200, userTariffs);
  }

  async findOneById(
    id: number,
  ): Promise<ResData<UserTariffEntity | undefined>> {
    const foundData = await this.repository.findOneById(id);

    if (!foundData) {
      throw new UserTariffNotFoundRpcException();
    }

    return new ResData('Successfully Found By Id User Tariff', 200, foundData);
  }

  async create(dto: CreateUserTariffDto): Promise<ResData<UserTariffEntity>> {
    const newUserTariff = new UserTariffEntity();

    Object.assign(newUserTariff, dto);

    const newUserTariffEntity = await this.repository.insert(newUserTariff);

    return new ResData('Successfully Created', 200, newUserTariffEntity);
  }

  async updated(dto: UpdateUserTariffDto): Promise<ResData<UserTariffEntity>> {
    const { data: foundUserTariff } = await this.findOneById(dto.id);

    if (!foundUserTariff) {
      throw new UserTariffNotFoundRpcException();
    }

    const updateProduct = await this.repository.update(dto);

    return new ResData('Successfully Updated', 201, updateProduct);
  }

  async delete(id: number): Promise<ResData<UserTariffEntity | undefined>> {
    const foundData = await this.repository.findOneById(id);

    if (!foundData) {
      throw new UserTariffNotFoundRpcException();
    }

    await this.repository.delete(id);

    return new ResData('Successfully Deleted', 200, foundData);
  }
}
