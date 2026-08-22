import type { SelectOption } from "@/components/ui/select";

export const PICK_UP_FORM_TYPE = "pick-up";

export const PICK_UP_FORM_OPTIONS = [
  {
    label: "Pick - Up",
    value: PICK_UP_FORM_TYPE,
  },
];

export const PICK_UP_FORM_FIELDS = [
  {
    id: "location",
    label: "Locations",
    placeholder: "Select your city",
    options: [
      { label: "Ho Chi Minh City", value: "ho-chi-minh-city" },
      { label: "Ha Noi", value: "ha-noi" },
      { label: "Da Nang", value: "da-nang" },
    ],
  },
  {
    id: "date",
    label: "Date",
    placeholder: "Select your date",
    options: [
      { label: "Today", value: "today" },
      { label: "Tomorrow", value: "tomorrow" },
      { label: "This weekend", value: "this-weekend" },
    ],
  },
  {
    id: "time",
    label: "Time",
    placeholder: "Select your time",
    options: [
      { label: "09:00", value: "09-00" },
      { label: "12:00", value: "12-00" },
      { label: "18:00", value: "18-00" },
    ],
  },
] satisfies PickUpFormField[];

export interface PickUpFormField {
  id: string;
  label: string;
  placeholder: string;
  options: SelectOption[];
}
