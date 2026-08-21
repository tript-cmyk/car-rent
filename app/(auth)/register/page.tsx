import type { Metadata } from "next";
import RegisterPage from "@/features/auth/components/RegisterPage";

export const metadata: Metadata = {
  title: "Register — Car Rent",
  description: "Create your Car Rent account and start renting today.",
};

export default function Page() {
  return <RegisterPage />;
}
