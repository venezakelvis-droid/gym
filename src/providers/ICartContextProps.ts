export interface CartItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

export interface CartContextProps {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  totalItems: number;
}