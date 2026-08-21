import type { Metadata } from "next";
import CarDetailPage from "@/features/car/components/CarDetailPage";

export const metadata: Metadata = {
  title: "Car Detail — Car Rent",
  description: "View details, specs and availability for this rental car.",
};

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <CarDetailPage id={id} />;
}
