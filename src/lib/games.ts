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

export interface GameSet {
  setNumber: number;
  ourScore: number;
  theirScore: number;
  result: "Won" | "Lost";
  bullets: string[];
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
  matchSummary: string;
  heroImage: string;
  category: "Game 1–4" | "Game 5–8" | "Game 9–12";
  duration: string;
  highlights: GameHighlight[];
  sets: GameSet[];
  stats: GameStat[];
  keyPlayers: string[];
  storyLink: string;
  pollQuestion: string;
  pollOptionLabels: string[];
  pollVotes: number[];
  audioTitle: string;
  commentPrompt: string;
  sampleComment: { text: string; author: string };
  recapLine: string;
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
    matchSummary:
      "The season opener was anything but easy — Team Spike pushed us to three sets with relentless passing and timely blocks. We weathered an uneven Set 2 where our offense stalled, before regrouping for a nerve-wracking Set 3 finish. Philos' 23–23 dig was the defining play of the night, keeping the rally alive when everything was on the line.",
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
    sets: [
      {
        setNumber: 1,
        ourScore: 25,
        theirScore: 22,
        result: "Won",
        bullets: [
          "Kevin's opening jump serve ace set an aggressive tone from point one",
          "Clean serve-receive through the middle gave us consistent transition attacks",
          "Closed out the set on a stuff block that silenced their outside hitter",
        ],
      },
      {
        setNumber: 2,
        ourScore: 18,
        theirScore: 25,
        result: "Lost",
        bullets: [
          "Three back-to-back service errors handed them free points early",
          "Their setter found the seams in our block repeatedly",
          "We couldn't convert in-system attacks — offense stalled completely",
        ],
      },
      {
        setNumber: 3,
        ourScore: 15,
        theirScore: 13,
        result: "Won",
        bullets: [
          "Philos' platform dig at 23–23 kept the rally alive when we needed it most",
          "Defensive composure held under match pressure in the final points",
          "Closed it out with a kill down the line — season first W secured",
        ],
      },
    ],
    stats: [
      { label: "Kills", value: "14" },
      { label: "Blocks", value: "6" },
      { label: "Aces", value: "3" },
      { label: "Digs", value: "18" },
    ],
    keyPlayers: ["Kevin Lin", "Philos Himm"],
    storyLink: "/stories",
    pollQuestion: "What was the turning point against Team Spike?",
    pollOptionLabels: ["Kevin's opening serve ace", "Set 2 stuff block", "Philos' 23–23 dig"],
    pollVotes: [98, 72, 131],
    audioTitle: "Game 1 — Raw Post-Game Reactions",
    commentPrompt: "Cold start or not — what would you have done in Set 3?",
    sampleComment: {
      text: "That 23-23 dig was literally the whole match. Season saved in a single platform.",
      author: "SpikeFan88",
    },
    recapLine: "Top rally · Clutch dig at 23–23",
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
    matchSummary:
      "Against Net Ninjas we were in control from the very first rotation — our blocking system was airtight and our serve pressure was relentless. Kevin recorded five blocks on the night as we limited the opposition to just 9 points in Set 2. The straight-set win was arguably our most complete team performance of the early season.",
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
    sets: [
      {
        setNumber: 1,
        ourScore: 25,
        theirScore: 16,
        result: "Won",
        bullets: [
          "A 7-0 closing run — back-to-back blocks completely demoralized their offense",
          "Kevin read their outside hitter's approach angle perfectly all set",
          "Triple-digit percentage on serve-receive kept us in system every rally",
        ],
      },
      {
        setNumber: 2,
        ourScore: 25,
        theirScore: 9,
        result: "Won",
        bullets: [
          "Held Net Ninjas to 9 points — a season-best defensive set",
          "Kevin's three-ace corner serve streak broke their rhythm completely",
          "Full-extension outside kill closed it — the cleanest finish of the season",
        ],
      },
    ],
    stats: [
      { label: "Kills", value: "18" },
      { label: "Blocks", value: "9" },
      { label: "Aces", value: "5" },
      { label: "Digs", value: "12" },
    ],
    keyPlayers: ["Kevin Lin", "Philos Himm"],
    storyLink: "/stories",
    pollQuestion: "Best rally of the Blocks Masterclass?",
    pollOptionLabels: ["The 7-0 Set 1 shutout run", "Kevin's triple ace streak", "Match point full-extension spike"],
    pollVotes: [145, 88, 63],
    audioTitle: "Game 2 — Kevin's Post-Block Interview",
    commentPrompt: "Which block made you actually stand up?",
    sampleComment: {
      text: "Those three corner serves were completely unreadable. Net Ninjas never had a chance.",
      author: "NetNinjaHater",
    },
    recapLine: "Big block · 7-0 shutout run",
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
    matchSummary:
      "Setter's Edge exposed our cold-start weakness early — three unforced errors in the first five points put us in a hole we never fully escaped in Set 1. We fought back brilliantly in Set 2 with a 10-3 run, only to watch Set 3 slip away at 13–15. A one-point margin in the final set was brutal, but the tactical adjustments we found mid-match gave us a blueprint for next time.",
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
    sets: [
      {
        setNumber: 1,
        ourScore: 17,
        theirScore: 25,
        result: "Lost",
        bullets: [
          "Three early unforced errors in the first five points — cold-start damage we couldn't undo",
          "Their setter found the corners of our block while we were still warming up mentally",
          "Down 5-0 within the first three minutes — never recovered the opening deficit",
        ],
      },
      {
        setNumber: 2,
        ourScore: 25,
        theirScore: 20,
        result: "Won",
        bullets: [
          "Timeout at 0-5 sparked an immediate 10-3 run — the team responded perfectly",
          "Serve pressure finally materialized and forced three reception errors",
          "Closed the set with confidence — momentum was fully on our side heading into Set 3",
        ],
      },
      {
        setNumber: 3,
        ourScore: 13,
        theirScore: 15,
        result: "Lost",
        bullets: [
          "Neck and neck all the way — never more than 2 points separated at any stage",
          "13-all was the pivot — nerves crept in at the worst possible moment",
          "One missed serve was the difference — a lesson in closing out tight sets",
        ],
      },
    ],
    stats: [
      { label: "Kills", value: "11" },
      { label: "Blocks", value: "4" },
      { label: "Aces", value: "2" },
      { label: "Digs", value: "22" },
    ],
    keyPlayers: ["Kevin Lin", "Philos Himm"],
    storyLink: "/stories",
    pollQuestion: "Where did the match slip away?",
    pollOptionLabels: ["Cold start errors in Set 1", "Set 3 nerves at 13-all", "Never recovered the momentum"],
    pollVotes: [124, 85, 42],
    audioTitle: "Game 3 — Honest Debrief",
    commentPrompt: "What call would you have made at 13-all in the final set?",
    sampleComment: {
      text: "The rotation switch was definitely the turning point!",
      author: "VolleyFan99",
    },
    recapLine: "Momentum swing · 10-3 comeback run",
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
    matchSummary:
      "Nobody likes coming in cold for a rivalry match — and Set 1 showed exactly why, with three service errors in the first five points. But once the engines finally turned on in Set 2, this was a different team entirely. Philos' back-to-back kills sparked a run we never gave back, and a match-clinching solo block at the net sent the crowd home talking.",
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
    sets: [
      {
        setNumber: 1,
        ourScore: 18,
        theirScore: 25,
        result: "Lost",
        bullets: [
          "Three service errors in the opening five points — sitting cold with zero warm-up time",
          "Rivalry FC smelled blood and ran a 6-0 run before we could recalibrate",
          "Physically and mentally not present for the first set — pure cold-start damage",
        ],
      },
      {
        setNumber: 2,
        ourScore: 25,
        theirScore: 20,
        result: "Won",
        bullets: [
          "Philos' back-to-back left-side kills were the spark — energy shifted completely",
          "Serve pressure finally activated and forced Rivalry FC into passive receive",
          "Closed the set with a mini 5-0 run — momentum was fully flipped",
        ],
      },
      {
        setNumber: 3,
        ourScore: 15,
        theirScore: 11,
        result: "Won",
        bullets: [
          "Never looked back after the Set 2 energy swing — owned this set from the start",
          "Tight serving kept them out of system throughout the final set",
          "Kevin's solo stuff block at the net sealed it — loudest moment of the rivalry match",
        ],
      },
    ],
    stats: [
      { label: "Kills", value: "16" },
      { label: "Blocks", value: "7" },
      { label: "Aces", value: "4" },
      { label: "Digs", value: "20" },
    ],
    keyPlayers: ["Kevin Lin", "Philos Himm"],
    storyLink: "/stories",
    pollQuestion: "When did you know the comeback was on?",
    pollOptionLabels: ["Philos' back-to-back kills", "Right after the first timeout", "That match-clinching block"],
    pollVotes: [109, 57, 83],
    audioTitle: "Game 4 — Rivalry Night Debrief",
    commentPrompt: "Sitting cold all match — what's your warm-up routine?",
    sampleComment: {
      text: "The engines came on exactly when we needed them. That final block was LOUD.",
      author: "RivalryWatcher",
    },
    recapLine: "Big block · Rivalry comeback",
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
    matchSummary:
      "Block Party came in with a strong attack game, but we were simply unbreakable at the back. Our reading of the game was at its peak — every transition dug, every angle covered — and Kevin's triple block in Set 2 was the highlight of the night. Holding an opponent to 9 points in a set at this level is extraordinary, and it's a benchmark we've set for ourselves going forward.",
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
    sets: [
      {
        setNumber: 1,
        ourScore: 25,
        theirScore: 14,
        result: "Won",
        bullets: [
          "Every transition ball dug cleanly — platform passing was textbook all set",
          "Our reading of Block Party's attack patterns was ahead of them all night",
          "Closed the set comfortably — the defense gave the offense an easy job",
        ],
      },
      {
        setNumber: 2,
        ourScore: 25,
        theirScore: 9,
        result: "Won",
        bullets: [
          "All three front-row players timed the triple block perfectly — roofed a hard-driven ball",
          "9 points allowed — a season-best defensive set, possibly an intramural record",
          "Block Party called two timeouts to break the momentum, but there was no stopping this defense",
        ],
      },
    ],
    stats: [
      { label: "Kills", value: "12" },
      { label: "Blocks", value: "11" },
      { label: "Aces", value: "2" },
      { label: "Digs", value: "28" },
    ],
    keyPlayers: ["Kevin Lin", "Philos Himm"],
    storyLink: "/stories",
    pollQuestion: "Most impressive defensive play of the clinic?",
    pollOptionLabels: ["The all-three-players triple block", "Libero's platform dig series", "Set 2 shutout to single digits"],
    pollVotes: [77, 103, 61],
    audioTitle: "Game 5 — Defensive Debrief",
    commentPrompt: "Have you ever seen defense this dominant at the intramural level?",
    sampleComment: {
      text: "9 points in a set. Absolutely suffocating. Block Party had no answers.",
      author: "BlockPartySurvivor",
    },
    recapLine: "Defensive clinic · 9-point shutout set",
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
    matchSummary:
      "Serve & Volley had a sophisticated system and it showed in a competitive Set 2 where they outplayed us tactically. But the key adjustment — introducing the back-row pipe combination in Set 3 — opened up angles their block simply couldn't cover. The surprise setter dump in Set 2 was pure improvisation, but it might have been the play that saved the match.",
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
    sets: [
      {
        setNumber: 1,
        ourScore: 25,
        theirScore: 21,
        result: "Won",
        bullets: [
          "The pipe combination opened up Set 1 — a back-row attack their block had no answer for",
          "Our serve-receive was clean and allowed the setter to work multiple attack options",
          "Won the set by staying disciplined in transition — no flashy plays needed",
        ],
      },
      {
        setNumber: 2,
        ourScore: 20,
        theirScore: 25,
        result: "Lost",
        bullets: [
          "Serve & Volley's tactical system dismantled our serve-receive in the middle rotations",
          "The surprise setter dump — though brilliant — came in a lost set where the deficit was too large",
          "Couldn't find answers for their angle attacks — gave back the tactical edge we'd built",
        ],
      },
      {
        setNumber: 3,
        ourScore: 15,
        theirScore: 10,
        result: "Won",
        bullets: [
          "Introduced a new serve-receive formation to counter their serving zones — worked immediately",
          "Aces in the 5th and 6th rotations broke the set open",
          "Closed it out tactically rather than on power — the most cerebral win of the season",
        ],
      },
    ],
    stats: [
      { label: "Kills", value: "15" },
      { label: "Blocks", value: "5" },
      { label: "Aces", value: "6" },
      { label: "Digs", value: "17" },
    ],
    keyPlayers: ["Kevin Lin", "Philos Himm"],
    storyLink: "/stories",
    pollQuestion: "What play best showed the tactical edge?",
    pollOptionLabels: ["The back-row pipe combination", "The surprise setter dump", "Serve-receive system domination"],
    pollVotes: [66, 138, 49],
    audioTitle: "Game 6 — Tactical Film Session Audio",
    commentPrompt: "Which tactical adjustment had you shaking your head?",
    sampleComment: {
      text: "That setter dump was the most disrespectful play of the season. Unannounced.",
      author: "TacticalNerd",
    },
    recapLine: "Tactical edge · Setter dump highlight",
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
    matchSummary:
      "Losing Set 1 by 15 points — 10–25 — is the kind of scoreline that breaks teams. This team used it as a reset. The halftime adjustment to a 6-2 rotation in Set 2 unlocked the back-row attack and completely changed the dynamic. Winning Set 3 15–12 after being down 8–12 is the kind of result you look back on at the end of a season.",
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
    sets: [
      {
        setNumber: 1,
        ourScore: 10,
        theirScore: 25,
        result: "Lost",
        bullets: [
          "10–25 — the scoreline says everything. Iron Setters were dominant in every phase",
          "Our serve-receive broke down early and never recovered across the full set",
          "Timeout conversations at 5-18 couldn't arrest the slide — the set was already gone",
        ],
      },
      {
        setNumber: 2,
        ourScore: 25,
        theirScore: 18,
        result: "Won",
        bullets: [
          "Switching to 6-2 rotation unlocked the back-row attack — their block couldn't adjust",
          "The team came out with a different energy entirely — the Set 1 collapse became the fuel",
          "Won the set convincingly — a complete tactical and emotional turnaround",
        ],
      },
      {
        setNumber: 3,
        ourScore: 15,
        theirScore: 12,
        result: "Won",
        bullets: [
          "Down 8–12 with the match slipping away — back-to-back kills brought it back to 10–12",
          "A 7-0 run from that moment was arguably the best stretch of volleyball we've played all season",
          "15–12 final — one of the most memorable wins in Side-Out Studios history",
        ],
      },
    ],
    stats: [
      { label: "Kills", value: "19" },
      { label: "Blocks", value: "8" },
      { label: "Aces", value: "3" },
      { label: "Digs", value: "24" },
    ],
    keyPlayers: ["Kevin Lin", "Philos Himm"],
    storyLink: "/stories",
    pollQuestion: "What turned the match around after Set 1?",
    pollOptionLabels: ["Switching to the 6-2 rotation", "The team's timeout talk", "Sheer willpower and momentum"],
    pollVotes: [112, 91, 74],
    audioTitle: "Game 7 — Comeback Story Audio",
    commentPrompt: "Down 10-25 in Set 1 — would you have believed the comeback?",
    sampleComment: {
      text: "Losing 10-25 and then coming all the way back is genuinely unhinged. That's this team.",
      author: "SetterFanatico",
    },
    recapLine: "Comeback story · Down 10–25 to win",
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
    matchSummary:
      "The Diggers had a game plan and executed it flawlessly — their float serve exposed every gap in our receive formation and we never found a fix. The rare 5-1 run late in Set 2 showed we had the offense, but by then the deficit was too steep to overcome. This loss was a valuable midseason reality check about what happens when we can't create offense from serve-receive.",
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
    sets: [
      {
        setNumber: 1,
        ourScore: 15,
        theirScore: 25,
        result: "Lost",
        bullets: [
          "The Diggers' float serve hit our seams from point one — three mishandled balls in the first seven points",
          "Out-of-system attacks gifted them easy digs and transition kills",
          "Never found a rhythm — a messy, passive set that set the wrong tone",
        ],
      },
      {
        setNumber: 2,
        ourScore: 17,
        theirScore: 25,
        result: "Lost",
        bullets: [
          "Multiple in-system attacks stuffed at the net — they read our patterns before we set them",
          "The 5-1 run late was promising but came when the gap was already 10+ points",
          "Couldn't create offense — serve-receive never gave the setter a clean ball all set",
        ],
      },
    ],
    stats: [
      { label: "Kills", value: "9" },
      { label: "Blocks", value: "3" },
      { label: "Aces", value: "1" },
      { label: "Digs", value: "16" },
    ],
    keyPlayers: ["Kevin Lin", "Philos Himm"],
    storyLink: "/stories",
    pollQuestion: "Biggest issue against The Diggers?",
    pollOptionLabels: ["Their serve pressure all match", "Our transition attack breakdown", "Couldn't create offense at all"],
    pollVotes: [95, 58, 72],
    audioTitle: "Game 8 — Honest Midseason Review",
    commentPrompt: "What would you fix heading into the second half of the season?",
    sampleComment: {
      text: "Their float serve was on a completely different level. We never adjusted.",
      author: "MidSeasonAnalyst",
    },
    recapLine: "Tough loss · Serve-receive exposed",
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
    matchSummary:
      "12 kills and zero attack errors in two sets — a stat line that simply doesn't show up at the intramural level. Against Fresh Cuts, everything clicked offensively: the full-extension aerial outside kill was the visual peak, but the zero-error discipline across 35 minutes was the real story. This was a performance that sets a standard for what consistent high-level play looks like for this program.",
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
    sets: [
      {
        setNumber: 1,
        ourScore: 25,
        theirScore: 17,
        result: "Won",
        bullets: [
          "6 kills in Set 1, zero errors — the efficiency was immediately apparent",
          "The aerial outside kill at 14:35 was the defining image of the whole match",
          "Fresh Cuts doubled their block coverage but couldn't stop the attack angle",
        ],
      },
      {
        setNumber: 2,
        ourScore: 25,
        theirScore: 14,
        result: "Won",
        bullets: [
          "6 more kills in Set 2 — the second half was just as clinical as the first",
          "Zero errors across the full match — a number that will stand in this team's record books",
          "Sealed it with a jump-float ace straight down the line — an exclamation point finish",
        ],
      },
    ],
    stats: [
      { label: "Kills", value: "20" },
      { label: "Blocks", value: "5" },
      { label: "Aces", value: "4" },
      { label: "Digs", value: "14" },
    ],
    keyPlayers: ["Kevin Lin", "Philos Himm"],
    storyLink: "/stories",
    pollQuestion: "Best moment of the breakout performance?",
    pollOptionLabels: ["The full 12-kill zero-error night", "That aerial outside spike", "Closing ace straight down the line"],
    pollVotes: [84, 117, 55],
    audioTitle: "Game 9 — Breakout Player Audio Interview",
    commentPrompt: "Where does this breakout rank in team history?",
    sampleComment: {
      text: "12 kills and zero errors is a video game stat line. That kind of efficiency doesn't exist.",
      author: "FreshCutsFan",
    },
    recapLine: "Breakout game · 12 kills, zero errors",
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
    matchSummary:
      "Surviving four match points is the kind of story that only happens in volleyball — one point separating a loss from one of the season's best wins. Against Set Point, we were done at 10–14. A back-to-back ace sequence started the comeback, a block fueled the momentum, and a corner line kill to close at 17–15 was the perfect ending. That composure under pressure is something you can't script.",
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
    sets: [
      {
        setNumber: 1,
        ourScore: 25,
        theirScore: 20,
        result: "Won",
        bullets: [
          "Controlled Set 1 through strong serve pressure and clean transition",
          "Set Point's offense was dangerous but we covered the angles well throughout",
          "Won the set efficiently — no sign of what was about to happen in Set 3",
        ],
      },
      {
        setNumber: 2,
        ourScore: 18,
        theirScore: 25,
        result: "Lost",
        bullets: [
          "Set Point flipped the script — their serving unlocked our serve-receive weaknesses",
          "Multiple stuffed attacks when we were in system, which broke our offensive confidence",
          "Dropped the set cleanly — it was heading to a deciding third set",
        ],
      },
      {
        setNumber: 3,
        ourScore: 17,
        theirScore: 15,
        result: "Won",
        bullets: [
          "Down 10–14, facing match point four separate times — mental fortitude on display",
          "Back-to-back aces started the 7-1 run that pulled us level at 14–14",
          "Corner line kill at 17–15 — the most dramatic finish of the season",
        ],
      },
    ],
    stats: [
      { label: "Kills", value: "22" },
      { label: "Blocks", value: "6" },
      { label: "Aces", value: "5" },
      { label: "Digs", value: "21" },
    ],
    keyPlayers: ["Kevin Lin", "Philos Himm"],
    storyLink: "/stories",
    pollQuestion: "Down 10-14 facing match point — which play saved it?",
    pollOptionLabels: ["The back-to-back aces", "The momentum-shifting block", "Corner line shot to close it out"],
    pollVotes: [153, 88, 102],
    audioTitle: "Game 10 — Final Set Thriller Debrief",
    commentPrompt: "Four match points survived — what's going through your head at 10-14?",
    sampleComment: {
      text: "Four match points. Four. And they still won. That composure is something you can't coach.",
      author: "ThrillerFanatic",
    },
    recapLine: "Thriller · Survived 4 match points",
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
    matchSummary:
      "Iron Wall FC's middle blocker was a force of nature — 7 blocks across two sets is extraordinary, and it shut down our power game entirely. The tip-shot adjustment in Set 2 worked beautifully, taking us to a deciding third set. But one missed serve at a critical moment in Set 3 was the difference, and the playoff implications of the loss made it sting even more.",
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
    sets: [
      {
        setNumber: 1,
        ourScore: 18,
        theirScore: 25,
        result: "Lost",
        bullets: [
          "Their middle blocker recorded 7 blocks in the first two sets — impenetrable in front of us",
          "Every power attack was roofed or deflected — we had no answer for their closing speed",
          "Needed to adjust to tips and roll shots much sooner — waited too long to change approach",
        ],
      },
      {
        setNumber: 2,
        ourScore: 25,
        theirScore: 21,
        result: "Won",
        bullets: [
          "The tip-shot adjustment paid off immediately — their blocker couldn't cover height and angle simultaneously",
          "Roll shots over the block opened up the court and gave us clean attack angles",
          "Won the set with tactical discipline — force and power abandoned in favor of craft",
        ],
      },
      {
        setNumber: 3,
        ourScore: 13,
        theirScore: 15,
        result: "Lost",
        bullets: [
          "A tight, hard-fought set where either team could have taken it",
          "One missed serve in a critical rotation opened the door for their closing run",
          "Fell short 13–15 — the playoff implications made this two-point loss especially painful",
        ],
      },
    ],
    stats: [
      { label: "Kills", value: "13" },
      { label: "Blocks", value: "4" },
      { label: "Aces", value: "2" },
      { label: "Digs", value: "19" },
    ],
    keyPlayers: ["Kevin Lin", "Philos Himm"],
    storyLink: "/stories",
    pollQuestion: "Could the Iron Wall result have been different?",
    pollOptionLabels: ["Gone to tip attacks earlier", "Better serve execution in Set 3", "More angle shots, less power"],
    pollVotes: [79, 112, 65],
    audioTitle: "Game 11 — Iron Wall Post-Game Audio",
    commentPrompt: "How do you crack a middle blocker with 7 blocks in a set?",
    sampleComment: {
      text: "Tip shots worked in Set 2. Should've gone right back there in Set 3. That missed serve hurt.",
      author: "TacticalTalk",
    },
    recapLine: "Iron wall · 7-block opponent",
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
    matchSummary:
      "Everything clicked in the season finale — the 6-1 opening run set the tone, and from there the team never looked back. Five straight aces in Set 2 is the kind of run that breaks opponents mentally, and Top Seeds had no response. Going out on a straight-set win against the second seed in the table was the perfect way to close the regular season and head into the postseason with momentum.",
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
    sets: [
      {
        setNumber: 1,
        ourScore: 25,
        theirScore: 18,
        result: "Won",
        bullets: [
          "6-1 opening run — put Top Seeds on the back foot from the very first rotation",
          "Clean serving and tight blocking made it impossible for them to build momentum",
          "Controlled the set wire-to-wire — exactly the focused finish to the regular season we wanted",
        ],
      },
      {
        setNumber: 2,
        ourScore: 25,
        theirScore: 20,
        result: "Won",
        bullets: [
          "Five consecutive aces in Set 2 — Top Seeds called back-to-back timeouts and still couldn't stop it",
          "The serve run was the defining sequence of the season — unstoppable and relentless",
          "Finished 25–20 — the season's last kill celebrated by the whole squad on court",
        ],
      },
    ],
    stats: [
      { label: "Kills", value: "17" },
      { label: "Blocks", value: "8" },
      { label: "Aces", value: "7" },
      { label: "Digs", value: "15" },
    ],
    keyPlayers: ["Kevin Lin", "Philos Himm"],
    storyLink: "/stories",
    pollQuestion: "Best moment of the season finale?",
    pollOptionLabels: ["The 6-1 tone-setting opening run", "Five straight aces in Set 2", "The season-closing kill on court"],
    pollVotes: [68, 201, 94],
    audioTitle: "Game 12 — Season Wrap Audio",
    commentPrompt: "What's the one thing you take away from this season?",
    sampleComment: {
      text: "Five aces in a row to close out the season. That's the stuff of legends right there.",
      author: "SeasonFan2025",
    },
    recapLine: "Season closer · 5 straight aces",
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
