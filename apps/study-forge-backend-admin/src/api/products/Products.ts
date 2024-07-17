export type Products = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  author: string | null;
  price: number | null;
  title: string | null;
  description: string | null;
  isFree: boolean | null;
};
