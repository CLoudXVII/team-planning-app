import { TaskStatus } from "./types";

export function taskEnumToTitle(status: TaskStatus) {
  switch (status) {
    case "BACKLOG":
      return "Бэклог";
    case "TODO":
      return "К выполнению";
    case "IN_PROGRESS":
      return "В работе";
    case "IN_REVIEW":
      return "На рассмотрении";
    case "DONE":
      return "Выполнено";
    default:
      return "Неизвестно"
  };
};
