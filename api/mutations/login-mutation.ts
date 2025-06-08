"use client";
import { APIS } from "@/lib/API";
import { LoginSchema } from "@/schemas/auth-schema";
import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../axiosInstance";
import { saveAdminSession } from "@/actions/save-token";

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: async (data: LoginSchema) => {
      const response = await axiosInstance.post(APIS.auth.login, {
        email: data.email,
        password: data.password,
        remember: data.remember,
      });
      return response.data;
    },
    onSuccess: async (data) => {
      console.log(data);
      await saveAdminSession(data?.data?.token || {}).then(res => console.log(res))
    },
  });
};
