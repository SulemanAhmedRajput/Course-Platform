"use client";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterSchema, registerSchema } from "@/schemas/auth-schema";
import { useRegisterMutation } from "@/api/mutations/register-mutation";
import React, { useState } from "react";
import { FormInput } from "@/components/reuseable/form-input";
import { FormRadioGroup } from "@/components/reuseable/form-radio-group";
import { FormCheckbox } from "@/components/reuseable/form-checkbox";
import { FormMessages } from "./form-messages";
import { FormButton } from "@/components/reuseable/form-button";
import { User, Mail, Lock } from "lucide-react";

export const RegisterForm = () => {
  const { mutate: registerMutation, isPending } = useRegisterMutation();
  const methods = useForm<RegisterSchema>({
    resolver: yupResolver(registerSchema),
  });

  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const onSubmit = (data: RegisterSchema) => {
    setSuccessMessage(null);
    setErrorMessage(null);

    registerMutation(data, {
      onSuccess: () => {
        setSuccessMessage("Registration successful!");
        methods.reset();
      },
      onError: (error: any) => {
        setErrorMessage(error.response?.data?.message || "Registration failed. Please try again.");
      },
    });
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-2">
        <FormMessages successMessage={successMessage} errorMessage={errorMessage} />
        <FormInput name="name" label="Full Name" placeholder="John Doe" disabled={isPending} icon={User} />
        <FormInput name="email" label="Email" type="email" placeholder="m@example.com" disabled={isPending} icon={Mail} />
        <FormInput name="password" label="Password" type="password" disabled={isPending} icon={Lock} />
        <FormInput name="confirmPassword" label="Confirm Password" type="password" disabled={isPending} icon={Lock} />
        <FormRadioGroup
          name="role"
          label="Role"
          options={[
            { label: "Student", value: "student" },
            { label: "Instructor", value: "instructor" },
          ]}
          disabled={isPending}
        />
        <FormCheckbox
          name="terms"
          label="I agree to the"
          links={[
            { text: "Terms of Service", href: "/terms" },
            { text: "Privacy Policy", href: "/privacy" },
          ]}
          disabled={isPending}
        />
        <FormButton type="submit" className="w-full" isPending={isPending}>
          Create Account
        </FormButton>
      </form>
    </FormProvider>
  );
};
