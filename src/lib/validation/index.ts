import * as z from "zod"

export const SignupValidation = z.object({
    name: z.string().min(2, {message: 'Too short'}),
    username: z.string().min(2, {
      message: "At least 2 characters.",
    }),
    email: z.string().email(),
    password: z.string().min(8, {message: 'Password must be 8+ chars long'})
})

export const SigninValidation = z.object({
  email: z.string().email(),
  password: z.string().min(8, {message: 'Password must be 8+ chars long'})
})