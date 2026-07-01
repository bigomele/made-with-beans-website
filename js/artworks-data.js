// ============================================
// MADE WITH BEANS — Artworks data
//
// Edit this list to add, remove, or update pieces.
// availability options: "available" | "prints-only" | "sold"
// ============================================

const ARTWORKS = [
  {
    id: "coffee-morning",
    title: "Morning Coffee",
    medium: "Coffee on water paper",
    dims: "25x40cm",
    image: "images/art-coffee-morning.jpg",
    availability: "available",
    description: "A quiet still life of a coffee cup and saucer, brewed entirely in shades of coffee on watercolor paper."
  },
  {
    id: "bonneh",
    title: "Bunny",
    medium: "Coffee on water paper",
    dims: "25x40cm",
    image: "images/art-bunny.jpg",
    availability: "available",
    description: "A soft-eyed rabbit rendered in warm coffee tones, sitting low in a bed of grass."
  },
  {
    id: "more-bunneh",
    title: "Owl Love",
    medium: "Coffee on water paper",
    dims: "25x40cm",
    image: "images/art-more-bunneh.jpg",
    availability: "prints-only",
    description: "A portrait piece exploring light and shadow with layered coffee washes — the original has found a home, but prints are available."
  },
  {
    id: "koi-innit",
    title: "Koi",
    medium: "Coffee on water paper",
    dims: "25x40cm",
    image: "images/art-koi.jpg",
    availability: "available",
    description: "A tall, narrow study of koi fish swimming in looping coffee-stained currents."
  },
  {
    id: "coffee-and-ash",
    title: "Coffee and Ash",
    medium: "Coffee on water paper",
    dims: "25x40cm",
    image: "images/art-coffee-ash.jpg",
    availability: "available",
    description: "A striking portrait built from deep, smoky coffee tones layered into fine detail."
  },
  {
    id: "stranger-kinks",
    title: "Stranger Things",
    medium: "Coffee on water paper",
    dims: "25x40cm",
    image: "images/art-stranger-kinks.jpg",
    availability: "sold",
    description: "A fan-art tribute piece, fully rendered in coffee. The original has been sold, but prints may be available on request."
  }
];

const AVAILABILITY_LABELS = {
  "available": { text: "Original available", className: "available" },
  "prints-only": { text: "Prints only", className: "prints-only" },
  "sold": { text: "Sold — original", className: "sold" }
};
