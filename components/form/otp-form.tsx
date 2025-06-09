"use client";

import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { FormInput } from "@/components/reuseable/form-input";
import { FormMessages } from "./form-messages";
import { FormButton } from "@/components/reuseable/form-button";
import { OtpSchema, otpSchema } from "@/schemas/auth-schema";
import { useVerifyOtpMutation } from "@/api/mutations/verify-otp-mutation";
import { Input } from "@/components/ui/input";
import { Mail, Loader2 } from "lucide-react";

interface OtpFormProps {
  email: string;
  onSuccess: (data: any) => void;
}

export const OtpForm = ({ email, onSuccess }: OtpFormProps) => {
  const { mutate: verifyOtpMutation, isPending } = useVerifyOtpMutation();
  const methods = useForm<OtpSchema>({
    resolver: yupResolver(otpSchema),
  });

  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const onSubmit = (data: OtpSchema) => {
    setSuccessMessage(null);
    setErrorMessage(null);

    verifyOtpMutation({ email, otp: data.otp }, {
      onSuccess: (responseData) => {
        setSuccessMessage("OTP verified successfully!");
        methods.reset();
        onSuccess(responseData);
      },
      onError: (error: any) => {
        setErrorMessage(error.response?.data?.message || "OTP verification failed. Please try again.");
      },
    });
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4">
        <FormMessages successMessage={successMessage} errorMessage={errorMessage} />
        <div className="space-y-2 text-center">
          <p className="text-sm text-muted-foreground">A 6-digit OTP has been sent to</p>
          <p className="font-medium">{email}</p>
        </div>
        <FormInput
          name="otp"
          label="One-Time Password (OTP)"
          placeholder="Enter 6-digit OTP"
          disabled={isPending}
          icon={Mail}
          type="text"
          inputMode="numeric"
          pattern="[0-9]{6}"
          maxLength={6}
        />
        <FormButton type="submit" className="w-full" isPending={isPending}>
          Verify OTP
        </FormButton>
      </form>
    </FormProvider>
  );
}; 