"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useFormContext, Controller } from "react-hook-form"
import React from "react"

interface FormInputProps {
  name: string
  label: string
  type?: string
  placeholder?: string
  disabled?: boolean
  icon?: React.ElementType;
}

export const FormInput = ({ name, label, type = "text", placeholder, disabled, icon: Icon }: FormInputProps) => {
  const {
    register,
    formState: { errors },
    control,
  } = useFormContext()

  return (
    <div className="space-y-1">
      <Label htmlFor={name}>{label}</Label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <div className="relative">
            {Icon && <Icon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />}
            <Input
              id={name}
              type={type}
              placeholder={placeholder}
              value={field.value || ""}
              onChange={field.onChange}
              onBlur={field.onBlur}
              disabled={disabled}
              className={Icon ? "pl-10" : ""}
            />
          </div>
        )}
      />
      {(errors[name] as any)?.message && (
        <p className="text-red-500">{(errors[name] as any).message}</p>
      )}    
    </div>
  )
}
