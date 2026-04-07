const fs = require('fs');

let file = fs.readFileSync('src/lib/games.ts', 'utf8');

const updates = [
  { slug: "philos-game-1", score: "28–35", sets: [{n: 1, o: 21, t: 18, r: "Won"}, {n: 2, o: 7, t: 17, r: "Lost"}] },
  { slug: "philos-game-2", score: "39–31", sets: [{n: 1, o: 21, t: 17, r: "Won"}, {n: 2, o: 18, t: 14, r: "Won"}] },
  { slug: "philos-game-3", score: "35–35", sets: [{n: 1, o: 21, t: 18, r: "Won"}, {n: 2, o: 14, t: 17, r: "Lost"}] },
  { slug: "philos-game-4", score: "32–42", sets: [{n: 1, o: 19, t: 21, r: "Lost"}, {n: 2, o: 13, t: 21, r: "Lost"}] },
  { slug: "philos-game-5", score: "40–34", sets: [{n: 1, o: 21, t: 18, r: "Won"}, {n: 2, o: 19, t: 16, r: "Won"}] },
  { slug: "philos-game-6", score: "34–27", sets: [{n: 1, o: 21, t: 17, r: "Won"}, {n: 2, o: 13, t: 10, r: "Won"}] },
  { slug: "philos-game-7", score: "34–35", sets: [{n: 1, o: 21, t: 19, r: "Won"}, {n: 2, o: 13, t: 16, r: "Lost"}] },
  { slug: "philos-game-8", score: "40–39", sets: [{n: 1, o: 21, t: 19, r: "Won"}, {n: 2, o: 19, t: 20, r: "Lost"}] },
  { slug: "philos-game-9", score: "32–35", sets: [{n: 1, o: 21, t: 18, r: "Won"}, {n: 2, o: 11, t: 17, r: "Lost"}] },
  { slug: "philos-game-10", score: "32–38", sets: [{n: 1, o: 21, t: 19, r: "Won"}, {n: 2, o: 11, t: 19, r: "Lost"}] },
  { slug: "philos-game-11", score: "27–28", sets: [{n: 1, o: 21, t: 19, r: "Won"}, {n: 2, o: 6, t: 9, r: "Lost"}] },
  { slug: "philos-game-12", score: "24–28", sets: [{n: 1, o: 21, t: 18, r: "Won"}, {n: 2, o: 3, t: 10, r: "Lost"}] },
  { slug: "philos-qf", score: "57–53", sets: [{n: 1, o: 21, t: 19, r: "Won"}, {n: 2, o: 21, t: 20, r: "Won"}, {n: 3, o: 15, t: 14, r: "Won"}] },
  { slug: "philos-sf", score: "37–50", sets: [{n: 1, o: 16, t: 25, r: "Lost"}, {n: 2, o: 21, t: 25, r: "Lost"}] }
]

for (const p of updates) {
  // Find start index of match
  let i = file.indexOf(`slug: "${p.slug}"`);
  if (i === -1) continue;
  
  // Replace Score block
  let scoreIdx = file.indexOf("score: ", i);
  let scoreEnd = file.indexOf('"', scoreIdx + 8);
  file = file.substring(0, scoreIdx + 8) + p.score + file.substring(scoreEnd);

  // Recalculate index after size changed
  i = file.indexOf(`slug: "${p.slug}"`); 

  let setsStart = file.indexOf("sets: [", i);
  let setsEnd = file.indexOf("stats:", setsStart); // we know sets is followed by stats: []
  
  // It's followed by "stats:" usually, let's find the closing bracket before stats
  // Actually better: just find matching opening bracket 'sets: [' and corresponding ']'
  
  let openBrackets = 0;
  let findingSets = false;
  let endingIdx = -1;
  let setsIdx = -1;
  
  // Instead, let's just do a RegExp match on the substring after `slug: "{slug}"`
  let chunk = file.substring(i, i + 2000);
  
  let newSetsRaw = "sets: [\n" + p.sets.map(s => `      { setNumber: ${s.n}, ourScore: ${s.o}, theirScore: ${s.t}, result: "${s.r}" },`).join('\n') + "\n    ],";

  let chunkReplaced = chunk.replace(/sets:\s*\[[\s\S]*?\],/, newSetsRaw);
  file = file.substring(0, i) + chunkReplaced + file.substring(i + 2000);
  
}

fs.writeFileSync('src/lib/games.ts', file, 'utf-8');
console.log("DONE");
