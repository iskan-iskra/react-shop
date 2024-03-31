export type TiProduct = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  rating: TiProductRating;
};

type TiProductRating = {
  count: number;
  rate: number;
};
