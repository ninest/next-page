import { format } from "date-fns";

export function formatDate(date: Date) {
  return format(date, "EEEE, MMMM d, yyyy");
}

export function formatShortDate(date: Date) {
  return format(date, "MMM d, yy");
}
