import { RpcException } from '@nestjs/microservices';

export class TransactionNotFoundRpcException extends RpcException {
  constructor() {
    super('Transaction not found_$_400');
  }
}


