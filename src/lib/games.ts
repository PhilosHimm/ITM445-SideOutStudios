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

export interface GamePerspective {
  summary: string;
  note: string;
  stats: GameStat[];
  highlightNotes: string[];
  setBullets: string[][];
  sets: Array<{ setNumber: number; ourScore: number; theirScore: number; result: "Won" | "Lost" }>;
}

export interface Game {
  slug: string;
  player: "kevin" | "philos";
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
  perspectives?: {
    kevin: GamePerspective;
    philos: GamePerspective;
  };
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
    player: "kevin",
    number: 3,
    title: "EP 1 — The Close Call",
    date: "Mar 1",
    year: "2026",
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
    storyLink: "/highlights?story=the-close-call",
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
    perspectives: {
      kevin: {
        summary:
          "From behind the camera, Set 2 was the whole story. I was tracking block timing all match and that timeout at 0-5 was a visible reset — you could see it on everyone's face. The 10-3 run that followed was the cleanest volleyball we played all game. I built the entire edit around that pivot.",
        note:
          "The final rally in Set 3 — I had the camera on the server at 13-all. I knew it was going to decide everything. You never forget those moments when you're filming them.",
        stats: [
          { label: "Kills", value: "6" },
          { label: "Blocks", value: "3" },
          { label: "Aces", value: "1" },
          { label: "Digs", value: "9" },
        ],
        highlightNotes: [
          "Caught the cold start from the sideline — three errors in five points while he was still adjusting the camera angle.",
          "Kevin's outside swing at 5-all was the kill that locked in the 10-3 run — he shot the replay afterward on a second camera.",
          "Filmed the final rally from behind the baseline. The footage shows the server's hesitation at 13-all before the miss.",
        ],
        setBullets: [
          [
            "Kevin's first set was spent adjusting — two of the three unforced errors came off his side of the court",
            "His block timing was a half-step late all set, letting their setter find the seams",
            "Pulled the camera during a dead ball at 3-12 to capture the body language on the bench",
          ],
          [
            "Two kills in the 10-3 run including a cross-court shot that broke the opposition's block scheme",
            "Kevin's block at 18-15 forced a timeout and shifted the momentum completely",
            "His serve pressure in the last three rotations forced two reception errors",
          ],
          [
            "Steady side-out play through 13-all — didn't make an error in Set 3",
            "Had the camera on the server during the decisive miss — footage became the episode's closing shot",
            "Finished with zero attack errors in the final set, but it wasn't enough to close",
          ],
        ],
        sets: [
          { setNumber: 1, ourScore: 20, theirScore: 25, result: "Lost" },
          { setNumber: 2, ourScore: 25, theirScore: 19, result: "Won" },
          { setNumber: 3, ourScore: 15, theirScore: 13, result: "Won" },
        ],
      },
      philos: {
        summary:
          "I remember every point of Set 3 from 13-all. We had the momentum, we had the energy — and then one missed serve handed it back. The dig on match point was pure instinct, no thought behind it. We were so close it still stings.",
        note:
          "Cold start errors in Set 1 were on me. I should have been moving my feet earlier — the three unforced errors that put us in a hole came from complacency in the warm-up zone.",
        stats: [
          { label: "Kills", value: "5" },
          { label: "Blocks", value: "1" },
          { label: "Aces", value: "1" },
          { label: "Digs", value: "13" },
        ],
        highlightNotes: [
          "Philos' footwork was slow in the opening rotations — the cold start hit the backcourt hardest.",
          "The dig-to-kill transition at 15-12 was Philos at his best — instinct over technique.",
          "Philos was the last one touching the ball on the final rally, with a desperation dig that kept the point alive for two more contacts.",
        ],
        setBullets: [
          [
            "Cold legs from the warm-up zone — Philos' first three passes went long and out of system",
            "Backcourt coverage was a step behind all set, letting balls drop between zones",
            "Acknowledge after the set: 'I wasn't moving my feet — that's on me'",
          ],
          [
            "Philos' back-row attack at 10-8 was the highlight — a line shot that nobody read",
            "Defensive digs kept four rallies alive during the 10-3 run that changed the match",
            "Closed the set with a kill from the left side that brought the team energy up completely",
          ],
          [
            "Seven digs in Set 3 alone — every rally went through Philos in the backcourt",
            "The desperation dig at match point was pure reflex — dove full-extension and popped it up",
            "One missed serve at 13-all was the turning point — a serve Philos had been making all set",
          ],
        ],
        sets: [
          { setNumber: 1, ourScore: 15, theirScore: 25, result: "Lost" },
          { setNumber: 2, ourScore: 25, theirScore: 22, result: "Won" },
          { setNumber: 3, ourScore: 13, theirScore: 15, result: "Lost" },
        ],
      },
    },
  },
  {
    slug: "game-4",
    player: "philos",
    number: 4,
    title: "EP 2 — Rivalry Night",
    date: "Oct 29",
    year: "2025",
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
    storyLink: "/highlights?story=rivalry-night",
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
    perspectives: {
      kevin: {
        summary:
          "I had the camera pointed at Philos specifically when those two left-side kills landed — I'd been watching him find his range all Set 1 and knew something was about to shift. The solo block that closed the match was the moment the court erupted. That footage alone made the whole night worth filming.",
        note:
          "Rivalry matches are the hardest to film. The energy is different, the light is harsh, and you're also trying to play. But those back-to-back kills — I caught both on camera. Still my favourite clip of the season.",
        stats: [
          { label: "Kills", value: "8" },
          { label: "Blocks", value: "5" },
          { label: "Aces", value: "2" },
          { label: "Digs", value: "7" },
        ],
        highlightNotes: [
          "Kevin was one of the service-error culprits — two misses in the first five points while cold from the bench.",
          "His block read improved drastically in Set 2 — three solo blocks shut down Rivalry FC's middle attack.",
          "The match-clinching stuff block was Kevin's — a clean solo read that sent the crowd home.",
        ],
        setBullets: [
          [
            "Two of the three service errors were Kevin's — cold hands from the bench and no warm-up tosses",
            "His blocking was a beat slow all set, giving Rivalry FC easy angles through the seam",
            "Filmed the timeout talk between sets — the frustration on camera became part of the story edit",
          ],
          [
            "Three solo blocks at the net completely shut down their middle attack in Set 2",
            "Kevin's cross-court kill at 20-16 extended the run and kept pressure on their backcourt",
            "Serve placement improved — two aces targeting short zone 1 that Rivalry FC couldn't handle",
          ],
          [
            "Kevin owned the net in Set 3 — two more blocks kept them out of rhythm throughout",
            "The match-clinching stuff block was a solo read on their outside hitter — loudest moment of the night",
            "Finished with 5 total blocks — his best defensive performance of the season",
          ],
        ],
        sets: [
          { setNumber: 1, ourScore: 16, theirScore: 25, result: "Lost" },
          { setNumber: 2, ourScore: 25, theirScore: 17, result: "Won" },
          { setNumber: 3, ourScore: 25, theirScore: 12, result: "Won" },
        ],
      },
      philos: {
        summary:
          "Both kills in Set 2 came from the same read — I saw their outside blocker cheating inside and went line. First one was a test. Second one I already knew it was there before I jumped. From that point the match was ours. Kevin's block to close it was the loudest moment I've been part of all season.",
        note:
          "Set 1 was rough. Sitting cold, coming straight in — my legs weren't under me and three service errors in five points is brutal. But I've learned to trust the process: sometimes Set 1 is just warm-up.",
        stats: [
          { label: "Kills", value: "8" },
          { label: "Blocks", value: "2" },
          { label: "Aces", value: "2" },
          { label: "Digs", value: "13" },
        ],
        highlightNotes: [
          "Philos sat cold the entire first match — legs weren't ready and the serve receive showed it immediately.",
          "Back-to-back left-side kills were the spark — both came from reading the blocker cheating inside and going line.",
          "Philos was in the backcourt digging everything in Set 3, keeping rallies alive for Kevin's blocks at the net.",
        ],
        setBullets: [
          [
            "Cold legs from sitting meant Philos' first three passes drifted long and out of system",
            "One service error and two shanked passes in the first rotation — the cold start was physical, not mental",
            "By mid-set the damage was done — Rivalry FC built a lead that couldn't be clawed back",
          ],
          [
            "Philos' back-to-back kills from the left side were the turning point — same read, same line shot, twice",
            "His passing steadied completely — every set in the second half of Set 2 came off a clean Philos pass",
            "Added two aces from a float serve that had Rivalry FC's passers guessing short vs. deep",
          ],
          [
            "Seven digs in Set 3 alone — Philos was a wall in the backcourt while Kevin dominated the net",
            "His passing in the final set was near-perfect — every first ball went to the setter's hands",
            "The assist on Kevin's match-clinching block came off a Philos dig — a full-extension save that set up the play",
          ],
        ],
        sets: [
          { setNumber: 1, ourScore: 21, theirScore: 25, result: "Lost" },
          { setNumber: 2, ourScore: 25, theirScore: 23, result: "Won" },
          { setNumber: 3, ourScore: 15, theirScore: 13, result: "Won" },
        ],
      },
    },
  },
  {
    slug: "game-7",
    player: "kevin",
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
    storyLink: "/highlights?story=the-comeback",
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
    perspectives: {
      kevin: {
        summary:
          "Editing the 6-2 rotation switch segment was fascinating — you can see their middle blocker scrambling to adjust in real time on the footage. The comeback wasn't emotional, it was tactical. That's what made it such a good story to tell. Down 8-12 in Set 3 and then 7 straight points — that run is the best piece of volleyball this team has played all year.",
        note:
          "When you're 10-25 down at the end of Set 1, you don't think about the comeback. You think about the next serve. That's what the footage shows — zero panic. Just reset and execute.",
        stats: [
          { label: "Kills", value: "10" },
          { label: "Blocks", value: "6" },
          { label: "Aces", value: "1" },
          { label: "Digs", value: "8" },
        ],
        highlightNotes: [
          "Kevin called the 6-2 switch in the timeout after Set 1 — the tactical pivot that changed the match.",
          "His front-row presence in the 6-2 freed up back-row attackers and forced their block to split coverage.",
          "Three kills in the 7-0 run that closed Set 3 — Kevin was the primary target in the clutch.",
        ],
        setBullets: [
          [
            "Kevin's front-row attack was completely neutralized — Iron Setters' block read him on every swing",
            "Zero kills in Set 1 from the outside — every attempt was stuffed or deflected",
            "Called the 6-2 switch during the timeout at 5-18, recognizing the block scheme wasn't beatable head-on",
          ],
          [
            "In the 6-2, Kevin's front-row presence drew the block while back-row attacks went uncontested",
            "Four kills from the outside once the blocking scheme shifted — his timing was completely different",
            "Two blocks at the net helped seal the set — Iron Setters' middles couldn't adjust to the new rotation",
          ],
          [
            "Three kills during the 7-0 run — the team fed Kevin on the outside when the match was on the line",
            "His block at 13-12 was the momentum-shifter — a clean stuff that set up the final push",
            "Finished with 6 total blocks — his best net performance of the season when it mattered most",
          ],
        ],
        sets: [
          { setNumber: 1, ourScore: 8, theirScore: 25, result: "Lost" },
          { setNumber: 2, ourScore: 25, theirScore: 15, result: "Won" },
          { setNumber: 3, ourScore: 15, theirScore: 11, result: "Won" },
        ],
      },
      philos: {
        summary:
          "Down 8-12 in Set 3, I had one thought: just play the ball in front of you. Don't think about the gap, don't think about the scoreline. Seven straight points from that mindset is what I'm most proud of from this entire season. Losing 10-25 and then winning the match is a different kind of belief.",
        note:
          "The 6-2 switch was Kevin's call in the timeout. I wasn't sure it would work — our back-row attack hadn't been consistent. But it unlocked something their block had no answer for.",
        stats: [
          { label: "Kills", value: "9" },
          { label: "Blocks", value: "2" },
          { label: "Aces", value: "2" },
          { label: "Digs", value: "16" },
        ],
        highlightNotes: [
          "Philos' serve-receive broke down in Set 1 — three shanks in the first ten points made the deficit insurmountable.",
          "The 6-2 unlocked Philos' back-row attack — four kills from behind the 3-meter line in Set 2.",
          "Philos served the final three points of Set 3, including two aces that sealed the comeback.",
        ],
        setBullets: [
          [
            "Three shanked passes in the first ten points — Philos' serve-receive completely broke down",
            "His defensive positioning was a step behind all set, leaving gaps that Iron Setters exploited",
            "Down 10-25 felt insurmountable, but Philos' backcourt reset between sets changed the mindset",
          ],
          [
            "The 6-2 unlocked Philos' back-row attack — four kills from behind the 3-meter line",
            "His passing stabilized completely, feeding clean balls to the setter every rotation",
            "A diving dig at 20-15 kept the rally alive and led to the set-clinching kill",
          ],
          [
            "Two aces in the final three rotations — Philos served the match out from behind the line",
            "Nine digs in Set 3 alone, including three full-extension saves during the 7-0 run",
            "His backcourt leadership held the team together when the scoreline was against them at 8-12",
          ],
        ],
        sets: [
          { setNumber: 1, ourScore: 12, theirScore: 25, result: "Lost" },
          { setNumber: 2, ourScore: 25, theirScore: 21, result: "Won" },
          { setNumber: 3, ourScore: 15, theirScore: 13, result: "Won" },
        ],
      },
    },
  },
  {
    slug: "game-11",
    player: "philos",
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
    storyLink: "/highlights?story=iron-wall",
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
    perspectives: {
      kevin: {
        summary:
          "Seven blocks is almost impossible to film without making it look like a reel for them. My job was to find the moments where we adapted — the tip-shot sequence in Set 2 was the story I was chasing. When the transition to craft over power finally started working, that was the visual turning point. Set 3 just came down to one execution moment we didn't get.",
        note:
          "The missed serve in Set 3 — I had it on camera from the back angle. You could see the hesitation on the approach. Overthinking is the killer in tight moments.",
        stats: [
          { label: "Kills", value: "7" },
          { label: "Blocks", value: "3" },
          { label: "Aces", value: "1" },
          { label: "Digs", value: "6" },
        ],
        highlightNotes: [
          "Kevin's power game was shut down hardest — four of the seven opponent blocks came off his swings.",
          "Kevin pivoted to tip shots first in Set 2, leading the tactical shift that evened the match.",
          "His serve at 11-13 in Set 3 went long — a pressure miss that opened the door for Iron Wall FC's closing run.",
        ],
        setBullets: [
          [
            "Four of Kevin's attacks were roofed by their middle blocker — his power game was completely neutralized",
            "His approach angle was predictable — the block had him read before he left the ground",
            "Zero kills from the outside in Set 1 — every swing was either blocked or deflected out of bounds",
          ],
          [
            "Kevin was the first to shift to tip shots — two soft tips over the block opened the court up",
            "His roll shot at 15-12 was the moment the adjustment clicked — their blocker lunged and missed completely",
            "Three kills using craft over power — proof the tactical pivot was the right call",
          ],
          [
            "Kevin's serve at 11-13 sailed long — the kind of pressure miss that's hard to recover from",
            "He had two kills in the early part of Set 3 before the wheels came off in the final rotations",
            "Filmed the last three points from the baseline — the footage shows the mental weight of the closing loss",
          ],
        ],
        sets: [
          { setNumber: 1, ourScore: 21, theirScore: 25, result: "Lost" },
          { setNumber: 2, ourScore: 25, theirScore: 18, result: "Won" },
          { setNumber: 3, ourScore: 15, theirScore: 13, result: "Won" },
        ],
      },
      philos: {
        summary:
          "The missed serve in Set 3 was mine. I called the shot in my head before I hit it, and the moment I did that I knew it was wrong. The tip-shot adjustment in Set 2 worked exactly as planned — I just wish we'd found it sooner and had more time in Set 3 to execute.",
        note:
          "Their middle blocker was genuinely brilliant. Seven blocks in two sets. When we switched to tips I could see him struggling to cover — but by then the damage from Set 1 was already done.",
        stats: [
          { label: "Kills", value: "6" },
          { label: "Blocks", value: "1" },
          { label: "Aces", value: "1" },
          { label: "Digs", value: "13" },
        ],
        highlightNotes: [
          "Philos' backcourt digs kept rallies alive even when the block was dominating — 8 digs in the first two sets.",
          "His roll-shot sequence in Set 2 was textbook — three consecutive attacks that bypassed the wall entirely.",
          "The missed serve at 13-14 in Set 3 was Philos' — he overthought the target and pushed it wide.",
        ],
        setBullets: [
          [
            "Three of Philos' passes were tight enough, but the attacks off them got roofed at the net",
            "His digs kept rallies alive — 5 in Set 1 — but the team couldn't convert any into kills",
            "Stayed vocal on the court, calling for the tip-shot adjustment that eventually came in Set 2",
          ],
          [
            "Philos' roll-shot sequence was the highlight — three consecutive soft attacks that the block couldn't cover",
            "His defensive positioning improved, reading the hitter's shoulder to get in front of every swing",
            "One ace from a short serve that caught their libero off guard at 22-19",
          ],
          [
            "The missed serve at 13-14 was Philos' — overthought the target zone and pushed it wide right",
            "Eight digs in Set 3, including a one-handed save that drew applause from the opposing bench",
            "Philos owned the loss afterward: 'That serve was mine to make, and I didn't'",
          ],
        ],
        sets: [
          { setNumber: 1, ourScore: 16, theirScore: 25, result: "Lost" },
          { setNumber: 2, ourScore: 25, theirScore: 24, result: "Won" },
          { setNumber: 3, ourScore: 12, theirScore: 15, result: "Lost" },
        ],
      },
    },
  },
  {
    slug: "game-12",
    player: "kevin",
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
    storyLink: "/highlights?story=season-finale",
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
    perspectives: {
      kevin: {
        summary:
          "Five consecutive aces — I was filming from behind the server and you could feel the court energy building with each point. Top Seeds called back-to-back timeouts and still couldn't stop the run. That sequence is the defining clip of the season. The final kill, the squad on court, the celebration — that's what we spent the whole year building toward.",
        note:
          "Filming the season closer felt different. Everyone knew what this match meant. The 6-1 opening run happened so fast I almost missed the third point. That's how locked in we were.",
        stats: [
          { label: "Kills", value: "9" },
          { label: "Blocks", value: "6" },
          { label: "Aces", value: "2" },
          { label: "Digs", value: "5" },
        ],
        highlightNotes: [
          "Kevin's opening kill set the tone — a cross-court swing on the second rally that put the team up 2-0.",
          "His net presence was dominant — three blocks in the ace-run stretch kept Top Seeds from finding any answer.",
          "Kevin hit the season-closing kill — a line shot that landed before the celebration had even started.",
        ],
        setBullets: [
          [
            "Kevin's opening kill on the second rally set the tone — cross-court swing that hit the line",
            "Four blocks in Set 1 — Top Seeds' middles had no answer at the net",
            "His serving was steady with two aces targeting deep zone 5 where their passer was weak",
          ],
          [
            "Three blocks during the five-ace stretch kept the pressure compounding from both sides",
            "Kevin's kill at 20-15 extended the lead and forced Top Seeds' second timeout",
            "He hit the season's final kill — a line shot at 24-20 that the whole squad celebrated on court",
          ],
        ],
        sets: [
          { setNumber: 1, ourScore: 25, theirScore: 14, result: "Won" },
          { setNumber: 2, ourScore: 25, theirScore: 17, result: "Won" },
        ],
      },
      philos: {
        summary:
          "The season closer felt right from the opening rally. We all knew before the first serve that this was our day — that clarity is rare and I've only felt it a handful of times. When the last kill dropped and the team was already running before it landed, that was the moment I knew Side-Out Studios had built something real.",
        note:
          "The five-ace run felt like slow motion while it was happening. Every serve I was completely in the zone — no thoughts, just the motion and the sound of the ball leaving my hand.",
        stats: [
          { label: "Kills", value: "8" },
          { label: "Blocks", value: "2" },
          { label: "Aces", value: "5" },
          { label: "Digs", value: "10" },
        ],
        highlightNotes: [
          "Philos' passing in the opening run was near-perfect — every first ball went to the setter's hands, enabling the 6-1 start.",
          "The five consecutive aces were all Philos — a float serve that Top Seeds had no answer for across two timeouts.",
          "Philos was the first one running when the final kill landed — the camera caught him mid-sprint before it even hit the floor.",
        ],
        setBullets: [
          [
            "Philos' passing fueled the 6-1 run — every serve-receive was clean and on target",
            "His backcourt defense smothered Top Seeds' attack, with six digs keeping rallies alive",
            "Two kills from the left side in the second half of the set closed it out with authority",
          ],
          [
            "Five consecutive aces — Philos' float serve was untouchable, forcing back-to-back timeouts from Top Seeds",
            "The ace run is the defining sequence of the season — and every one came off Philos' hand",
            "Four digs in Set 2 kept the team's side-out rate at 80%, making it impossible for Top Seeds to build momentum",
          ],
        ],
        sets: [
          { setNumber: 1, ourScore: 25, theirScore: 21, result: "Won" },
          { setNumber: 2, ourScore: 25, theirScore: 23, result: "Won" },
        ],
      },
    },
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
