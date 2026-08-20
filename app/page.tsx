import { CheckBox, CheckBoxGroup } from "@/components/ui/checkbox";

const pays = [
  { label: "Credit Card", value: "card" },
  { label: "Paypal", value: "paypal" },
  { label: "Bitcoin", value: "bitcoin" },
];

export default function Home() {
  return (
    <div className="space-y-4 p-4 space-x-2">
      <CheckBox label="Chính sách" />

      <CheckBoxGroup options={pays} />
    </div>
  );
}
