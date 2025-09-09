import { Button } from "@/components/ui/button";
import clsx from "clsx";

export default function PrimaryButton({
  children,
  className,
  type = "button",
  ...props
}) {
  return (
    <Button
      type={type}
      className={clsx(
        "bg-orange-600 hover:bg-orange-700 cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
}
