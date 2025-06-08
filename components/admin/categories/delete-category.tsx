"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Trash2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { useDeleteCategoryMutation } from "@/api/mutations/category-mutation"
import { useQueryClient } from "@tanstack/react-query"

interface DeleteCategoryDialogProps {
  category: {
    id: number
    name: string
  }
}


export function DeleteCategoryDialog({ category }: DeleteCategoryDialogProps) {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const { toast } = useToast();
    const queryClient = useQueryClient();
  
    const deleteCategory = useDeleteCategoryMutation();
  
    const handleDelete = async () => {
      setLoading(true);
      try {
        await deleteCategory.mutateAsync(category.id);
        toast({
          title: "Category deleted",
          description: `"${category.name}" has been removed.`,
        });
        setOpen(false);
        // Invalidate to refresh the list
        queryClient.invalidateQueries({ queryKey: ["categories"] });
    } catch (error) {
        toast({
          title: "Error",
          description: "Failed to delete category.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button variant="outline" size="sm">
          <Trash2 className="w-4 h-4" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This will permanently delete the category "{category.name}". This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleDelete}
            disabled={loading}
            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
          >
            {loading ? "Deleting..." : "Delete"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
