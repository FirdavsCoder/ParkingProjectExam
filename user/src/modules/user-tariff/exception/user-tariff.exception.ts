import { RpcException } from '@nestjs/microservices';

export class UserTariffNotFoundRpcException extends RpcException {
  constructor() {
    super('User Tariff Not Found');
  }
}
