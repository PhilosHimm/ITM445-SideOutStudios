export interface Story {
  id: string;
  episode: number;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  duration: string;
  badge: string;
  badgeClass: string;
  thumbnail: string;
  perspectives: {
    kevin: { videoSrc: string; videoTitle: string; annotation: string };
    philos: { videoSrc: string; videoTitle: string; annotation: string };
  };
  pollQuestion: string;
  pollOptions: { id: number; text: string; votes: number }[];
  audioTitle: string;
  audioSrc: string;
  commentPrompt: string;
  sampleComment: { text: string; author: string };
}

const UNSPLASH = {
  court: "https://images.unsplash.com/photo-1579952962646-993774640106?q=80&w=800&auto=format&fit=crop",
  spike: "https://images.unsplash.com/photo-1544298150-1fc4cb4659b8?q=80&w=800&auto=format&fit=crop",
  block: "https://images.unsplash.com/photo-1541534741688-60cab3c3dc17?q=80&w=800&auto=format&fit=crop",
  dig: "https://images.unsplash.com/photo-1582650074213-91117ecaf524?q=80&w=800&auto=format&fit=crop",
  team: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop",
};

export const stories: Story[] = [
  {
    id: "the-close-call",
    episode: 1,
    title: "The Close Call",
    subtitle: "Game 3 — A Heartbreaker",
    description:
      "A heartbreaker told from both sides of the court. Two perspectives on the same match — what went wrong, what almost went right, and the rally that changed everything.",
    date: "Oct 29, 2025",
    duration: "8 min",
    badge: "RALLY BREAKDOWN",
    badgeClass: "bg-primary text-white",
    thumbnail: "/images/home-ep1-blocks.png",
    perspectives: {
      kevin: {
        videoSrc: "https://www.youtube.com/embed/aLdXLZdsfak",
        videoTitle: "Game 3 — Kevin's Top Rallies",
        annotation:
          "Kevin focuses on the block timing and outside approach that kept the defense honest all game. His read on the Set 2 timeout was key to the momentum shift.",
      },
      philos: {
        videoSrc: "https://www.youtube.com/embed/DNlXPZYeoTY",
        videoTitle: "Game 3 — Philos' Top Rallies",
        annotation:
          "Philos breaks down the passing lanes and backcourt coverage that set up every transition kill. The final rally dig was instinct, not plan.",
      },
    },
    pollQuestion: "What was the turning point of Game 3?",
    pollOptions: [
      { id: 1, text: "Set 2 timeout", votes: 124 },
      { id: 2, text: "Final rally", votes: 85 },
      { id: 3, text: "Rotation switch", votes: 42 },
    ],
    audioTitle: "Game 3 — Raw Post-Game Reactions",
    audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    commentPrompt: "What would you have done on this play?",
    sampleComment: {
      text: "The rotation switch was definitely the turning point!",
      author: "VolleyFan99",
    },
  },
  {
    id: "rivalry-night",
    episode: 2,
    title: "Rivalry Night",
    subtitle: "Game 4 — The Great Comeback",
    description:
      "Coming back from sitting cold, the engines turned on just in time. A rivalry match told through momentum swings, bench reactions, and the block that sealed it.",
    date: "Mar 1, 2026",
    duration: "10 min",
    badge: "MINI FILM",
    badgeClass: "bg-dark text-white",
    thumbnail: "/images/home-ep2-spike.png",
    perspectives: {
      kevin: {
        videoSrc: "https://www.youtube.com/embed/VYSpun0kbFk",
        videoTitle: "Game 4 — Kevin's Rivalry Breakdown",
        annotation:
          "Kevin walks through the adjustment at the net that turned the momentum — moving from power to placement after the first-set struggles.",
      },
      philos: {
        videoSrc: "https://www.youtube.com/embed/c4wmyrfkQZA",
        videoTitle: "Game 4 — Philos' Rivalry Breakdown",
        annotation:
          "Philos covers the backcourt chaos of Set 1 and the calm that settled in once the back-to-back kills started flowing in Set 2.",
      },
    },
    pollQuestion: "When did you know the comeback was on?",
    pollOptions: [
      { id: 1, text: "Philos' back-to-back kills", votes: 109 },
      { id: 2, text: "Right after the first timeout", votes: 57 },
      { id: 3, text: "The match-clinching block", votes: 83 },
    ],
    audioTitle: "Game 4 — Rivalry Night Debrief",
    audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    commentPrompt: "Sitting cold all match — what's your warm-up routine?",
    sampleComment: {
      text: "The engines came on exactly when we needed them. That final block was LOUD.",
      author: "RivalryWatcher",
    },
  },
  {
    id: "iron-wall",
    episode: 3,
    title: "The Iron Wall",
    subtitle: "Game 11 — Breaking Through",
    description:
      "How do you attack when the block is unbeatable? This story follows the tactical adjustments — tip shots, roll shots, and the missed serve that ended it all.",
    date: "Feb 17, 2026",
    duration: "7 min",
    badge: "TACTICAL FILM",
    badgeClass: "border border-dark text-dark",
    thumbnail: "/images/home-ep4-ironwall.jpg",
    perspectives: {
      kevin: {
        videoSrc: "https://www.youtube.com/embed/jaq5Wmt0ba8",
        videoTitle: "Game 11 — Kevin on the Iron Wall",
        annotation:
          "Kevin breaks down the blocking scheme that shut down the outside attack, and why switching to tips in Set 2 was the only way through.",
      },
      philos: {
        videoSrc: "https://www.youtube.com/embed/msPx8K2Qab4",
        videoTitle: "Game 11 — Philos on the Iron Wall",
        annotation:
          "Philos covers the defensive reads that kept rallies alive despite the wall, and the serve execution that ultimately decided the match.",
      },
    },
    pollQuestion: "Could the Iron Wall result have been different?",
    pollOptions: [
      { id: 1, text: "Gone to tip attacks earlier", votes: 79 },
      { id: 2, text: "Better serve execution in Set 3", votes: 112 },
      { id: 3, text: "More angle shots, less power", votes: 65 },
    ],
    audioTitle: "Game 11 — Iron Wall Post-Game Audio",
    audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    commentPrompt: "How do you crack a middle blocker with 7 blocks in a set?",
    sampleComment: {
      text: "Tip shots worked in Set 2. Should've gone right back there in Set 3.",
      author: "TacticalTalk",
    },
  },
  {
    id: "the-comeback",
    episode: 4,
    title: "Down 10–25",
    subtitle: "Game 7 — The Impossible Comeback",
    description:
      "Losing the first set 10–25, nobody expected what came next. A 6-2 rotation switch, a timeout speech, and a 15–12 third set that rewrote the season narrative.",
    date: "Jan 28, 2026",
    duration: "12 min",
    badge: "FULL STORY",
    badgeClass: "bg-primary text-white",
    thumbnail: "/images/home-ep3-game.png",
    perspectives: {
      kevin: {
        videoSrc: "https://www.youtube.com/embed/1Pf28g-Bwmo",
        videoTitle: "Game 7 — Kevin's Comeback Story",
        annotation:
          "Kevin recounts the timeout talk that changed the energy, and how switching to the 6-2 opened up back-row attacks that the Iron Setters weren't ready for.",
      },
      philos: {
        videoSrc: "https://www.youtube.com/embed/MpimG5SzwKU",
        videoTitle: "Game 7 — Philos' Comeback Story",
        annotation:
          "Philos walks through the defensive adjustments that turned a blowout into a dogfight — and the composure needed to close out Set 3 from 8–12 down.",
      },
    },
    pollQuestion: "What turned the match around after Set 1?",
    pollOptions: [
      { id: 1, text: "Switching to the 6-2 rotation", votes: 112 },
      { id: 2, text: "The team's timeout talk", votes: 91 },
      { id: 3, text: "Sheer willpower and momentum", votes: 74 },
    ],
    audioTitle: "Game 7 — Comeback Story Audio",
    audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    commentPrompt: "Down 10-25 in Set 1 — would you have believed the comeback?",
    sampleComment: {
      text: "Losing 10-25 and then coming all the way back is genuinely unhinged.",
      author: "SetterFanatico",
    },
  },
  {
    id: "season-finale",
    episode: 5,
    title: "Season Closer",
    subtitle: "Game 12 — Five Aces",
    description:
      "The final match of the regular season. A focused, sharp performance capped by five consecutive aces that brought the whole squad onto the court.",
    date: "Mar 1, 2026",
    duration: "9 min",
    badge: "SEASON FINALE",
    badgeClass: "bg-dark text-white",
    thumbnail: UNSPLASH.court,
    perspectives: {
      kevin: {
        videoSrc: "https://www.youtube.com/embed/F9PHyzQSmZs",
        videoTitle: "Game 12 — Kevin's Season Wrap",
        annotation:
          "Kevin reflects on the 6-1 opening run that set the tone and the five-ace streak that became the defining moment of the season.",
      },
      philos: {
        videoSrc: "https://www.youtube.com/embed/1whmR-Zz97s",
        videoTitle: "Game 12 — Philos' Season Wrap",
        annotation:
          "Philos covers the emotional side — the final kill, the on-court celebration, and what this season meant for Side-Out Studios as a project.",
      },
    },
    pollQuestion: "Best moment of the season finale?",
    pollOptions: [
      { id: 1, text: "The 6-1 tone-setting opening", votes: 68 },
      { id: 2, text: "Five straight aces in Set 2", votes: 201 },
      { id: 3, text: "The season-closing kill", votes: 94 },
    ],
    audioTitle: "Game 12 — Season Wrap Audio",
    audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
    commentPrompt: "What's the one thing you take away from this season?",
    sampleComment: {
      text: "Five aces in a row to close out the season. Legendary.",
      author: "SeasonFan2025",
    },
  },
];

export function getStory(id: string): Story | undefined {
  return stories.find((s) => s.id === id);
}

export function getPrevNextStory(id: string): { prev: Story | null; next: Story | null } {
  const idx = stories.findIndex((s) => s.id === id);
  return {
    prev: idx > 0 ? stories[idx - 1] : null,
    next: idx < stories.length - 1 ? stories[idx + 1] : null,
  };
}
