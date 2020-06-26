import { Users } from '../models/users';

export class Session {
    constructor(
      public usuario: Users,
      public token: string = '',
      public permisos: string[] = null,
    ) {
    }
  }