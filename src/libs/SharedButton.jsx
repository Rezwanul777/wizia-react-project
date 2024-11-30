/* eslint-disable react/prop-types */
import { Button } from "@nextui-org/react";
import { cn } from "./cn";


const SharedButton = ({ children, className, variant }) => {
  return (
    <Button
      className={cn(
        "text-Green selection:md:py-3 py-2 md:px-[16px] px-[12px] bg-primary font-workSans font-semibold leading-4 text-base",
        className,
        variant
      )}
      radius="full"
      variant={variant}
    >
      {children}
    </Button>
  );
};

export default SharedButton;