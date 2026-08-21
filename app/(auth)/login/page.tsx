import type { Metadata } from "next";
import LoginPage from "@/features/auth/components/LoginPage";

export const metadata: Metadata = {
  title: "Login — Car Rent",
  description: "Sign in to your Car Rent account.",
};

export default function Page() {
  return <LoginPage />;
}
