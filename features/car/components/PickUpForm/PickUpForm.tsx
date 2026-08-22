"use client";

import { Radio } from "@/components/ui/radio";
import { Select } from "@/components/ui/select";
import {
  PICK_UP_FORM_FIELDS,
  PICK_UP_FORM_OPTIONS,
  PICK_UP_FORM_TYPE,
} from "./pick-up-form.constants";

const PickUpForm = () => {
  return (
    <section className="w-full rounded-lg bg-white p-4 sm:p-6">
      <Radio
        name="rental-search-type"
        value={PICK_UP_FORM_TYPE}
        options={PICK_UP_FORM_OPTIONS}
      />

      <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:gap-0">
        {PICK_UP_FORM_FIELDS.map((field, index) => (
          <div
            key={field.id}
            className="flex flex-col border-secondary-100 sm:flex-1 sm:border-l sm:pl-6 sm:first:border-l-0 sm:first:pl-0"
          >
            <span className="text-base font-semibold text-secondary-500">
              {field.label}
            </span>

            <div className="mt-1">
              <Select
                name={`pick-up-${field.id}`}
                options={field.options}
                placeholder={field.placeholder}
              />
            </div>

            {index < PICK_UP_FORM_FIELDS.length - 1 && (
              <div className="mt-4 h-px bg-secondary-100 sm:hidden" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default PickUpForm;
