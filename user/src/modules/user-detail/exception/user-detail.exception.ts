import { RpcException } from '@nestjs/microservices';

export class UserDetailNotFoundRpcException extends RpcException {
  constructor() {
    super('UserDetail Not Found');
  }
}
