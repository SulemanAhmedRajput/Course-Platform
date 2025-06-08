"use client";
import { APIS } from "@/lib/API";
import { RegisterSchema } from "@/schemas/auth-schema";
import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../axiosInstance";
import { saveAdminSession } from "@/actions/save-token";

export const useRegisterMutation = () => {
  return useMutation({
    mutationFn: async (data: RegisterSchema) => {
      delete data?.terms
      const response = await axiosInstance.post(APIS.auth.register, {
        name: data.name,
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword,
        role: data.role,
      });
      return response.data;
    },
    onSuccess: async (data) => {
      console.log(data);
      await saveAdminSession({
        accessToken: data?.data?.token?.accessToken || "",
        refreshToken: data?.data?.token?.refreshToken || "",
        email: data?.data?.email || "",
        role: data?.data?.role || "",
        name: data?.data?.name || "",
      });
    }
  });
};
