export interface IUser {
  name: string;
  email: string;
  password: string;
  createdAt?: Date;
  lastLoggedIn?: Date;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IError {
  status: number;
  fields: {
    name: {
      message: string;
    };
  };
  message: string;
  name: string;
}

// date sort
//console.log(w.sort((a, b) => a - b));
