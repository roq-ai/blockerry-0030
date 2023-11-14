import { GetQueryInterface } from 'interfaces';

export interface ServiceInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface ServiceGetQueryInterface extends GetQueryInterface {
  id?: string;
}
