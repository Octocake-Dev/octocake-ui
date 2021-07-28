import {
  ButtonStyleProps,
  SpaceProps,
  TypographyProps,
  LayoutProps,
  PositionProps,
} from "styled-system";

export type SystemProps = ButtonStyleProps &
  SpaceProps &
  TypographyProps &
  LayoutProps &
  PositionProps;

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "ghost";
}
