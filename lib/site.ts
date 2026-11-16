export const CONTACT_EMAIL = "hello@vinellamedia.com";

export type App = {
  slug: string;
  name: string;
  subtitle: string;
  genre: string;
  description: string;
  appStore: string;
  googlePlay?: string;
};

export const apps: App[] = [
  {
    slug: "teedup",
    name: "Teed Up",
    subtitle: "One Shot Golf",
    genre: "Sports",
    description:
      "One Shot Golf. Read the green, set your power and take your one swing. Every hole is a single shot.",
    appStore: "https://apps.apple.com/us/app/teed-up-one-shot-golf/id6820544611",
    googlePlay: "https://play.google.com/store/apps/details?id=com.vinellamedia.teeupgolfshot",
  },
  {
    slug: "stackup",
    name: "Stack Up",
    subtitle: "Tower Builder",
    genre: "Arcade",
    description:
      "Tower Builder. Time each drop, stack each block on the last, and see how high you can build before it tips.",
    appStore: "https://apps.apple.com/us/app/stack-up-tower-builder/id6825918340",
  },
  {
    slug: "duck",
    name: "Duck Crossing",
    subtitle: "Tap to Cross",
    genre: "Casual",
    description:
      "Tap to Cross. Guide the duck across lanes of traffic one tap at a time. Wait for the gap, then go.",
    appStore: "https://apps.apple.com/us/app/duck-crossing-tap-to-cross/id6825490015",
  },
];

export const services = [
  {
    title: "Websites",
    body: "Design and build for business sites, landing pages and online stores, made to load fast and work on every screen.",
  },
  {
    title: "Business apps",
    body: "Custom apps for iOS, Android and the web, for bookings, customers, staff and day-to-day operations.",
  },
  {
    title: "Print material",
    body: "Business cards, flyers, brochures, signage and branded materials, ready for the printer.",
  },
  {
    title: "SEO",
    body: "Search optimization, site audits and local listings that help customers find you.",
  },
];

export const studioPoints = [
  {
    title: "Simple controls",
    body: "Each game is built around a single input: a tap, a swipe, a well-timed release. Easy to learn in seconds.",
  },
  {
    title: "Short rounds",
    body: "Made for a queue, a commute or a coffee break. Play one round or fifty.",
  },
  {
    title: "Built in-house",
    body: "Design, art and code all come from the same small team.",
  },
  {
    title: "More on the way",
    body: "New titles ship regularly. Follow along on the App Store.",
  },
];
