export type Artist = {
  id: number;
  name: string;
  genre: string;
  slug: string;
  image: string;
  bio: string;
  status: string;
};

export type Release = {
  id: number;
  title: string;
  artist: string;
  artistSlug: string;
  slug: string;
  type: string;
  releaseDate: string;
  description: string;
  cover: string;
};

export type EventItem = {
  id: number;
  title: string;
  slug: string;
  venue: string;
  date: string;
  description: string;
};

export type NewsItem = {
  id: number;
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  content: string;
};

export const artists: Artist[] = [
  {
    id: 1,
    name: "Ava Rhyne",
    genre: "R&B / Soul",
    slug: "ava-rhyne",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
    bio: "Ava blends intimate storytelling with rich vocals and effortless grooves built for modern listeners.",
    status: "On tour",
  },
  {
    id: 2,
    name: "Kairo Vale",
    genre: "Hip-Hop / Alternative",
    slug: "kairo-vale",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
    bio: "Kairo delivers cinematic bars and emotional depth rooted in city life and personal transformation.",
    status: "New single",
  },
  {
    id: 3,
    name: "The Velvet Echo",
    genre: "Indie / Electronic",
    slug: "the-velvet-echo",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80",
    bio: "Dreamy textures, atmospheric synths, and live instrumentation create a distinct emotional signature.",
    status: "Featured",
  },
];

export const releases: Release[] = [
  {
    id: 1,
    title: "Midnight Bloom",
    artist: "Ava Rhyne",
    artistSlug: "ava-rhyne",
    slug: "midnight-bloom",
    type: "Single",
    releaseDate: "June 12, 2026",
    description: "A late-night anthem built on lush chords, emotional honesty, and a timeless melodic hook.",
    cover:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    title: "Afterglow City",
    artist: "Kairo Vale",
    artistSlug: "kairo-vale",
    slug: "afterglow-city",
    type: "EP",
    releaseDate: "May 2, 2026",
    description: "A sharp, reflective project tracing ambition, setbacks, and the resilience of renewal.",
    cover:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    title: "Clear Skies",
    artist: "The Velvet Echo",
    artistSlug: "the-velvet-echo",
    slug: "clear-skies",
    type: "Single",
    releaseDate: "April 18, 2026",
    description: "An atmospheric track exploring hope, release, and the feeling of stepping into the light.",
    cover:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=900&q=80",
  },
];

export const events: EventItem[] = [
  {
    id: 1,
    title: "DC Sound Session",
    slug: "dc-sound-session",
    venue: "The Atlas Hall, Washington DC",
    date: "September 28, 2026",
    description: "An intimate live performance celebrating emerging voices, visual art, and local community culture.",
  },
  {
    id: 2,
    title: "Night Pulse Festival",
    slug: "night-pulse-festival",
    venue: "Union Stage, DC",
    date: "October 18, 2026",
    description: "A genre-blending festival featuring DJs, live acts, and visual installations across the night.",
  },
];

export const news: NewsItem[] = [
  {
    id: 1,
    title: "Building a new wave of independent artists in DC",
    slug: "building-a-new-wave-of-independent-artists-in-dc",
    category: "Community",
    excerpt: "We are creating spaces for local talent to connect, grow, and perform at scale.",
    content:
      "DC Music Love is investing in local talent by creating artist-first programming, creative mentorship, and community events built around local identity and independent sound.",
  },
  {
    id: 2,
    title: "Why music branding matters more than ever",
    slug: "why-music-branding-matters-more-than-ever",
    category: "Strategy",
    excerpt: "A strong identity helps artists connect with the right audience and build lasting momentum.",
    content:
      "As listening habits become more fragmented, artists need more than a good song — they need a clear audience, consistent visuals, and a story people remember.",
  },
  {
    id: 3,
    title: "Inside our latest event production playbook",
    slug: "inside-our-latest-event-production-playbook",
    category: "Events",
    excerpt: "The blueprint behind our newest live experience blends planning, emotion, and creative curation.",
    content:
      "Our team designs live experiences with a balance of technical precision and emotional pacing, giving audiences a memorable story from the first beat to the final encore.",
  },
];
