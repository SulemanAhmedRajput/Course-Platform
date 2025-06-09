"use client";

import { APIS } from "@/lib/API";
import { RegisterSchema } from "@/schemas/auth-schema";
import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../axiosInstance";

export const useRegisterMutation = () => {

  return useMutation({
    mutationFn: async (data: RegisterSchema) => {
      const { name, email, password, confirmPassword, role } = data;

      const response = await axiosInstance.post(APIS.auth.register, {
        name,
        email,
        password,
        confirmPassword,
        role,
      });

      return response.data;
    },
    onSuccess: async (data) => {
    },
  });
};
