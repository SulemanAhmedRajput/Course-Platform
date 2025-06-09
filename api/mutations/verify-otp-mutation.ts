"use client";

import { APIS } from "@/lib/API";
import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../axiosInstance";

interface VerifyOtpPayload {
  email: string;
  otp: string;
}

export const useVerifyOtpMutation = () => {
  return useMutation({
    mutationFn: async (data: VerifyOtpPayload) => {
      const response = await axiosInstance.post(APIS.auth.verifyOtp, {
        email: data.email,
        otp: data.otp,
      });
      return response.data;
    },
    onSuccess: (data) => {
      console.log("OTP verification successful:", data);
      // No direct cookie saving here, AuthDialog will handle login via useAuth
    },
    onError: (error) => {
      console.error("OTP verification failed:", error);
    },
  });
}; 