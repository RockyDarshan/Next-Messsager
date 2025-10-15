import { email, z } from "zod";

export const userNameValidation = z
  .string()
  .min(3, "username must be atleast 3 character long")
  .max(20, "username should not be more than 20  character long")
  .regex(
    /^[a-zA-Z0-9_]{3,16}$/,
    "username should not contain speical character"
  );

export const signUpSchema = z.object({
  username: userNameValidation,
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(3, { message: "password must be atleast 3 character long" }),
});
