import { ApiResponse } from "@/models/response-api";
import { API } from "./auth.service";
import dashify from "dashify";

export const create = async (
  title: string,
  readTime: number,
  category: string,
  thumbnail: string,
  token: string
): Promise<ApiResponse> => {
  if (title.length < 20) {
    return {
      message: "Please provide a well suited titlz",
      type: "ERROR",
    };
  }

  if (readTime < 3) {
    return {
      message: "An article can not be read under 03 minutes",
      type: "ERROR",
    };
  }

  const body = {
    title,
    readTime,
    category,
    thumbnail,
    channel: dashify(title),
  };

  const request = await fetch(`${API}/articles/create`, {
    body: JSON.stringify(body),
    method: "POST",
    headers: { "Content-Type": "application/json", "X-API-User": token },
  });

  return await request.json();
};

export const update = async (
  title: string,
  readTime: number,
  category: string,
  channel: string,
  token: string
): Promise<ApiResponse> => {
  if (title.length < 20) {
    return {
      message: "Please provide a well suited titlz",
      type: "ERROR",
    };
  }

  if (readTime < 3) {
    return {
      message: "An article can not be read under 03 minutes",
      type: "ERROR",
    };
  }

  const body = { title, readTime, category, channel: dashify(title) };

  const request = await fetch(`${API}/articles/update/${channel}`, {
    body: JSON.stringify(body),
    method: "POST",
    headers: { "Content-Type": "application/json", "X-API-User": token },
  });

  return await request.json();
};

export const get = async (channel: string): Promise<ApiResponse> => {
  const request = await fetch(`${API}/articles/${channel}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  return await request.json();
};

export const remove = async (
  channel: string,
  token: string
): Promise<ApiResponse> => {
  const request = await fetch(`${API}/articles/delete/${channel}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json", "X-API-User": token },
  });

  return await request.json();
};
