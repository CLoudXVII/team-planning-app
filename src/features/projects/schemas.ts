import { z } from "zod";

export const createProjectSchema = z.object({
  name: z.string().trim().min(1, "Необходимо ввести название проекта"),
  image: z.union([
    z.instanceof(File),
    z.string().transform((value) => value === "" ? undefined : value),
  ])
  .optional(),
  workspaceId: z.string(),
});

export const updateProjectSchema = z.object({
  name: z.string().trim().min(1, "Необходимо ввести название").optional(),
  image: z.union([
    z.instanceof(File),
    z.string().transform((value) => value === "" ? undefined : value),
  ])
  .optional(),
});
