import { ApiResponse, UserResponse } from "@/models/response-api";
import { API } from "@/services/auth.service";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";

const AuthContext = React.createContext<any>(undefined);

export function useAuth() {
  return useContext(AuthContext);
}

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const [token, setToken] = useState(undefined);
  const [currentUser, setCurrentUser] = useState<any | UserResponse>(undefined);
  const [loadingUser, setLoadingUser] = useState(true);

  const value = {
    currentUser,
    loadingUser,
    updateToken,
  };

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
    if (typeof token !== "string" || currentUser !== undefined) return;

    setLoadingUser(true);

    fetch(`${API}/auth/me/${token}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }).then(async (request) => {
      const res: UserResponse = await request.json();
      setCurrentUser(res);

      setLoadingUser(false);
    });
  }, [token]);

  function updateToken(token: any, user: UserResponse) {
    setToken(token);

    window.localStorage.setItem("token", token);
  }

  function logout() {
    setCurrentUser(undefined);
    window.localStorage.removeItem("token");
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
