"use client"

import { CheckIcon, XMarkIcon } from "@heroicons/react/24/solid";

interface FormMessagesProps {
  successMessage: string | null;
  errorMessage: string | null;
}

export const FormMessages = ({ successMessage, errorMessage }: FormMessagesProps) => {
  if (successMessage) {
    return (
      <div className="flex items-center gap-x-2 text-green-500 bg-green-50 p-3 rounded-md">
        <CheckIcon className="h-5 w-5" />
        <p>{successMessage}</p>
      </div>
    );
  }

  if (errorMessage) {
    return (
      <div className="flex items-center gap-x-2 text-red-500 bg-red-50 p-3 rounded-md">
        <XMarkIcon className="h-5 w-5" />
        <p>{errorMessage}</p>
      </div>
    );
  }

  return null;
}; 