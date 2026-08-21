import type { Metadata } from "next";
import HomePage from "@/features/car/components/HomePage";

export const metadata: Metadata = {
  title: "Car Rent — Find Your Perfect Ride",
  description:
    "Rent premium cars at unbeatable prices. Browse our wide selection of vehicles and book instantly.",
};

export default function Page() {
  return <HomePage />;
}
