import type { CartItem } from "../../providers/ICartContextProps";

export interface ICardProps {
  title: string;
  description?: string;
  value: string | number;
  footerText?: string;
  imageUrl?: string; // nova propriedade
  onClick: (e: CartItem) => void;
}
