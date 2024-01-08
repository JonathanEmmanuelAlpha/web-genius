import { UserResponse } from "@/models/response-api";
import { API } from "@/services/auth.service";
import React, { useEffect, useState } from "react";

export default function useToken() {
  const [token, setToken] = useState("");
  const [currentUser, setCurrentUser] = useState<any | UserResponse>(undefined);
  const [loadingUser, setLoadingUser] = useState(false);

  /** Load token from local storage */
  useEffect(() => {
    if (typeof window === "undefined") return;

    const token = window.localStorage.getItem("token");
    setToken((prev: any) => {
      if (token) return token;
      return prev;
    });
  }, []);

  /** Load user from api */
  useEffect(() => {
    if (token.length == 0 || currentUser !== undefined) return;

    setLoadingUser(true);

    fetch(`${API}/auth/me/${token}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }).then(async (request) => {
      const res: UserResponse = await request.json();
      console.log("res: ", res);

      setCurrentUser((prev: any) => {
        if (res.id) return res;
        return prev;
      });

      setLoadingUser(false);
    });
  }, [token]);

  function logout() {
    setCurrentUser(undefined);
    window.localStorage.removeItem("token");
  }

  function updateToken(authToken: any) {
    setToken(authToken);

    window.localStorage.setItem("token", authToken);
  }

  return {
    token,
    updateToken,
    currentUser,
    loadingUser,
    logout,
    setCurrentUser,
  };
}
