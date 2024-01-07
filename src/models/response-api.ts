import { Role } from "./role";

export const ApiResponseType = {
  ERROR: "ERROR",
  WARNING: "WARNING",
  SUCCESS: "SUCCESS",
};

ApiResponseType.ERROR;

export interface ApiResponse {
  message: string;
  type: "ERROR" | "WARNING" | "SUCCESS";
}

export interface UserResponse {
  pseudo: string;
  picture: string;
  email: string;
  bio: string;
  roles: Array<Role>;
  createAt: string;
}
