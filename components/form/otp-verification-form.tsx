"use client";

import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FormInput } from "@/components/reuseable/form-input";
import { FormButton } from "@/components/reuseable/form-button";
import { FormMessages } from "./form-messages";
import { useVerifyOtpMutation } from "@/api/mutations/verify-otp-mutation";
import { Mail } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/components/auth/auth-provider";
import { Button } from "@/components/ui/button";
import { useFontStore } from "@/hooks/use-font";
import { cn } from "@/lib/utils";

interface OtpVerificationFormProps {
  email: string;
  onSuccess: () => void;
  onBackToLogin: () => void;
  isEnableBackToLogin?: boolean;
}

const otpSchema = yup.object({
  otp: yup.string().length(6, "OTP must be 6 digits").required("OTP is required"),
});

type OtpSchema = yup.InferType<typeof otpSchema>;

export const OtpVerificationForm = ({ email, onSuccess, onBackToLogin, isEnableBackToLogin = false }: OtpVerificationFormProps) => {
  const { selectedFont } = useFontStore()
  const { mutate: verifyOtpMutation, isPending } = useVerifyOtpMutation();
  const { login } = useAuth();
  const methods = useForm<OtpSchema>({
    resolver: yupResolver(otpSchema),
  });

  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const onSubmit = (data: OtpSchema) => {
    setSuccessMessage(null);
    setErrorMessage(null);

    verifyOtpMutation({ email, otp: data.otp }, {
      onSuccess: (responseData: any) => {
        setSuccessMessage("OTP verified successfully!");
        methods.reset();
        // Assuming responseData contains user info and tokens for login
        login({
          email: responseData?.data?.user?.email || "",
          name: responseData?.data?.user?.name || "",
          role: responseData?.data?.user?.role || "",
        });
        onSuccess(); // Close the dialog or navigate
      },
      onError: (error: any) => {
        setErrorMessage(error.response?.data?.message || "OTP verification failed. Please try again.");
      },
    });
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className={cn("space-y-4", selectedFont)}>
        <FormMessages successMessage={successMessage} errorMessage={errorMessage} />
        <h2 className="text-2xl font-bold">Verify your email</h2>
        <p className="text-sm text-center text-muted-foreground">
          A 6-digit OTP has been sent to <span className="font-medium">{email}</span>. Please enter it below.
        </p>
        <FormInput
          name="otp"
          label="OTP"
          type="text"
          placeholder="______"
          disabled={isPending}
          icon={Mail}
        />
        <FormButton type="submit" className="w-full" isPending={isPending}>
          Verify OTP
        </FormButton>
        {isEnableBackToLogin && <Button type="button" variant="outline" className="w-full" onClick={onBackToLogin} disabled={isPending}>
          Back to Login
        </Button>}
      </form>
    </FormProvider>
  );
}; 