
/**
 * Strips nulls from unsafe/unknown data, converts to string or returns empty string
 * @param value string value to clean
 */
export const nullStripper = (value: string): string => {
  if (value != null && typeof(value) === "string") {
    return value;
  }
  else if (value != null && typeof(value) !== "undefined" && typeof(value) !== "string") {
    return value + "";
  }
  else {
    return "";
  }
};