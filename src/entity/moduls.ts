export interface Album{
  id: number;
  userId: number;
  title: string;
}

export enum Category{
  nothing = "nothing",
  important="important",
  possiblyImportant="possibly important",
  noMatter="no matter",
}

export interface Product{
  id: number;
  name: string;
  price: number;
  description: string;
  category: Category;
}

export const products = [
  {
    id:1,
    name: 'first product',
    price: 392,
    description: 'something you need',
    category: Category.important
  },
  {
    id:2,
    name: 'second product',
    price: 401,
    description: 'something you might need',
    category: Category.possiblyImportant
  },
  {
    id:3,
    name: 'third product',
    price: 432,
    description: 'something you don`t need',
    category: Category.noMatter
  },
  {
    id:4,
    name: 'fourth product',
    price: 532,
    description: 'something you don`t need',
    category: Category.noMatter
  }
]
