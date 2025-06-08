"use client"

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { useFormContext, Controller } from "react-hook-form"

interface Option {
  label: string
  value: string
}

interface FormRadioGroupProps {
  name: string
  label: string
  options: Option[]
  disabled?: boolean
}

export const FormRadioGroup = ({ name, label, options, disabled }: FormRadioGroupProps) => {
  const {
    formState: { errors },
    control,
  } = useFormContext()

  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <RadioGroup
            value={field.value}
            onValueChange={field.onChange}
            className="flex"
            disabled={disabled}
          >
            {options.map((option) => (
              <div key={option.value} className="flex items-center space-x-2 mr-4">
                <RadioGroupItem value={option.value} id={option.value} />
                <Label htmlFor={option.value}>{option.label}</Label>
              </div>
            ))}
          </RadioGroup>
        )}
      />
      {(errors[name] as any)?.message && (
        <p className="text-red-500 text-sm">{(errors[name] as any).message}</p>
      )}
    </div>
  )
}
