import { RpcException } from '@nestjs/microservices';

export class UserNotFoundRpcException extends RpcException {
  constructor() {
    super('User Not Found');
  }
}

export class UserNotPhoneRpcException extends RpcException {
  constructor() {
    super('Phone Number not Found');
  }
}
