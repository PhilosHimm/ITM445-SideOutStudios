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
    slug: "game-3",
    number: 3,
    title: "EP 1 — The Close Call",
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
    heroImage: "/images/home-ep1-blocks.png",
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
    storyLink: "/stories?story=the-close-call",
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
    title: "EP 2 — Rivalry Night",
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
    heroImage: "/images/home-ep2-spike.png",
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
    storyLink: "/stories?story=rivalry-night",
    pollQuestion: "When did you know the comeback was on?",
    pollOptionLabels: ["Philos' back-to-back kills", "Right after the first timeout", "The match-clinching block"],
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
    slug: "game-7",
    number: 7,
    title: "EP 4 — Down 10–25",
    date: "Jan 28",
    year: "2026",
    result: "Win",
    score: "2–1",
    opponent: "Iron Setters",
    badge: "FULL STORY",
    badgeClass: "bg-primary text-white",
    description:
      "How the team's strategy evolved mid-game — before and after dropping the first set 10–25. See the adjustments that led to an improbable comeback.",
    matchSummary:
      "Losing Set 1 by 15 points — 10–25 — is the kind of scoreline that breaks teams. This team used it as a reset. The halftime adjustment to a 6-2 rotation in Set 2 unlocked the back-row attack and completely changed the dynamic. Winning Set 3 15–12 after being down 8–12 is the kind of result you look back on at the end of a season.",
    heroImage: "/images/home-ep3-game.png",
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
    storyLink: "/stories?story=the-comeback",
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
    slug: "game-11",
    number: 11,
    title: "EP 3 — The Iron Wall",
    date: "Feb 17",
    year: "2026",
    result: "Loss",
    score: "1–2",
    opponent: "Iron Wall FC",
    badge: "TACTICAL FILM",
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
    storyLink: "/stories?story=iron-wall",
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
    title: "EP 5 — Season Closer",
    date: "Mar 1",
    year: "2026",
    result: "Win",
    score: "2–0",
    opponent: "Top Seeds",
    badge: "SEASON FINALE",
    badgeClass: "bg-primary text-white",
    description:
      "The final regular-season match. A focused, sharp performance to close the season — back-to-back sets won 25–18 and 25–20.",
    matchSummary:
      "Everything clicked in the season finale — the 6-1 opening run set the tone, and from there the team never looked back. Five straight aces in Set 2 is the kind of run that breaks opponents mentally, and Top Seeds had no response. Going out on a straight-set win against the second seed in the table was the perfect way to close the regular season and head into the postseason with momentum.",
    heroImage: UNSPLASH.court,
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
    storyLink: "/stories?story=season-finale",
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
