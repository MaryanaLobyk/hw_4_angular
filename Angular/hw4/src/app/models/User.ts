import {Address} from './Address';

export interface User{
  id: number;
  name: string;
  surname: string;
  email: string;
  address: Address;
}
