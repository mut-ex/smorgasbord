declare global {
  type Category =
    | "none"
    | "all"
    | "baking"
    | "drawing"
    | "painting"
    | "calligraphy & lettering"
    | "digital art"
    | "sculpting"
    | "3d prints"
    | "electronics"
    | "sewing & embroidery"
    | "jewelry & pins"
    | "paracord"
    | "printmaking";

  interface ItemImage {
    thumbnail: string;
    source: string;
    aspect_ratio: string;
  }

  interface Item {
    title: string,
    category: Category,
    image: ItemImage,
    date: Date,
  }

}

export {};
