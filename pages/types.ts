export type RootStackParamList = {
  BrowseScreen: undefined;
  BuyPage: { book: Book }; 
};

  export interface Book {
    id: number;
    title: string;
    author: string;
    frontImage?: string;
    backImage?: string;
    image?: string;
    cover: string;
    price: string;
    originalPrice?: string;
    discount?: string;
    category: string;
    publisher?: string;
    language?: string;
    rating: number;
  }
  