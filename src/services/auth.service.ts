import { ALLOWED_METHOD, AUTH_FORM_NAMES } from "@/utils/contants";
import {
  ApiResponse,
  ApiResponseType,
  UserResponse,
} from "@/models/response-api";

export const API = "http://localhost:8080/api/v1";

export const login = async (email: string, password: string): Promise<any> => {
  const body = { username: email, password: password };

  const request = await fetch(`${API}/auth/login`, {
    body: JSON.stringify(body),
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  const res: any = await request.json();

  return res;
};

export const signup = async (
  email: string,
  password: string,
  passwordConf: string
): Promise<ApiResponse> => {
  if (password.length < 8) {
    return {
      message: "Please provide a password with more than 07 characters",
      type: "ERROR",
    };
  }

  if (password !== passwordConf) {
    return {
      message: "The 02 passwords do not match",
      type: "ERROR",
    };
  }

  const body = {
    email: email,
    password: password,
    passwordConf: passwordConf,
  };

  const request = await fetch(`${API}/auth/signup`, {
    body: JSON.stringify(body),
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  const res: ApiResponse = await request.json();

  return res;
};
