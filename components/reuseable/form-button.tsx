import { Button, ButtonProps } from "../ui/button";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface FormButtonProps extends ButtonProps {
  isPending: boolean;
}

const FormButton = ({ children, isPending, ...props }: FormButtonProps) => {
    return (
        <Button {...props} className={cn(props.className, "flex items-center justify-center")} disabled={isPending || props?.disabled || false}>
            {isPending ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
            {children}
        </Button>
    );
};

export { FormButton };