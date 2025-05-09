import { z } from "zod";

import { TaskStatus } from "./types";

export const createTaskSchema = z.object({
  name: z.string().trim().min(1, "Необходимо ввести название"),
  status: z.nativeEnum(TaskStatus, { required_error: "Необходимо выбрать состояние" }),
  workspaceId: z.string().trim().min(1, "Required"),
  projectId: z.string().trim().min(1, "Необходимо выбрать проект"),
  dueDate: z.coerce.date({
    errorMap: () => {
      return { message: "Необходимо указать дату" }
    },
  }),
  assigneeId: z.string().trim().min(1, "Необходимо выбрать исполнителя"),
  description: z.string().optional(),
});
