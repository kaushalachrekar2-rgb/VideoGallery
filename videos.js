// videos.js - sample dataset (5 videos with chapters, gallery Drive IDs, ratings, etc.)
window.videos = [
  {
    id: "vid001",
    code: "ABC-001",
    title: "Midnight Escape",
    thumbnail: "https://via.placeholder.com/1280x720.png?text=Midnight+Escape+Thumb",
    coverImage: "https://via.placeholder.com/1280x720.png?text=Midnight+Escape+Cover",
    galleryDriveId: "1AaBbCcDdEeFfGgH1", // sample Drive file ID
    tags: ["drama", "romance"],
    actress: ["Aiko Tanaka"],
    studio: ["Luna Films"],
    label: ["Premium"],
    ratings: { actress: 9.8, production: 9.6, ex: 9.7, plot: 9.6 }, // avg >= 9.5 -> Gold
    chapters: [
      {
        title: "Opening — City Lights",
        desc: "Intro sequence and character setup.",
        image: "https://via.placeholder.com/1280x720.png?text=Chapter+1+-+City+Lights",
        iframe: "https://player.example.com/embed/midnight-escape/ch1"
      },
      {
        title: "Unexpected Meeting",
        desc: "The two leads cross paths.",
        image: "https://via.placeholder.com/1280x720.png?text=Chapter+2+-+Meeting",
        iframe: "https://player.example.com/embed/midnight-escape/ch2"
      },
      {
        title: "Cliffside Confession",
        desc: "Emotional turning point.",
        image: "https://via.placeholder.com/1280x720.png?text=Chapter+3+-+Confession",
        iframe: "https://player.example.com/embed/midnight-escape/ch3"
      }
    ]
  },

  {
    id: "vid002",
    code: "BLU-210",
    title: "Neon Highway",
    thumbnail: "https://via.placeholder.com/1280x720.png?text=Neon+Highway+Thumb",
    coverImage: "https://via.placeholder.com/1280x720.png?text=Neon+Highway+Cover",
    galleryDriveId: "1BbCcDdEeFfGgHh2",
    tags: ["action", "sci-fi"],
    actress: ["Maya Rivera"],
    studio: ["Nova Pictures"],
    label: ["Standard"],
    ratings: { actress: 8.7, production: 8.5, ex: 8.6, plot: 8.7 }, // avg between 8.5 and 9.5 -> Blue
    chapters: [
      {
        title: "Start: The Chase",
        desc: "Intro chase with neon visuals.",
        image: "https://via.placeholder.com/1280x720.png?text=Neon+Chase",
        iframe: "https://player.example.com/embed/neon-highway/ch1"
      },
      {
        title: "Factory Skirmish",
        desc: "Fight in the abandoned factory.",
        image: "https://via.placeholder.com/1280x720.png?text=Factory+Skirmish",
        iframe: "https://player.example.com/embed/neon-highway/ch2"
      }
    ]
  },

  {
    id: "vid003",
    code: "WHI-777",
    title: "Quiet Rain",
    thumbnail: "https://via.placeholder.com/1280x720.png?text=Quiet+Rain+Thumb",
    coverImage: "https://via.placeholder.com/1280x720.png?text=Quiet+Rain+Cover",
    galleryDriveId: "1CcDdEeFfGgHhIi3",
    tags: ["slice-of-life", "art"],
    actress: ["Lina Park"],
    studio: ["Stillwater"],
    label: ["Indie"],
    ratings: { actress: 7.9, production: 7.8, ex: 8.0, plot: 8.1 }, // avg < 8.5 -> White
    chapters: [
      {
        title: "Morning Rituals",
        desc: "A quiet morning routine scene.",
        image: "https://via.placeholder.com/1280x720.png?text=Morning+Rituals",
        iframe: "https://player.example.com/embed/quiet-rain/ch1"
      },
      {
        title: "Letter",
        desc: "A letter changes everything.",
        image: "https://via.placeholder.com/1280x720.png?text=Letter",
        iframe: "https://player.example.com/embed/quiet-rain/ch2"
      },
      {
        title: "Evening Walk",
        desc: "Reflective ending on the bridge.",
        image: "https://via.placeholder.com/1280x720.png?text=Evening+Walk",
        iframe: "https://player.example.com/embed/quiet-rain/ch3"
      }
    ]
  },

  {
    id: "vid004",
    code: "BLU-999",
    title: "Skyline Protocol",
    thumbnail: "https://via.placeholder.com/1280x720.png?text=Skyline+Protocol+Thumb",
    coverImage: "https://via.placeholder.com/1280x720.png?text=Skyline+Protocol+Cover",
    galleryDriveId: "1DdEeFfGgHhIiJ4",
    tags: ["thriller", "mystery"],
    actress: ["Sana Ito"],
    studio: ["Argent Studios"],
    label: ["Premium"],
    ratings: { actress: 8.9, production: 9.0, ex: 8.6, plot: 9.1 }, // avg between 8.5 and 9.5 -> Blue
    chapters: [
      {
        title: "Briefing",
        desc: "The team receives instructions.",
        image: "https://via.placeholder.com/1280x720.png?text=Briefing",
        iframe: "https://player.example.com/embed/skyline-protocol/ch1"
      },
      {
        title: "The Heist",
        desc: "Execution of the risky operation.",
        image: "https://via.placeholder.com/1280x720.png?text=The+Heist",
        iframe: "https://player.example.com/embed/skyline-protocol/ch2"
      },
      {
        title: "Aftermath",
        desc: "Consequences and revelations.",
        image: "https://via.placeholder.com/1280x720.png?text=Aftermath",
        iframe: "https://player.example.com/embed/skyline-protocol/ch3"
      },
      {
        title: "Epilogue",
        desc: "Short epilogue scene.",
        image: "https://via.placeholder.com/1280x720.png?text=Epilogue",
        iframe: "https://player.example.com/embed/skyline-protocol/ch4"
      }
    ]
  },

  {
    id: "vid005",
    code: "GOLD-42",
    title: "Aurora Bloom",
    thumbnail: "https://via.placeholder.com/1280x720.png?text=Aurora+Bloom+Thumb",
    coverImage: "https://via.placeholder.com/1280x720.png?text=Aurora+Bloom+Cover",
    galleryDriveId: "1EeFfGgHhIiJjK5",
    tags: ["fantasy", "visual"],
    actress: ["Rina Kovac"],
    studio: ["Celeste Works"],
    label: ["Collector"],
    ratings: { actress: 9.6, production: 9.7, ex: 9.5, plot: 9.8 }, // avg >= 9.5 -> Gold
    chapters: [
      {
        title: "Blooming Night",
        desc: "Opening visual sequence with aurora.",
        image: "https://via.placeholder.com/1280x720.png?text=Blooming+Night",
        iframe: "https://player.example.com/embed/aurora-bloom/ch1"
      },
      {
        title: "Garden of Stars",
        desc: "Magical garden exploration.",
        image: "https://via.placeholder.com/1280x720.png?text=Garden+of+Stars",
        iframe: "https://player.example.com/embed/aurora-bloom/ch2"
      },
      {
        title: "Crown",
        desc: "Climactic reveal with orchestra.",
        image: "https://via.placeholder.com/1280x720.png?text=Crown",
        iframe: "https://player.example.com/embed/aurora-bloom/ch3"
      }
    ]
  }
]


