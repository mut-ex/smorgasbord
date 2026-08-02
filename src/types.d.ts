declare global {
  type Category =
    | "none"
    | "all"
    | "3d printing"
    | "baking"
    | "calligraphy & lettering"
    | "coding"
    | "digital art"
    | "drawing"
    | "electronics & programming"
    | "jewelry & pins"
    | "painting"
    | "paracord"
    | "printmaking"
    | "sculpting"
    | "sewing & embroidery";

  interface ItemImage {
    thumbnail: string;
    source: string;
    aspect_ratio: string;
  }

  interface Item {
    title: string,
    category: Category,
    image: ItemImage,
    date: string,
    description?: string,
  }

}

export {};
