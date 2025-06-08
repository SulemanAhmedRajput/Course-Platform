"use client";
import { useLoginMutation } from "@/api/mutations/login-mutation";
import { LoginSchema, loginSchema } from "@/schemas/auth-schema";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { FormInput } from "../reuseable/form-input";
import { Button } from "../ui/button";
import { FormMessages } from "./form-messages";
import { FormCheckbox } from "../reuseable/form-checkbox";
import { Mail, Lock } from "lucide-react";

export const LoginForm = () => {
  const { mutate: loginMutation, isPending } = useLoginMutation();
  const methods = useForm<LoginSchema>({
    resolver: yupResolver(loginSchema),
  });

  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const onSubmit = (data: LoginSchema) => {
    setSuccessMessage(null);
    setErrorMessage(null);

    loginMutation(data, {
      onSuccess: () => {
        setSuccessMessage("Login successful!");
        methods.reset();
      },
      onError: (error: any) => {
        setErrorMessage(error.response?.data?.message || "Login failed. Please try again.");
      },
    });
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-2">
        <FormMessages successMessage={successMessage} errorMessage={errorMessage} />
        <FormInput name="email" label="Email" type="email" placeholder="m@example.com" disabled={isPending} icon={Mail} />
        <FormInput name="password" label="Password" type="password" disabled={isPending} icon={Lock} />
        <div className="flex items-center justify-between">
          <FormCheckbox
            name="remember"
            label="Remember me for 30 days"
            disabled={isPending}
          />
          <Link href="/auth/forgot-password" className="text-sm text-primary underline-offset-4 hover:underline">
            Forgot password?
          </Link>
        </div>
        <Button className="w-full" type="submit" disabled={isPending}>
          Login
        </Button>
      </form>
    </FormProvider>
  );
}; 