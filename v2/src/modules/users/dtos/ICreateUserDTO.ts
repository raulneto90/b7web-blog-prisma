export interface ICreateUserDTO {
  name: string;
  email: string;
  password: string;
  active?: boolean;
}
