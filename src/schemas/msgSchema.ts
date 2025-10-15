import { z } from "zod";

export const MsgSchema = z.object({
  content: z
    .string()
    .min(10, { message: "conetent must be atleast 10 character" })
    .max(300, { message: "content should not exceed 300 characters" }),
});
