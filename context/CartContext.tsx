// context/CartContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";

type CartItem = {
  id: number;
  title: string;
  author: string;
  cover: string;
  price: number;
  originalPrice?: number | null;
  discount?: string | null;
  category: string;
  publisher?: string;
  language?: string;
  rating?: number;
  qty: number;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  updateQty: (id: number, type: "inc" | "dec") => void;
  total: number;
  cartCount: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.id === item.id);
      if (existing) {
        return prev.map((c) =>
          c.id === item.id ? { ...c, qty: c.qty + 1 } : c
        );
      } else {
        return [...prev, { ...item, qty: 1 }];
      }
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQty = (id: number, type: "inc" | "dec") => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, qty: type === "inc" ? item.qty + 1 : Math.max(1, item.qty - 1) }
          : item
      )
    );
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQty, total, cartCount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
};
