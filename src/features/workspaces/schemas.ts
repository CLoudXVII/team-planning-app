import { z } from "zod";

export const createWorkspaceSchema = z.object({
  name: z.string().trim().min(1, "Необходимо ввести название"),
  image: z.union([
    z.instanceof(File),
    z.string().transform((value) => value === "" ? undefined : value),
  ]).optional(),
});

export const updateWorkspaceSchema = z.object({
  name: z.string().trim().min(1, "Необходимо ввести название").optional(),
  image: z.union([
    z.instanceof(File),
    z.string().transform((value) => value === "" ? undefined : value),
  ]).optional(),
});
