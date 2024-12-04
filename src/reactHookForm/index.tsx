import { z } from "zod";

const registerForm = z
  .object({
    email: z.string().trim().email({ message: "Invalid email address" }),
    name: z.string().trim().min(4, "Name minimum 4 characters"),
    password: z
      .string({
        required_error: "Required",
      })
      .min(6, { message: "Password minimum 6 characters" })
      .max(255, { message: "Password maximum 255 characters" }),

    confirmPassword: z.string({
      required_error: "Required",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

const loginForm = z.object({
  email: z.string().trim().email({ message: "Invalid email address" }),
  password: z
    .string({
      required_error: "Required",
    })
    .min(6, { message: "Password minimum 6 characters" })
    .max(255, { message: "Password maximum 255 characters" }),
});

const productsForm = z.object({
  title: z.string().trim().min(6, "Title minimum 6 characters"),
  category: z.string().trim().min(2, "Category minimum 2 characters"),
  price: z.number().min(0.01, "Price must be greater than 0.01"),
  stock: z.number().min(1, "Stock must be greater than or equal 1"),
});

const todoForm = z.object({
  title: z.string().trim().min(1, "Title minimum 1 characters"),
  description: z.string().trim().optional(),
});

export { registerForm, loginForm, productsForm, todoForm };
