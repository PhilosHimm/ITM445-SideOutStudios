export interface GameHighlight {
  title: string;
  description: string;
  image: string;
  timestamp: string;
}

export interface GameStat {
  label: string;
  value: string;
}

export interface Game {
  slug: string;
  number: number;
  title: string;
  date: string;
  year: string;
  result: "Win" | "Loss" | "Upcoming";
  score: string;
  opponent: string;
  badge: string;
  badgeClass: string;
  description: string;
  heroImage: string;
  category: "Game 1–4" | "Game 5–8" | "Game 9–12";
  duration: string;
  highlights: GameHighlight[];
  stats: GameStat[];
  keyPlayers: string[];
}

const UNSPLASH = {
  court: "https://images.unsplash.com/photo-1579952962646-993774640106?q=80&w=800&auto=format&fit=crop",
  spike: "https://images.unsplash.com/photo-1544298150-1fc4cb4659b8?q=80&w=800&auto=format&fit=crop",
  block: "https://images.unsplash.com/photo-1541534741688-60cab3c3dc17?q=80&w=800&auto=format&fit=crop",
  dig: "https://images.unsplash.com/photo-1582650074213-91117ecaf524?q=80&w=800&auto=format&fit=crop",
  set: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop",
  team: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop",
};

export const games: Game[] = [
  {
    slug: "game-1",
    number: 1,
    title: "Game 1 — Season Opener",
    date: "Oct 1",
    year: "2025",
    result: "Win",
    score: "2–1",
    opponent: "Team Spike",
    badge: "GAME RECAP",
    badgeClass: "bg-primary text-white",
    description:
      "60-second match summary from the first intramural game: score, key plays, and MVP moment. A close-fought three-setter that set the tone.",
    heroImage: "/images/home-ep3-game.png",
    category: "Game 1–4",
    duration: "38 min",
    highlights: [
      {
        title: "Opening Serve Ace",
        description: "Kevin opens the match with a pinpoint jump serve that catches the opponent's libero completely off guard.",
        image: UNSPLASH.court,
        timestamp: "0:03",
      },
      {
        title: "The Key Block",
        description: "A perfectly timed stuff block at the net swings the momentum heading into Set 2.",
        image: UNSPLASH.block,
        timestamp: "12:45",
      },
      {
        title: "Set 3 Clutch Dig",
        description: "Philos digs a seemingly impossible line shot to keep the rally alive at 23–23.",
        image: UNSPLASH.dig,
        timestamp: "34:10",
      },
    ],
    stats: [
      { label: "Kills", value: "14" },
      { label: "Blocks", value: "6" },
      { label: "Aces", value: "3" },
      { label: "Digs", value: "18" },
    ],
    keyPlayers: ["Kevin Lin", "Philos Himm"],
  },
  {
    slug: "game-2",
    number: 2,
    title: "Game 2 — Blocks Masterclass",
    date: "Oct 15",
    year: "2025",
    result: "Win",
    score: "2–0",
    opponent: "Net Ninjas",
    badge: "RALLY BREAKDOWN",
    badgeClass: "bg-primary text-white",
    description:
      "Top 5 rallies with slow-mo replays and arrow overlays showing Kevin's blocking positioning. A dominant two-set victory.",
    heroImage: "/images/home-ep1-blocks.png",
    category: "Game 1–4",
    duration: "30 min",
    highlights: [
      {
        title: "First-Set Shutout Run",
        description: "A 7-0 scoring run to close out Set 1, anchored by back-to-back blocks.",
        image: UNSPLASH.block,
        timestamp: "8:22",
      },
      {
        title: "Kevin's Ace Streak",
        description: "Three straight serves in the corner that the opposition couldn't read.",
        image: UNSPLASH.court,
        timestamp: "16:05",
      },
      {
        title: "Match Point Spike",
        description: "The finish — a full-extension outside hit that sealed the straight-set win.",
        image: UNSPLASH.spike,
        timestamp: "28:40",
      },
    ],
    stats: [
      { label: "Kills", value: "18" },
      { label: "Blocks", value: "9" },
      { label: "Aces", value: "5" },
      { label: "Digs", value: "12" },
    ],
    keyPlayers: ["Kevin Lin", "Philos Himm"],
  },
  {
    slug: "game-3",
    number: 3,
    title: "Game 3 — The Close Call",
    date: "Oct 29",
    year: "2025",
    result: "Loss",
    score: "1–2",
    opponent: "Setter's Edge",
    badge: "GAME RECAP",
    badgeClass: "border border-primary text-primary",
    description:
      "Score, key plays, and MVP moment from a heartbreaker. Came back from sitting cold, started slow in Set 3 and couldn't close it out.",
    heroImage: "/images/matches-tc1.jpg",
    category: "Game 1–4",
    duration: "45 min",
    highlights: [
      {
        title: "Cold Start",
        description: "The squad came in off a long break, resulting in three early unforced errors in Set 1.",
        image: UNSPLASH.team,
        timestamp: "2:10",
      },
      {
        title: "Mid-Game Momentum Shift",
        description: "After falling behind 0-5, a timeout and a tactical adjustment sparked a 10-3 run.",
        image: UNSPLASH.court,
        timestamp: "18:30",
      },
      {
        title: "Set 3 — Final Rally",
        description: "A back-and-forth finish ended with a narrow 15-13 loss in the deciding set.",
        image: UNSPLASH.dig,
        timestamp: "42:55",
      },
    ],
    stats: [
      { label: "Kills", value: "11" },
      { label: "Blocks", value: "4" },
      { label: "Aces", value: "2" },
      { label: "Digs", value: "22" },
    ],
    keyPlayers: ["Kevin Lin", "Philos Himm"],
  },
  {
    slug: "game-4",
    number: 4,
    title: "Game 4 — Great Comeback",
    date: "Mar 1",
    year: "2026",
    result: "Win",
    score: "2–1",
    opponent: "Rivalry FC",
    badge: "RALLY BREAKDOWN",
    badgeClass: "bg-primary text-white",
    description:
      "Coming back from sitting got us cold. Started off slow but the engines turned on just in time for the rivalry match.",
    heroImage: "/images/matches-tc1.jpg",
    category: "Game 1–4",
    duration: "45 min",
    highlights: [
      {
        title: "The Cold Start",
        description: "After a long bench break, the team started slow — three service errors in the first five points.",
        image: UNSPLASH.team,
        timestamp: "1:30",
      },
      {
        title: "Engines On",
        description: "Philos ignited a comeback run with back-to-back kills from the left side.",
        image: UNSPLASH.spike,
        timestamp: "19:15",
      },
      {
        title: "Match-Clinching Block",
        description: "The defensive read that ended the rivalry night — a solo stuff block at the net.",
        image: UNSPLASH.block,
        timestamp: "43:00",
      },
    ],
    stats: [
      { label: "Kills", value: "16" },
      { label: "Blocks", value: "7" },
      { label: "Aces", value: "4" },
      { label: "Digs", value: "20" },
    ],
    keyPlayers: ["Kevin Lin", "Philos Himm"],
  },
  {
    slug: "game-5",
    number: 5,
    title: "Game 5 — Defensive Clinic",
    date: "Nov 12",
    year: "2025",
    result: "Win",
    score: "2–0",
    opponent: "Block Party",
    badge: "GAME RECAP",
    badgeClass: "bg-dark text-white",
    description:
      "A masterclass in defensive volleyball. The team held the opposition to single digits in both sets with elite reading of the game.",
    heroImage: UNSPLASH.dig,
    category: "Game 5–8",
    duration: "28 min",
    highlights: [
      {
        title: "Libero of the Match",
        description: "A series of platform-perfect digs that set up every transition attack.",
        image: UNSPLASH.dig,
        timestamp: "5:20",
      },
      {
        title: "Triple Block",
        description: "All three front-row players time the jump perfectly to roof a hard-driven ball.",
        image: UNSPLASH.block,
        timestamp: "15:40",
      },
      {
        title: "Set 2 Shutout",
        description: "Holding opponents to just 9 points in Set 2 — a season-best defensive performance.",
        image: UNSPLASH.court,
        timestamp: "25:00",
      },
    ],
    stats: [
      { label: "Kills", value: "12" },
      { label: "Blocks", value: "11" },
      { label: "Aces", value: "2" },
      { label: "Digs", value: "28" },
    ],
    keyPlayers: ["Kevin Lin", "Philos Himm"],
  },
  {
    slug: "game-6",
    number: 6,
    title: "Game 6 — Tactical Masterclass",
    date: "Jan 10",
    year: "2026",
    result: "Win",
    score: "2–1",
    opponent: "Serve & Volley",
    badge: "SIDE-BY-SIDE",
    badgeClass: "bg-dark text-white",
    description:
      "Compare two players' approaches to the same plays from Game 6. Side-by-side perspective toggle showing set plays and tactical adjustments.",
    heroImage: UNSPLASH.court,
    category: "Game 5–8",
    duration: "40 min",
    highlights: [
      {
        title: "The Pipe Combination",
        description: "A perfectly executed back-row attack through the middle of the block.",
        image: UNSPLASH.spike,
        timestamp: "6:50",
      },
      {
        title: "Setter Dump",
        description: "An unexpected second-ball attack by the setter that caught the defense completely off guard.",
        image: UNSPLASH.set,
        timestamp: "22:10",
      },
      {
        title: "Serve-Receive Breakdown",
        description: "A tactical film review of how the team dismantled the opposition's serve-receive system.",
        image: UNSPLASH.court,
        timestamp: "35:00",
      },
    ],
    stats: [
      { label: "Kills", value: "15" },
      { label: "Blocks", value: "5" },
      { label: "Aces", value: "6" },
      { label: "Digs", value: "17" },
    ],
    keyPlayers: ["Kevin Lin", "Philos Himm"],
  },
  {
    slug: "game-7",
    number: 7,
    title: "Game 7 — The Comeback",
    date: "Jan 28",
    year: "2026",
    result: "Win",
    score: "2–1",
    opponent: "Iron Setters",
    badge: "BEFORE & AFTER",
    badgeClass: "bg-primary text-white",
    description:
      "How the team's strategy evolved mid-game — before and after dropping the first set 10–25. See the adjustments that led to an improbable comeback.",
    heroImage: UNSPLASH.team,
    category: "Game 5–8",
    duration: "50 min",
    highlights: [
      {
        title: "Set 1 Collapse",
        description: "Dropping the first set 10–25 — what went wrong and how the team regrouped at the timeout.",
        image: UNSPLASH.court,
        timestamp: "10:00",
      },
      {
        title: "Tactical Pivot",
        description: "Switching to a 6-2 rotation in Set 2 opened up the back-row attack and changed everything.",
        image: UNSPLASH.set,
        timestamp: "28:20",
      },
      {
        title: "Clutch Set 3 Finish",
        description: "Winning the final set 15–12 after being down 8–12 — a genuine comeback.",
        image: UNSPLASH.spike,
        timestamp: "47:30",
      },
    ],
    stats: [
      { label: "Kills", value: "19" },
      { label: "Blocks", value: "8" },
      { label: "Aces", value: "3" },
      { label: "Digs", value: "24" },
    ],
    keyPlayers: ["Kevin Lin", "Philos Himm"],
  },
  {
    slug: "game-8",
    number: 8,
    title: "Game 8 — Midseason Check",
    date: "Feb 10",
    year: "2026",
    result: "Loss",
    score: "0–2",
    opponent: "The Diggers",
    badge: "GAME RECAP",
    badgeClass: "border border-dark text-dark",
    description:
      "A tough straight-set loss to a disciplined defensive team. The opposition's serve-receive was airtight and we couldn't create offense.",
    heroImage: UNSPLASH.dig,
    category: "Game 5–8",
    duration: "32 min",
    highlights: [
      {
        title: "Service Pressure",
        description: "The opposition's float serve exposed gaps in our serve-receive formation.",
        image: UNSPLASH.court,
        timestamp: "4:15",
      },
      {
        title: "Transition Breakdown",
        description: "Multiple in-system attacks stuffed at the net — a recurring theme in both sets.",
        image: UNSPLASH.block,
        timestamp: "17:00",
      },
      {
        title: "Late Push Falls Short",
        description: "A 5-1 run late in Set 2 raised hope, but the deficit was too large to overcome.",
        image: UNSPLASH.spike,
        timestamp: "29:50",
      },
    ],
    stats: [
      { label: "Kills", value: "9" },
      { label: "Blocks", value: "3" },
      { label: "Aces", value: "1" },
      { label: "Digs", value: "16" },
    ],
    keyPlayers: ["Kevin Lin", "Philos Himm"],
  },
  {
    slug: "game-9",
    number: 9,
    title: "Game 9 — Rookie Sensation",
    date: "Dec 5",
    year: "2025",
    result: "Win",
    score: "2–0",
    opponent: "Fresh Cuts",
    badge: "PLAYER SPOTLIGHT",
    badgeClass: "border border-dark text-dark",
    description:
      "Best moments from a breakout intramural performance — 12 kills and zero errors — with a quick post-game audio interview.",
    heroImage: UNSPLASH.spike,
    category: "Game 9–12",
    duration: "35 min",
    highlights: [
      {
        title: "12-Kill Performance",
        description: "A career-best outing from the team's breakout player — consistent and efficient from start to finish.",
        image: UNSPLASH.spike,
        timestamp: "0:00",
      },
      {
        title: "Aerial Spike",
        description: "The highlight of the night — a full-extension outside kill from the 3-meter line.",
        image: UNSPLASH.spike,
        timestamp: "14:35",
      },
      {
        title: "Closing Ace",
        description: "Match point sealed with a jump-float ace straight down the line.",
        image: UNSPLASH.court,
        timestamp: "33:00",
      },
    ],
    stats: [
      { label: "Kills", value: "20" },
      { label: "Blocks", value: "5" },
      { label: "Aces", value: "4" },
      { label: "Digs", value: "14" },
    ],
    keyPlayers: ["Kevin Lin", "Philos Himm"],
  },
  {
    slug: "game-10",
    number: 10,
    title: "Game 10 — Final Set Thriller",
    date: "Dec 20",
    year: "2025",
    result: "Win",
    score: "2–1",
    opponent: "Set Point",
    badge: "RALLY BREAKDOWN",
    badgeClass: "bg-primary text-white",
    description:
      "Top rallies from the nail-biting final set with slow-mo replays and freeze-frame annotations. Down 10–14, the team clawed back to win 17–15.",
    heroImage: UNSPLASH.block,
    category: "Game 9–12",
    duration: "30 min",
    highlights: [
      {
        title: "Down 10–14",
        description: "Facing match point four times — a mental test that the team passed with composure.",
        image: UNSPLASH.team,
        timestamp: "22:40",
      },
      {
        title: "The Run",
        description: "A stunning 7-1 run fueled by two aces, a block, and back-to-back kills.",
        image: UNSPLASH.spike,
        timestamp: "25:10",
      },
      {
        title: "17–15 Match Winner",
        description: "The kill that ended it — a line shot that dropped in the back corner.",
        image: UNSPLASH.court,
        timestamp: "28:55",
      },
    ],
    stats: [
      { label: "Kills", value: "22" },
      { label: "Blocks", value: "6" },
      { label: "Aces", value: "5" },
      { label: "Digs", value: "21" },
    ],
    keyPlayers: ["Kevin Lin", "Philos Himm"],
  },
  {
    slug: "game-11",
    number: 11,
    title: "Game 11 — Iron Wall",
    date: "Feb 17",
    year: "2026",
    result: "Loss",
    score: "1–2",
    opponent: "Iron Wall FC",
    badge: "GAME RECAP",
    badgeClass: "bg-dark text-white",
    description:
      "Down one set, digging deep to work around the Iron Wall in front of us. A close loss that had playoff implications.",
    heroImage: "/images/home-ep4-ironwall.jpg",
    category: "Game 9–12",
    duration: "40 min",
    highlights: [
      {
        title: "The Iron Wall",
        description: "The opposition's block was impenetrable — their middle blocker recorded 7 blocks in two sets.",
        image: UNSPLASH.block,
        timestamp: "8:00",
      },
      {
        title: "Adjustments in Set 2",
        description: "Switching to tip attacks and roll shots to bypass the block paid dividends in Set 2.",
        image: UNSPLASH.set,
        timestamp: "25:30",
      },
      {
        title: "Set 3 Decision Point",
        description: "A tight final set that came down to execution — one missed serve ended the match.",
        image: UNSPLASH.court,
        timestamp: "38:45",
      },
    ],
    stats: [
      { label: "Kills", value: "13" },
      { label: "Blocks", value: "4" },
      { label: "Aces", value: "2" },
      { label: "Digs", value: "19" },
    ],
    keyPlayers: ["Kevin Lin", "Philos Himm"],
  },
  {
    slug: "game-12",
    number: 12,
    title: "Game 12 — Season Finale",
    date: "Mar 1",
    year: "2026",
    result: "Win",
    score: "2–0",
    opponent: "Top Seeds",
    badge: "GAME RECAP",
    badgeClass: "bg-primary text-white",
    description:
      "The final regular-season match. A focused, sharp performance to close the season — back-to-back sets won 25–18 and 25–20.",
    heroImage: UNSPLASH.team,
    category: "Game 9–12",
    duration: "36 min",
    highlights: [
      {
        title: "Set the Tone Early",
        description: "A 6-1 opening run that put the team in control from the first rotation.",
        image: UNSPLASH.spike,
        timestamp: "3:00",
      },
      {
        title: "Season-Best Serve Run",
        description: "Five consecutive aces in Set 2 — the serve that made the opposition call back-to-back timeouts.",
        image: UNSPLASH.court,
        timestamp: "22:15",
      },
      {
        title: "Final Point — Season Closer",
        description: "The last kill of the regular season, celebrated with the whole squad on court.",
        image: UNSPLASH.team,
        timestamp: "34:50",
      },
    ],
    stats: [
      { label: "Kills", value: "17" },
      { label: "Blocks", value: "8" },
      { label: "Aces", value: "7" },
      { label: "Digs", value: "15" },
    ],
    keyPlayers: ["Kevin Lin", "Philos Himm"],
  },
];

export function getGame(slug: string): Game | undefined {
  return games.find((g) => g.slug === slug);
}

export function getPrevNext(slug: string): { prev: Game | null; next: Game | null } {
  const idx = games.findIndex((g) => g.slug === slug);
  return {
    prev: idx > 0 ? games[idx - 1] : null,
    next: idx < games.length - 1 ? games[idx + 1] : null,
  };
}
