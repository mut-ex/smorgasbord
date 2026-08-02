const thumbs = import.meta.glob<string>("./assets/thumbs/*.webp", {
  eager: true,
  import: "default",
});

const sources = import.meta.glob<string>("./assets/*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
});

export const img = (name: string, aspect_ratio: string): ItemImage => ({
  thumbnail: thumbs[`./assets/thumbs/${name}.webp`]!,
  source: sources[`./assets/${name}.png`]!,
  aspect_ratio,
});

export const items: Item[] = [
      {
    title: "Parametric Vase-Mode Organizer",
    category: "3d printing",
    image: img("parametric_organizer", "5 / 7"),
    date: "2026-05-21",
    description: "You can customize it, and find the CAD files  [here](https://makerworld.com/en/models/2830562-customizable-vase-mode-organizer#profileId-3207306)"
  },
    {
    title: "Macro Keypad",
    category: "electronics & programming",
    image: img("macro_keypad", "1 / 1"),
    date: "2026-03-28",
    description: "Found myself in need of a macro keypad, so of course I made one myself! Build instructions are [here](https://www.printables.com/model/1254370-simple-mechanical-keyboardmacropad) if you'd like to build one for yourself!"
  },
  {
    title: "LSP, courage & spongebob pins",
    category: "jewelry & pins",
    image: img("lsp_courage_spongebob_pins", "1 / 1"),
    date: "2022-08-17",
    description:
      "These were primarily an experiment, and I love how they turned out! Each character started as a vector drawing in Affinity Designer, which I then brought into Fusion 360 and extruded into a pin base with recessed sections. After printing them on a resin printer, I painted the recesses with acrylics and topped everything with UV-curing resin for that glossy faux-enamel finish.",
  },
  {
    title: "duo the owl",
    category: "sculpting",
    image: img("duo_render", "5 / 4"),
    date: "2026-03-28",
  },
  {
    title: "jake the dog",
    category: "sculpting",
    image: img("jake_the_dog_1", "5 / 4"),
    date: "2026-02-02",
  },
  {
    title: "cheeseburger",
    category: "sculpting",
    image: img("cheeseburger", "5 / 4"),
    date: "2026-03-28",
  },
  {
    title: "foghorn leghorn",
    category: "sewing & embroidery",
    image: img("foghorn_leghorn", "1 / 1"),
    date: "2025-06-29",
  },
  {
    title: "fox (watercolor)",
    category: "painting",
    image: img("fox", "5 / 4"),
    date: "2023-03-25",
  },
  {
    title: "chocolate babka",
    category: "baking",
    image: img("babka", "5 / 4"),
    date: "2023-03-25",
  },
  {
    title: "white castle slider (acrylic)",
    category: "painting",
    image: img("white_castle_slider", "5 / 4"),
    date: "2021-09-21",
  },
  {
    title: "red velvet cake",
    category: "baking",
    image: img("red_velvet", "5 / 4"),
    date: "2023-06-16",
    description:
      "I went a bit old-school with this red velvet cake and skipped the cream cheese frosting in favor of ermine — the original frosting for this cake. It's made by cooking flour and milk into a paste before whipping it with butter and sugar. It's not the best choice for detailed decorating, but it has a nice silky texture and is considerably less sweet than American buttercream.",
  },
  {
    title: "birthday bear",
    category: "printmaking",
    image: img("bear_stamp", "5 / 7"),
    date: "2021-08-25",
  },
  {
    title: "green beetle (watercolor)",
    category: "painting",
    image: img("green_beetle", "5 / 4"),
    date: "2021-06-02",
  },
  {
    title: "boo!",
    category: "sculpting",
    image: img("boo", "1 / 1"),
    date: "2024-10-31",
  },
  {
    title: "brown butter chocolate chunk blondies",
    category: "baking",
    image: img("blondies", "4 / 5"),
    date: "2024-10-06",
  },
  {
    title: "cake slices",
    category: "sculpting",
    image: img("cake_slices", "1 / 1"),
    date: "2024-10-06",
  },
  {
    title: "ice cream truck",
    category: "sculpting",
    image: img("icecream_truck", "5 / 4"),
    date: "2024-10-06",
  },
  {
    title: "Pug Plushie",
    category: "sewing & embroidery",
    image: img("pug_plushie", "1 / 1"),
    date: "2024-05-09",
  },
  {
    title: "Cartoon Cake Slice",
    category: "baking",
    image: img("cartoon_cake", "1 / 1"),
    date: "2023-11-26",
  },
  {
    title: "Hank (colored pencil)",
    category: "drawing",
    image: img("hank_1", "2567 / 1712"),
    date: "2023-03-11",
  },
  {
    title: "Flying Saucer",
    category: "sculpting",
    image: img("flying_saucer", "4 / 5"),
    date: "2023-03-20",
  },
  {
    title: "Macarons",
    category: "baking",
    image: img("macarons", "3 / 2"),
    date: "2023-03-20",
    description:
      "I believe this was my fourth, maybe fifth attempt at making macarons. I am really proud of how these turned out! The best part: with so many yolks left over from the shells, I put them straight to use in a chocolate German buttercream filling",
  },
  {
    title: "Ice Cream (Acrylic)",
    category: "painting",
    image: img("icecream_painting", "4 / 5"),
    date: "2021-09-29",
  },
  {
    title: "Rooster (Gouache)",
    category: "painting",
    image: img("rooster", "5 / 7"),
    date: "2021-08-11",
  },
  {
    title: "Pâte Sablée & Mascarpone Chantilly Tart",
    category: "baking",
    image: img("63", "5 / 4"),
    date: "2023-08-29",
  },
  {
    title: "3D Hand Lettering",
    category: "calligraphy & lettering",
    image: img("adil", "5 / 4"),
    date: "2021-11-01",
  },
  {
    title: "Conquistador Watchband",
    category: "paracord",
    image: img("conquistadorwatch", "5 / 4"),
    date: "2021-05-11",
  },
  {
    title: "Chocolate Malt Cake",
    category: "baking",
    image: img("chocolatemalt", "1 / 1"),
    date: "2022-07-08",
  },
  {
    title: "pug patch",
    category: "sewing & embroidery",
    image: img("pugpatch", "1 / 1"),
    date: "2022-08-01",
  },
  {
    title: "chocolate chewies",
    category: "baking",
    image: img("chewie", "4 / 5"),
    date: "2023-12-10",
  },
  {
    title: "S'more Blossom Cookies",
    category: "baking",
    image: img("smore", "5 / 4"),
    date: "2023-12-11",
  },
  {
    title: "Coconut Snowman Cookies",
    category: "baking",
    image: img("snowman", "4 / 5"),
    date: "2023-12-10",
  },
  {
    title: "Linzer Cookies",
    category: "baking",
    image: img("linzer", "5 / 4"),
    date: "2023-12-08",
  },
  {
    title: "KFC Fried Chicken Bucket (Polymer Clay)",
    category: "sculpting",
    image: img("kfc", "5 / 4"),
    date: "2021-05-01",
  },
  {
    title: "biscoff cheesecake",
    category: "baking",
    image: img("biscoff_cheesecake", "1 / 1"),
    date: "2023-09-01",
  },
  {
    title: "soap bubble (colored pencil)",
    category: "drawing",
    image: img("bubble", "3 / 2"),
    date: "2021-04-19",
  },
  {
    title: "ring with polymer clay stone",
    category: "jewelry & pins",
    image: img("ring", "3 / 2"),
    date: "2021-11-03",
  },
  {
    title: "hotdog bun (Polymer Clay)",
    category: "sculpting",
    image: img("hotdogbun", "5 / 4"),
    date: "2021-10-19",
  },
  {
    title: "slice of pepperoni pizza (acrylic)",
    category: "painting",
    image: img("pizza", "1 / 1"),
    date: "2021-09-21",
  },
  {
    title: "Pink Rosette Marble Cake",
    category: "baking",
    image: img("rosette_cake", "4 / 3"),
    date: "2023-06-07",
  },
  {
    title: "dulce de leche cookies",
    category: "baking",
    image: img("dulcedeleche_cookies", "3 / 2"),
    date: "2023-06-10",
  },
  {
    title: "ice cream in a waffle cone (Polymer Clay)",
    category: "sculpting",
    image: img("icecream", "4 / 5"),
    date: "2021-04-28",
  },
  {
    title: "monkey's fist keyring",
    category: "paracord",
    image: img("monkey_fist", "1 / 1"),
    date: "2021-04-20",
  },
  {
    title: "an escape (colored pencil)",
    category: "drawing",
    image: img("sunset", "4 / 5"),
    date: "2021-08-01",
  },
  {
    title: "gyro wrap (Polymer Clay)",
    category: "sculpting",
    image: img("gyro", "3 / 2"),
    date: "2021-05-05",
  },
  {
    title: "vintage-style vanilla cherry cake",
    category: "baking",
    image: img("vintage_cherry", "4 / 5"),
    date: "2023-11-24",
    description:
      "A birthday cake that was really fun to make! Vanilla cake layered with homemade cherry filling and finished with Swiss meringue buttercream.",
  },
  {
    title: "courage the cowardly dog",
    category: "sewing & embroidery",
    image: img("courage", "4 / 5"),
    date: "2022-01-16",
  },
  {
    title: "hogwarts crest patch",
    category: "sewing & embroidery",
    image: img("hogwarts_crest", "1 / 1"),
    date: "2022-03-08",
  },
  {
    title: "still life I (oil)",
    category: "painting",
    image: img("stilllife_apples", "5 / 4"),
    date: "2021-11-28",
  },
  {
    title: "molasses spice cookies",
    category: "baking",
    image: img("molasses_spice_cookies", "4 / 5"),
    date: "2023-08-07",
  },
  {
    title: "saguaros in the desert (oil)",
    category: "painting",
    image: img("saguaros", "5 / 4"),
    date: "2021-12-01",
  },
];
