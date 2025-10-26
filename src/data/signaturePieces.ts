export type SignaturePiece = {
  id: string;
  name: string;
  blurb: string;
  palette: string[];
  details: string[];
  investment: string;
  fabric: string;
  highlight: string;
};

export const signaturePieces: SignaturePiece[] = [
  {
    id: "celestial-oasis",
    name: "Celestial Oasis",
    blurb: "Crushed silk organza haloed by moonlit crystal embroidery.",
    palette: ["#F6ECE3", "#D7BFA5", "#9EA7B3"],
    details: [
      "Hand-beaded constellations across sweeping kimono sleeves.",
      "Detachable silk-satin underdress in champagne dusk.",
      "Personal monogram woven into the cuff lining.",
    ],
    investment: "12,700 AED",
    fabric: "Silk organza · Crystalline beadwork",
    highlight: "Limited to 20 ateliers worldwide · Ships with ritual care kit",
  },
  {
    id: "sands-of-saffron",
    name: "Sands of Saffron",
    blurb: "A fluid abaya dyed with saffron petals and desert marigold.",
    palette: ["#E6C28F", "#D4A373", "#4C3A29"],
    details: [
      "Plant-dyed ombré cascading from honey to burnished amber.",
      "Hidden paneling engineered for effortless drape.",
      "Cooling bamboo-silk lining for gatherings under the moon.",
    ],
    investment: "8,900 AED",
    fabric: "Saffron-dyed crepe · Bamboo silk lining",
    highlight: "Comes with bespoke incense oil pairing curated by Amira",
  },
  {
    id: "noor-midnight",
    name: "Noor Midnight",
    blurb: "Graphite velvet with obsidian micro-paillette revelations.",
    palette: ["#121315", "#2C2A2F", "#605F67"],
    details: [
      "Laser-cut geometric lattice reveals blush satin beneath.",
      "Structured hood with concealed signature clasp.",
      "Ultra-light velvet engineered to breathe in coastal humidity.",
    ],
    investment: "14,200 AED",
    fabric: "Midnight velvet · Satin understructure",
    highlight: "Tailored virtually with Amira and atelier artisans live",
  },
];
