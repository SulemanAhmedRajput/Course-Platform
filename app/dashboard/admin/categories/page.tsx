"use client";

import { useGetAllCategoriesQuery } from "@/api/mutations/category-mutation";
import { CategoryForm } from "@/components/admin/categories/category-form";
import { CategoriesTable } from "@/components/admin/categories/category-table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function CategoriesPage() {
  const { data, isLoading, isError } = useGetAllCategoriesQuery();

  console.log("Getting the data which is ", data)
  const categories = data?.data ?? [];

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Categories</h1>
          <p className="text-muted-foreground mt-2">Manage your product categories</p>
        </div>
        <CategoryForm />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Categories</CardTitle>
          <CardDescription>
            View and manage all your categories. You can add, edit, or delete categories as needed.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isError ? (
            <div className="text-center py-8 text-destructive">
              Error loading categories
            </div>
          ) : isLoading ? (
            <div className="text-center py-8 text-muted-foreground">Loading...</div>
          ) : (
            <CategoriesTable categories={categories} />
          )}
        </CardContent>
      </Card>
    </div>
  );
}
