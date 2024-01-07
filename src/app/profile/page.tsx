import { me } from "@/services/auth.service";
import React from "react";

export default async function Profile() {
  await me("email");

  return <div>page</div>;
}
