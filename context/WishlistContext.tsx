// context/WishlistContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";
import { useNotifications } from "./NotificationContext";

type Book = {
  id: number;
  title: string;
  author: string;
  cover: string;
  price: string;
};

type WishlistContextType = {
  wishlist: Book[];
  toggleWishlist: (book: Book) => void;
  isInWishlist: (book: Book) => boolean;  
};

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
  const [wishlist, setWishlist] = useState<Book[]>([]);
  const { addNotification } = useNotifications();

  const toggleWishlist = (book: Book) => {
    if (wishlist.some((b) => b.id === book.id)) {
      setWishlist((prev) => prev.filter((b) => b.id !== book.id));
      addNotification(`Removed "${book.title}" from wishlist`);
    } else {
      setWishlist((prev) => [...prev, book]);
      addNotification(`Added "${book.title}" to wishlist`);
    }
  };

  const isInWishlist = (book: Book) => wishlist.some((b) => b.id === book.id);

  return (
    <WishlistContext.Provider value={{ wishlist, toggleWishlist, isInWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) throw new Error("useWishlist must be used inside WishlistProvider");
  return context;
};
