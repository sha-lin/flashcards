export class User {
    constructor(
      public username: string,
      public email: string,
      public first_name?: string,
      public last_name?: string,
      public date_jioned?: Date,
      public password?: string
    ) {}
  }
