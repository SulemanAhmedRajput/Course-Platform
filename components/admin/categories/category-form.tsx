"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { useCreateCategoryMutation, useUpdateCategoryMutation } from "@/api/mutations/category-mutation";

interface CategoryFormProps {
  category?: {
    id: number;
    name: string;
  };
  trigger?: React.ReactNode;
}

export function CategoryForm({ category, trigger }: CategoryFormProps) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState(category?.name || "");
  const isEditing = !!category;

  const createCategory = useCreateCategoryMutation();
  const updateCategory = useUpdateCategoryMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) return;

    if (isEditing && category?.id) {
      await updateCategory.mutateAsync({ id: category.id, name });
    } else {
      await createCategory.mutateAsync({ name });
    }

    setOpen(false);
    setName("");
  };

  const loading = createCategory.isPending || updateCategory.isPending;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Add Category
          </Button>
        )}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{isEditing ? "Edit Category" : "Add New Category"}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Category Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter category name"
              required
            />
          </div>
          <div className="flex justify-end space-x-2">
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={loading || !name.trim()}>
              {loading ? "Saving..." : isEditing ? "Update" : "Create"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
