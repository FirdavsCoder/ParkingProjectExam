import * as hashing from 'bcrypt';

export const hashed = (data: string): Promise<string> => {
  const salt: number = 10;

  return hashing.hash(data, salt);
};

export const compare = (data: string, hashData: string): Promise<boolean> => {
  return hashing.compare(data, hashData);
};
