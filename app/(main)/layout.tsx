import type { ReactNode } from "react";
import Footer from "@/components/layout/Footer/Footer";
import { Header } from "@/components/layout/Header";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex-1 bg-[#F6F7F9]">{children}</main>
      <Footer />
    </>
  );
}
