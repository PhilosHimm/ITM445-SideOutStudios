import re

with open('src/lib/games.ts', 'r', encoding='utf-8') as f:
    text = f.read()

# Replace Game 1
text = re.sub(
    r'slug: "philos-game-1".*?sets: \[.*?\]\,',
    r'slug: "philos-game-1",\n    player: "philos",\n    number: 1,\n    title: "Game 1 — We Still Don\'t Know",\n    date: "Jan 27",\n    year: "2026",\n    result: "Loss",\n    score: "28–35",\n    opponent: "We Still Don\'t Know",\n    badge: "REGULAR SEASON",\n    badgeClass: "border border-white/30 text-white/50",\n    description: "Opened strong with Set 1, then collapsed in Set 2 against a scrappy opponent.",\n    matchSummary: "",\n    heroImage: "",\n    category: "Game 1–4",\n    duration: "",\n    highlights: [],\n    sets: [\n      { setNumber: 1, ourScore: 21, theirScore: 18, result: "Won" },\n      { setNumber: 2, ourScore: 7,  theirScore: 17, result: "Lost" },\n    ],',
    text,
    flags=re.DOTALL
)

# And similarly for the other games, or I will just write a python script to process it. Let's do it in JS since it's easier
