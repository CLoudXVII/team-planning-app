import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, "Необходимо ввести пароль"),
});

export const registerSchema = z.object({
  name: z.string().trim().min(3, "Требуется минимум 3 символа"),
  email: z.string().email(),
  password: z.string().trim().min(8, "Требуется минимум 8 символов"),
});
