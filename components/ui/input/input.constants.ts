
export enum INPUT_STATUS {
  DEFAULT = "default",
  SUCCESS = "success",
  ERROR = "error",
  PROCESSING = "processing",
}

export enum INPUT_TYPES {
  TEXT = "text",
  EMAIL = "email",
  PASSWORD = "password",
  NUMBER = "number",
  SEARCH = "search",
  TEL = "tel",
  URL = "url",
  DATE = "date",
  TIME = "time",
}

export const TYPE_HAS_AUTO_ICON = new Set<INPUT_TYPES>([
  INPUT_TYPES.EMAIL,
  INPUT_TYPES.SEARCH,
  INPUT_TYPES.TEL,
  INPUT_TYPES.URL,
  INPUT_TYPES.DATE,
  INPUT_TYPES.TIME,
]);
