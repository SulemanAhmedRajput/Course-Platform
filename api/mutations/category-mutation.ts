"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { APIS } from "@/lib/API";
import axiosInstance from "../axiosInstance";
import { useToast } from "@/hooks/use-toast";

// Create Category Mutation
export const useCreateCategoryMutation = () => {
    const queryClient = useQueryClient();
    const { toast } = useToast();

    return useMutation({
        mutationFn: async (data: { name: string }) => {
            console.log("Creating category with data:", data);
            const response = await axiosInstance.post(APIS.categories.create, data);
            return response.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["categories"] });
            toast({ title: "Success", description: "Category created successfully!" });
        },
        onError: (error: any) => {
            toast({
                variant: "destructive",
                title: "Error creating category",
                description: error?.response?.data?.message || "Something went wrong",
            });
        },
    });
};

// Update Category Mutation
export const useUpdateCategoryMutation = () => {
    const queryClient = useQueryClient();
    const { toast } = useToast();

    return useMutation({
        mutationFn: async (data: { id: number; name: string }) => {
            console.log("Updating category with data:", data);
            const response = await axiosInstance.put(APIS.categories.update(data.id), { name: data.name });
            return response.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["categories"] });
            toast({ title: "Success", description: "Category updated successfully!" });
        },
        onError: (error: any) => {
            toast({
                variant: "destructive",
                title: "Error updating category",
                description: error?.response?.data?.message || "Something went wrong",
            });
        },
    });
};

// Get All Categories Query
export const useGetAllCategoriesQuery = () => {
    return useQuery({
        queryKey: ["categories"],
        queryFn: async () => {
            const response = await axiosInstance.get(APIS.categories.getAll);
            return response.data;
        },
    });
};

// Get Single Category Query
export const useGetCategoryQuery = (id: number) => {
    return useQuery({
        queryKey: ["category", id],
        queryFn: async () => {
            const response = await axiosInstance.get(APIS.categories.get(id));
            return response.data;
        },
        enabled: !!id, // Only fetch if an id is provided
    });
};

// Delete Category Mutation
export const useDeleteCategoryMutation = () => {
    const queryClient = useQueryClient();
    const { toast } = useToast();

    return useMutation({
        mutationFn: async (id: number) => {
            console.log("Deleting category with id:", id);
            const response = await axiosInstance.delete(APIS.categories.delete(id));
            return response.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["categories"] });
            toast({ title: "Category deleted successfully!" });
        },
        onError: (error: any) => {
            toast({
                variant: "destructive",
                title: "Error deleting category",
                description: error?.response?.data?.message || "Something went wrong",
            });
        },
    });
};
