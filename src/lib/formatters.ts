import { format } from "date-fns"

export const formatDate = (date: Date) => format(date, "yy.MM")
export const formatDateForFile = (date: Date) => format(date, "yy-MM-dd")
