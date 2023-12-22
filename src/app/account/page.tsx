import { usePathname, useSearchParams } from "next/navigation";
import ForgotPassword from "./ForgotPassword";
import Login from "./Login";

export default function Page({
  searchParams,
}: {
  searchParams: { action: string };
}) {
  return (
    <>
      {searchParams.action === "login" && <Login />}
      {searchParams.action === "forgot-password" && <ForgotPassword />}
    </>
  );
}
