import useToken from "@/hooks/useToken";
import { ApiResponse, UserResponse } from "@/models/response-api";
import { API } from "@/services/auth.service";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";

export interface AuthContextType {
  currentUser: UserResponse | any;
  loadingUser: boolean;
  logout: () => void;
}

const AuthContext = React.createContext<AuthContextType | null>(null);

export function useAuth() {
  return useContext(AuthContext) as AuthContextType;
}

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { token, currentUser, loadingUser, logout, setCurrentUser } =
    useToken();

  const value = {
    currentUser,
    loadingUser,
    logout,
    setCurrentUser,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
