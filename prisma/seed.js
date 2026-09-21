const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const admin = await prisma.user.upsert({
    where: { email: "admin@dcmusiclove.com" },
    update: {},
    create: {
      name: "DC Music Love Admin",
      email: "admin@dcmusiclove.com",
      role: "ADMIN",
    },
  });

  const artists = [
    {
      name: "Ava Rhyne",
      stageName: "Ava Rhyne",
      slug: "ava-rhyne",
      genre: "R&B / Soul",
      bio: "Ava blends intimate storytelling with rich vocals and effortless grooves built for modern listeners.",
      status: "FEATURED",
      featured: true,
      imageUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
      ownerId: admin.id,
    },
    {
      name: "Kairo Vale",
      stageName: "Kairo Vale",
      slug: "kairo-vale",
      genre: "Hip-Hop / Alternative",
      bio: "Kairo delivers cinematic bars and emotional depth rooted in city life and personal transformation.",
      status: "ACTIVE",
      featured: false,
      imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
      ownerId: admin.id,
    },
    {
      name: "The Velvet Echo",
      stageName: "The Velvet Echo",
      slug: "the-velvet-echo",
      genre: "Indie / Electronic",
      bio: "Dreamy textures, atmospheric synths, and live instrumentation create a distinct emotional signature.",
      status: "FEATURED",
      featured: true,
      imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80",
      ownerId: admin.id,
    },
  ];

  for (const artist of artists) {
    await prisma.artist.upsert({
      where: { slug: artist.slug },
      update: artist,
      create: artist,
    });
  }

  const releaseData = [
    {
      title: "Midnight Bloom",
      slug: "midnight-bloom",
      type: "SINGLE",
      description: "A late-night anthem built on lush chords, emotional honesty, and a timeless melodic hook.",
      releaseDate: new Date("2026-06-12T00:00:00Z"),
      coverUrl: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80",
      artist: { connect: { slug: "ava-rhyne" } },
    },
    {
      title: "Afterglow City",
      slug: "afterglow-city",
      type: "EP",
      description: "A sharp, reflective project tracing ambition, setbacks, and the resilience of renewal.",
      releaseDate: new Date("2026-05-02T00:00:00Z"),
      coverUrl: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80",
      artist: { connect: { slug: "kairo-vale" } },
    },
  ];

  for (const release of releaseData) {
    await prisma.release.upsert({
      where: { slug: release.slug },
      update: release,
      create: release,
    });
  }

  const postData = [
    {
      title: "Building a new wave of independent artists in DC",
      slug: "building-a-new-wave-of-independent-artists-in-dc",
      category: "Community",
      excerpt: "We are creating spaces for local talent to connect, grow, and perform at scale.",
      content:
        "DC Music Love is investing in local talent by creating artist-first programming, creative mentorship, and community events built around local identity and independent sound.",
      published: true,
      authorId: admin.id,
    },
    {
      title: "Why music branding matters more than ever",
      slug: "why-music-branding-matters-more-than-ever",
      category: "Strategy",
      excerpt: "A strong identity helps artists connect with the right audience and build lasting momentum.",
      content:
        "As listening habits become more fragmented, artists need more than a good song — they need a clear audience, consistent visuals, and a story people remember.",
      published: true,
      authorId: admin.id,
    },
  ];

  for (const post of postData) {
    await prisma.post.upsert({
      where: { slug: post.slug },
      update: post,
      create: post,
    });
  }

  console.log("Database seeded with DC Music Love content.");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
