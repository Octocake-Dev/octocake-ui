import {
  ButtonStyleProps,
  SpaceProps,
  TypographyProps,
  LayoutProps,
  PositionProps,
} from "styled-system";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonStyleProps,
    SpaceProps,
    TypographyProps,
    LayoutProps,
    PositionProps {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "ghost";
}
