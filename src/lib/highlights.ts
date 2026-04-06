export interface Highlight {
  id: string;
  player: "kevin" | "philos";
  clipType: "hit" | "pass" | "serve-receive" | "block";
  label: "HIT" | "PASS" | "SERVE RX" | "BLOCK";
  gameContext: string;
  title: string;
  annotation: string;
  videoSrc: string;
  thumbnail: string;
  duration: string;
  featured?: boolean;
}

export const highlights: Highlight[] = [
  // ── Kevin — Hits ────────────────────────────────────────────────────────────
  {
    id: "kevin-hit-1",
    player: "kevin",
    clipType: "hit",
    label: "HIT",
    gameContext: "Intramural S1",
    title: "Back-row cross kill",
    annotation:
      "Kevin loads from zone 1, disguises the approach as a line shot, then cuts the ball cross-court at a sharp angle. The block commits left — the seam opens right.",
    videoSrc: "/videos/kevin-hit-1.mp4",
    thumbnail: "/images/clips/kevin-hit-1.jpg",
    duration: "0:18",
    featured: true,
  },
  {
    id: "kevin-hit-2",
    player: "kevin",
    clipType: "hit",
    label: "HIT",
    gameContext: "Rec League",
    title: "Sharp angle finish — left side",
    annotation:
      "An outside set pushed tight to the antenna — Kevin adjusts his approach, contacts high, and drives the ball down the line at a steep angle off a single blocker.",
    videoSrc: "/videos/kevin-hit-2.mp4",
    thumbnail: "/images/clips/kevin-hit-2.jpg",
    duration: "0:14",
  },
  {
    id: "kevin-hit-3",
    player: "kevin",
    clipType: "hit",
    label: "HIT",
    gameContext: "Intramural S2",
    title: "Pipe attack over the seam",
    annotation:
      "Running a pipe from the back row, Kevin reads a split block and targets the seam between the middle and right side — the ball drops untouched in the deep corner.",
    videoSrc: "/videos/kevin-hit-3.mp4",
    thumbnail: "/images/clips/kevin-hit-3.jpg",
    duration: "0:22",
  },
  {
    id: "kevin-hit-4",
    player: "kevin",
    clipType: "hit",
    label: "HIT",
    gameContext: "Pickup",
    title: "Jump set tip over the block",
    annotation:
      "With the block locked in on power, Kevin checks up at contact, rolls his wrist, and drops a soft tip over outstretched hands into the open zone 2 seam.",
    videoSrc: "/videos/kevin-hit-4.mp4",
    thumbnail: "/images/clips/kevin-hit-4.jpg",
    duration: "0:11",
  },
  // ── Kevin — Passes ──────────────────────────────────────────────────────────
  {
    id: "kevin-pass-1",
    player: "kevin",
    clipType: "pass",
    label: "PASS",
    gameContext: "Intramural S1",
    title: "Diving platform dig — scramble rally",
    annotation:
      "A sharp cross-court swing beats the defense early — Kevin dives full extension from zone 5, keeps the platform firm, and passes the ball back to the setter in transition.",
    videoSrc: "/videos/kevin-pass-1.mp4",
    thumbnail: "/images/clips/kevin-pass-1.jpg",
    duration: "0:16",
  },
  {
    id: "kevin-pass-2",
    player: "kevin",
    clipType: "pass",
    label: "PASS",
    gameContext: "Rec League",
    title: "Cross-court dig, back set",
    annotation:
      "A power swing targets the deep corner — Kevin reads the hitter's shoulder early, shuffles across, and digs the ball cleanly to the right side for a back-set opportunity.",
    videoSrc: "/videos/kevin-pass-2.mp4",
    thumbnail: "/images/clips/kevin-pass-2.jpg",
    duration: "0:13",
  },
  // ── Kevin — Serve Receive ───────────────────────────────────────────────────
  {
    id: "kevin-srx-1",
    player: "kevin",
    clipType: "serve-receive",
    label: "SERVE RX",
    gameContext: "Intramural S2",
    title: "Float serve to target zone",
    annotation:
      "A knuckling float serve drifts toward the seam between zones 6 and 1 — Kevin steps in early, absorbs the late movement, and passes a platform ball directly to the setter's target zone.",
    videoSrc: "/videos/kevin-srx-1.mp4",
    thumbnail: "/images/clips/kevin-srx-1.jpg",
    duration: "0:09",
  },
  // ── Philos — Passes ─────────────────────────────────────────────────────────
  {
    id: "philos-pass-1",
    player: "philos",
    clipType: "pass",
    label: "PASS",
    gameContext: "Intramural S1",
    title: "One-arm emergency dig",
    annotation:
      "A deflected tip falls short of the back row — Philos sprints from zone 6, can't get both hands down in time, and extends one arm to pop the ball high enough for the setter to recover.",
    videoSrc: "/videos/philos-pass-1.mp4",
    thumbnail: "/images/clips/philos-pass-1.jpg",
    duration: "0:12",
  },
  {
    id: "philos-pass-2",
    player: "philos",
    clipType: "pass",
    label: "PASS",
    gameContext: "Pickup",
    title: "Platform pass — perfect to setter",
    annotation:
      "Off a hard-driven swing aimed at the left hip, Philos squares his platform to the target zone at contact and passes the ball with enough arc to give the setter a clean look from anywhere on the net.",
    videoSrc: "/videos/philos-pass-2.mp4",
    thumbnail: "/images/clips/philos-pass-2.jpg",
    duration: "0:10",
  },
  // ── Philos — Serve Receive ──────────────────────────────────────────────────
  {
    id: "philos-srx-1",
    player: "philos",
    clipType: "serve-receive",
    label: "SERVE RX",
    gameContext: "Rec League",
    title: "Jump serve receive, seam ball",
    annotation:
      "A heavy topspin jump serve splits the seam between zones 1 and 6 — Philos calls the ball early, adjusts his platform angle mid-step, and passes cleanly to the setter in transition.",
    videoSrc: "/videos/philos-srx-1.mp4",
    thumbnail: "/images/clips/philos-srx-1.jpg",
    duration: "0:11",
  },
  {
    id: "philos-srx-2",
    player: "philos",
    clipType: "serve-receive",
    label: "SERVE RX",
    gameContext: "Intramural S2",
    title: "Tough angle serve, platform up",
    annotation:
      "A sharp float serve aimed at the outside shoulder forces Philos to reach across his body — he keeps the elbow locked and angles the platform to redirect the ball back toward the setter's position.",
    videoSrc: "/videos/philos-srx-2.mp4",
    thumbnail: "/images/clips/philos-srx-2.jpg",
    duration: "0:09",
  },
  {
    id: "philos-srx-3",
    player: "philos",
    clipType: "serve-receive",
    label: "SERVE RX",
    gameContext: "Intramural S1",
    title: "Cross-court float receive",
    annotation:
      "A wide float serve drifts across the court toward zone 5 — Philos tracks the ball from his starting position in zone 6, reads the drift late, and still delivers a usable pass to the setter.",
    videoSrc: "/videos/philos-srx-3.mp4",
    thumbnail: "/images/clips/philos-srx-3.jpg",
    duration: "0:14",
  },
  // ── Philos — Hits ───────────────────────────────────────────────────────────
  {
    id: "philos-hit-1",
    player: "philos",
    clipType: "hit",
    label: "HIT",
    gameContext: "Scoop tournament",
    title: "Right side swing, block touch out",
    annotation:
      "Right side swing into block touch out",
    videoSrc: "https://www.youtube.com/embed/JQtMh4ehZcI",
    thumbnail: "https://img.youtube.com/vi/JQtMh4ehZcI/mqdefault.jpg",
    duration: "—",
  },
  // ── Philos — Block ──────────────────────────────────────────────────────────
  {
    id: "philos-block-1",
    player: "philos",
    clipType: "block",
    label: "BLOCK",
    gameContext: "Rec League",
    title: "Stuff block at the net",
    annotation:
      "Philos reads the outside hitter's shoulder angle and closes hard from the right side — both hands clear the tape, and the ball is stuffed cleanly back into the attacker's court.",
    videoSrc: "/videos/philos-block-1.mp4",
    thumbnail: "/images/clips/philos-block-1.jpg",
    duration: "0:26",
    featured: true,
  },
];

export const clipTypeMeta: Record<
  Highlight["clipType"],
  { label: string; badgeClass: string }
> = {
  hit:             { label: "HIT",      badgeClass: "bg-primary text-white" },
  pass:            { label: "PASS",     badgeClass: "bg-dark text-white" },
  "serve-receive": { label: "SERVE RX", badgeClass: "bg-dark text-white" },
  block:           { label: "BLOCK",    badgeClass: "border border-dark/40 text-dark/80" },
};
