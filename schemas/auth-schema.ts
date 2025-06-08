import * as yup from "yup"

export const registerSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
  role: yup.string().oneOf(["student", "instructor"]).required("Role is required"),
  terms: yup.boolean().oneOf([true], "You must accept the terms and conditions"),
})

export type RegisterSchema = yup.InferType<typeof registerSchema>

export const loginSchema = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
  remember: yup.boolean(),
});

export type LoginSchema = yup.InferType<typeof loginSchema>;
