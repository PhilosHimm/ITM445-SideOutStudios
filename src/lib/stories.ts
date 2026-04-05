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
  highlights: {
    id: string;
    player: "kevin" | "philos";
    clipType: "hit" | "pass" | "serve-receive" | "block";
    label: string;
    gameRef: string;
    title: string;
    annotation: string;
    videoSrc: string;
    thumbnail: string;
    duration: string;
  }[];
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
    duration: "5 clips · ~1.5 min",
    badge: "HIGHLIGHT REEL",
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
    highlights: [
      {
        id: "cc-k1",
        player: "kevin",
        clipType: "hit",
        label: "HIT",
        gameRef: "Game 3",
        title: "Back-row cross kill",
        annotation:
          "Kevin times the back-row approach off a tight set and hammers a cross-court angle the block never reaches. Pure read and explosion.",
        videoSrc: "/videos/kevin-hit-g3-1.mp4",
        thumbnail: "/images/clips/kevin-hit-g3-1.jpg",
        duration: "0:18",
      },
      {
        id: "cc-k2",
        player: "kevin",
        clipType: "hit",
        label: "HIT",
        gameRef: "Game 3",
        title: "Sharp angle finish",
        annotation:
          "A quick set on the outside — Kevin cuts the ball inside the block's arm for a sharp angle kill that opens up the rotation.",
        videoSrc: "/videos/kevin-hit-g3-2.mp4",
        thumbnail: "/images/clips/kevin-hit-g3-2.jpg",
        duration: "0:14",
      },
      {
        id: "cc-k3",
        player: "kevin",
        clipType: "hit",
        label: "HIT",
        gameRef: "Game 3",
        title: "Pipe attack seam shot",
        annotation:
          "Running a pipe from the back row, Kevin finds the seam between two blockers for a clean termination at the end of a long rally.",
        videoSrc: "/videos/kevin-hit-g3-3.mp4",
        thumbnail: "/images/clips/kevin-hit-g3-3.jpg",
        duration: "0:22",
      },
      {
        id: "cc-p1",
        player: "philos",
        clipType: "pass",
        label: "PASS",
        gameRef: "Game 3",
        title: "Diving platform dig",
        annotation:
          "Philos reads the sharp cross early, dives full extension, and keeps the platform firm enough to send the ball back to the setter in system.",
        videoSrc: "/videos/philos-pass-g3-1.mp4",
        thumbnail: "/images/clips/philos-pass-g3-1.jpg",
        duration: "0:11",
      },
      {
        id: "cc-p2",
        player: "philos",
        clipType: "serve-receive",
        label: "SERVE RX",
        gameRef: "Game 3",
        title: "Float serve receive",
        annotation:
          "A knuckling float serve targets the seam — Philos steps in early, absorbs the movement, and passes a perfect ball to the setter.",
        videoSrc: "/videos/philos-srx-g3-1.mp4",
        thumbnail: "/images/clips/philos-srx-g3-1.jpg",
        duration: "0:09",
      },
    ],
  },
  {
    id: "rivalry-night",
    episode: 2,
    title: "Rivalry Night",
    subtitle: "Game 4 — The Great Comeback",
    description:
      "Coming back from sitting cold, the engines turned on just in time. A rivalry match told through momentum swings, bench reactions, and the block that sealed it.",
    date: "Mar 1, 2026",
    duration: "5 clips · ~1.8 min",
    badge: "HIGHLIGHT REEL",
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
    highlights: [
      {
        id: "rn-k1",
        player: "kevin",
        clipType: "hit",
        label: "HIT",
        gameRef: "Game 4",
        title: "Outside swing comeback kill",
        annotation:
          "Down a point in Set 2, Kevin steps up and rips a line shot off a quick set — the crowd reaction says everything about the momentum shift.",
        videoSrc: "/videos/kevin-hit-g4-1.mp4",
        thumbnail: "/images/clips/kevin-hit-g4-1.jpg",
        duration: "0:16",
      },
      {
        id: "rn-k2",
        player: "kevin",
        clipType: "hit",
        label: "HIT",
        gameRef: "Game 3",
        title: "Cross-court Game 3 throwback",
        annotation:
          "A callback from Game 3 — same approach, same angle. Kevin's been dialing in this shot all season and it pays off again here.",
        videoSrc: "/videos/kevin-hit-g3-4.mp4",
        thumbnail: "/images/clips/kevin-hit-g3-4.jpg",
        duration: "0:13",
      },
      {
        id: "rn-k3",
        player: "kevin",
        clipType: "block",
        label: "BLOCK",
        gameRef: "Game 4",
        title: "Block assist, Set 2",
        annotation:
          "Kevin closes late to help seal an outside swing in Set 2 — a split-second read that leads directly into the team's next kill.",
        videoSrc: "/videos/kevin-block-g4-1.mp4",
        thumbnail: "/images/clips/kevin-block-g4-1.jpg",
        duration: "0:20",
      },
      {
        id: "rn-p1",
        player: "philos",
        clipType: "pass",
        label: "PASS",
        gameRef: "Game 4",
        title: "Backcourt scramble dig",
        annotation:
          "A tip over the block drops short — Philos sprints from the back row, gets low, and digs it up to keep the rally alive in a critical Set 1 moment.",
        videoSrc: "/videos/philos-pass-g4-1.mp4",
        thumbnail: "/images/clips/philos-pass-g4-1.jpg",
        duration: "0:15",
      },
      {
        id: "rn-p2",
        player: "philos",
        clipType: "serve-receive",
        label: "SERVE RX",
        gameRef: "Game 4",
        title: "Jump serve receive, Set 2",
        annotation:
          "Their server unloads a heavy jump serve at the seam — Philos steps back, reads the pace, and passes a platform ball that sets up the game-winning swing.",
        videoSrc: "/videos/philos-srx-g4-1.mp4",
        thumbnail: "/images/clips/philos-srx-g4-1.jpg",
        duration: "0:12",
      },
    ],
  },
  {
    id: "iron-wall",
    episode: 3,
    title: "The Iron Wall",
    subtitle: "Game 11 — Breaking Through",
    description:
      "How do you attack when the block is unbeatable? This story follows the tactical adjustments — tip shots, roll shots, and the missed serve that ended it all.",
    date: "Feb 17, 2026",
    duration: "5 clips · ~1.6 min",
    badge: "HIGHLIGHT REEL",
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
    highlights: [
      {
        id: "iw-k1",
        player: "kevin",
        clipType: "hit",
        label: "HIT",
        gameRef: "Game 11",
        title: "Tip over the block",
        annotation:
          "With the block locked in on power, Kevin checks up at the last second and tips it directly over the outstretched hands — a perfectly disguised shot.",
        videoSrc: "/videos/kevin-hit-g11-1.mp4",
        thumbnail: "/images/clips/kevin-hit-g11-1.jpg",
        duration: "0:19",
      },
      {
        id: "iw-k2",
        player: "kevin",
        clipType: "hit",
        label: "HIT",
        gameRef: "Game 4",
        title: "Roll shot adjustment",
        annotation:
          "A throwback to Game 4's roll shot approach — Kevin uses the same motion here against Game 11's wall and finds the deep corner for the kill.",
        videoSrc: "/videos/kevin-hit-g4-2.mp4",
        thumbnail: "/images/clips/kevin-hit-g4-2.jpg",
        duration: "0:17",
      },
      {
        id: "iw-p1",
        player: "philos",
        clipType: "pass",
        label: "PASS",
        gameRef: "Game 11",
        title: "Deep corner dig",
        annotation:
          "Their outside hits a sharp cross to the deep corner — Philos tracks it from zone 5, sprints across, and digs it up with an open platform.",
        videoSrc: "/videos/philos-pass-g11-1.mp4",
        thumbnail: "/images/clips/philos-pass-g11-1.jpg",
        duration: "0:14",
      },
      {
        id: "iw-p2",
        player: "philos",
        clipType: "serve-receive",
        label: "SERVE RX",
        gameRef: "Game 11",
        title: "Seam serve receive",
        annotation:
          "A float serve splits the seam between Philos and the setter — Philos calls it early, shuffles right, and passes a clean ball to maintain possession.",
        videoSrc: "/videos/philos-srx-g11-1.mp4",
        thumbnail: "/images/clips/philos-srx-g11-1.jpg",
        duration: "0:10",
      },
      {
        id: "iw-p3",
        player: "philos",
        clipType: "block",
        label: "BLOCK",
        gameRef: "Game 3",
        title: "Stuff block attempt",
        annotation:
          "Crossing over from a Game 3 clip — Philos times the middle's quick attack perfectly, gets both hands over the tape for a near stuff block.",
        videoSrc: "/videos/philos-block-g3-1.mp4",
        thumbnail: "/images/clips/philos-block-g3-1.jpg",
        duration: "0:26",
      },
    ],
  },
  {
    id: "the-comeback",
    episode: 4,
    title: "Down 10–25",
    subtitle: "Game 7 — The Impossible Comeback",
    description:
      "Losing the first set 10–25, nobody expected what came next. A 6-2 rotation switch, a timeout speech, and a 15–12 third set that rewrote the season narrative.",
    date: "Jan 28, 2026",
    duration: "5 clips · ~2 min",
    badge: "HIGHLIGHT REEL",
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
    highlights: [
      {
        id: "cb-k1",
        player: "kevin",
        clipType: "hit",
        label: "HIT",
        gameRef: "Game 7",
        title: "Back-row kill, Set 2",
        annotation:
          "With the team down early in Set 2, Kevin loads up from the back row and hammers a cross-court kill that sparks the comeback run.",
        videoSrc: "/videos/kevin-hit-g7-1.mp4",
        thumbnail: "/images/clips/kevin-hit-g7-1.jpg",
        duration: "0:20",
      },
      {
        id: "cb-k2",
        player: "kevin",
        clipType: "hit",
        label: "HIT",
        gameRef: "Game 7",
        title: "Seam attack, Set 3",
        annotation:
          "At 8–12 in Set 3, Kevin finds the seam on the outside and finishes cleanly — the hit that pulled the team within two points.",
        videoSrc: "/videos/kevin-hit-g7-2.mp4",
        thumbnail: "/images/clips/kevin-hit-g7-2.jpg",
        duration: "0:15",
      },
      {
        id: "cb-k3",
        player: "kevin",
        clipType: "block",
        label: "BLOCK",
        gameRef: "Game 7",
        title: "Momentum-shifting stuff block",
        annotation:
          "Kevin reads the outside hitter's approach, closes the block, and gets a clean stuff — the crowd reacts and the energy visibly shifts.",
        videoSrc: "/videos/kevin-block-g7-1.mp4",
        thumbnail: "/images/clips/kevin-block-g7-1.jpg",
        duration: "0:24",
      },
      {
        id: "cb-p1",
        player: "philos",
        clipType: "pass",
        label: "PASS",
        gameRef: "Game 7",
        title: "Libero-style scramble dig",
        annotation:
          "A ball tipped over the block catches Philos off balance — he recovers, dives sideways, and passes a one-arm dig that saves the rally in Set 3.",
        videoSrc: "/videos/philos-pass-g7-1.mp4",
        thumbnail: "/images/clips/philos-pass-g7-1.jpg",
        duration: "0:13",
      },
      {
        id: "cb-p2",
        player: "philos",
        clipType: "serve-receive",
        label: "SERVE RX",
        gameRef: "Game 7",
        title: "Heavy topspin receive",
        annotation:
          "A heavy topspin jump serve at body contact — Philos adjusts his platform angle mid-motion and sends a perfect pass to the setter in transition.",
        videoSrc: "/videos/philos-srx-g7-1.mp4",
        thumbnail: "/images/clips/philos-srx-g7-1.jpg",
        duration: "0:11",
      },
    ],
  },
  {
    id: "season-finale",
    episode: 5,
    title: "Season Closer",
    subtitle: "Game 12 — Five Aces",
    description:
      "The final match of the regular season. A focused, sharp performance capped by five consecutive aces that brought the whole squad onto the court.",
    date: "Mar 1, 2026",
    duration: "5 clips · ~1.7 min",
    badge: "HIGHLIGHT REEL",
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
    highlights: [
      {
        id: "sf-k1",
        player: "kevin",
        clipType: "hit",
        label: "HIT",
        gameRef: "Game 12",
        title: "Season-closing kill",
        annotation:
          "The last kill of the regular season — Kevin receives the set on the outside and rips a line shot that seals the match and starts the on-court celebration.",
        videoSrc: "/videos/kevin-hit-g12-1.mp4",
        thumbnail: "/images/clips/kevin-hit-g12-1.jpg",
        duration: "0:21",
      },
      {
        id: "sf-k2",
        player: "kevin",
        clipType: "hit",
        label: "HIT",
        gameRef: "Game 12",
        title: "Ace serve, Set 2 run",
        annotation:
          "One of five consecutive aces — Kevin's float serve catches the back-row seam perfectly, dropping untouched for the crowd's loudest reaction of the night.",
        videoSrc: "/videos/kevin-hit-g12-2.mp4",
        thumbnail: "/images/clips/kevin-hit-g12-2.jpg",
        duration: "0:14",
      },
      {
        id: "sf-k3",
        player: "kevin",
        clipType: "hit",
        label: "HIT",
        gameRef: "Game 12",
        title: "Opening run kill, Set 1",
        annotation:
          "Part of the 6-1 opening run in Set 1 — Kevin reads the setter's eyes, gets the outside set, and swings hard cross-court to extend the early lead.",
        videoSrc: "/videos/kevin-hit-g12-3.mp4",
        thumbnail: "/images/clips/kevin-hit-g12-3.jpg",
        duration: "0:17",
      },
      {
        id: "sf-p1",
        player: "philos",
        clipType: "pass",
        label: "PASS",
        gameRef: "Game 12",
        title: "Final rally transition dig",
        annotation:
          "In the match-closing rally, Philos reads the sharp angle and digs it one-handed off the floor — setting up the final kill to end the season.",
        videoSrc: "/videos/philos-pass-g12-1.mp4",
        thumbnail: "/images/clips/philos-pass-g12-1.jpg",
        duration: "0:16",
      },
      {
        id: "sf-p2",
        player: "philos",
        clipType: "serve-receive",
        label: "SERVE RX",
        gameRef: "Game 12",
        title: "Consistent platform, Set 1",
        annotation:
          "Setting the tone early — Philos passes three consecutive serves in system during the 6-1 opening run, giving the setter clean looks to build the lead.",
        videoSrc: "/videos/philos-srx-g12-1.mp4",
        thumbnail: "/images/clips/philos-srx-g12-1.jpg",
        duration: "0:23",
      },
    ],
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
