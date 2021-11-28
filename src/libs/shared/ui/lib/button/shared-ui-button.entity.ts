import { ButtonHTMLAttributes, DOMAttributes } from "react";

export interface ButtonProps {
   id: ButtonHTMLAttributes<HTMLButtonElement>["id"];
   type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
   onClick?: DOMAttributes<HTMLButtonElement>["onClick"];
   color?: "primary" | "disabled" | "load";
   size?: "md";
   disabled?: boolean;
   load?: boolean;
}
