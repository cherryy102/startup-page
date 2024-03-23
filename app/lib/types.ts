export type Item = {
  id: number;
  url: string;
  name: string;
  description: string;
};

export type Category = {
  id: number;
  name: string;
  items: Item[];
};
