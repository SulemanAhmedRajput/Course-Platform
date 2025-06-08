"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { ReactNode } from "react"
import { Controller, useFormContext } from "react-hook-form"

interface FormCheckboxProps {
  name: string
  label?: string
  links?: { text: string; href: string }[]
  children?: ReactNode
  disabled?: boolean
}

export const FormCheckbox = ({ name, label, links = [], children, disabled }: FormCheckboxProps) => {
  const {
    register,
    formState: { errors },
    control,
  } = useFormContext()

  return (
    <div className="space-y-1">
      <div className="flex items-center space-x-2">
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <Checkbox
              id={name}
              checked={field.value}
              onCheckedChange={field.onChange}
              disabled={disabled}
            />
          )}
        />
        <Label htmlFor={name} className="text-sm font-normal">
          {children ? (
            children
          ) : (
            <>
              {label}
              {links.length > 0 && (
                <>
                  {" "}
                  {links.map((link, i) => (
                    <span key={i}>
                      <Link href={link.href} className="text-primary underline-offset-4 hover:underline">
                        {link.text}
                      </Link>
                      {i < links.length - 1 && " and "}
                    </span>
                  ))}
                </>
              )}
            </>
          )}
        </Label>
      </div>
      {(errors[name] as any)?.message && (
        <p className="text-red-500 text-sm">{(errors[name] as any).message}</p>
      )}
    </div>
  )
}
