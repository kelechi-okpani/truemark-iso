import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { ThreeDots } from "react-loader-spinner";


function ButtonComponent({
  label,
  variants = "default",
  onClick,
  className,
  loading,
  disabled,
  loaderColor = "#fff",
}: {
  label: string;
  variants?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null
    | undefined;
  onClick?: () => void;
  className?: string;
  loading?: boolean;
  disabled?: boolean;
  loaderColor?: string,

}) {
  return (
    <Button
      onClick={onClick}
      variant={variants}
      className={cn("capitalize font-semibold", className)}
      disabled={disabled || loading}
    >
      {loading ? (
        <ThreeDots
          visible={true}
          height="40"
          width="40"
          color={loaderColor}
          radius="9"
          ariaLabel="three-dots-loading"
        />
      ) : (
        label
      )}
    </Button>
  );
}

export default ButtonComponent;
