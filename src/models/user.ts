import { Role } from "./role";

export interface User {
  id: string;

  pseudo: string;

  picture: string;

  email: string;

  password: string;

  roles: Set<Role>;

  updateAt: string;
}
