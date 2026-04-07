const fs = require('fs');

let content = fs.readFileSync('src/lib/games.ts', 'utf8');

const updates = {
  "philos-game-1": { score: "28–35", sets: [{n: 1, o: 21, t: 18, r: "Won"}, {n: 2, o: 7, t: 17, r: "Lost"}] },
  "philos-game-2": { score: "39–31", sets: [{n: 1, o: 21, t: 17, r: "Won"}, {n: 2, o: 18, t: 14, r: "Won"}] },
  "philos-game-3": { score: "35–35", sets: [{n: 1, o: 21, t: 18, r: "Won"}, {n: 2, o: 14, t: 17, r: "Lost"}] },
  "philos-game-4": { score: "32–42", sets: [{n: 1, o: 19, t: 21, r: "Lost"}, {n: 2, o: 13, t: 21, r: "Lost"}] },
  "philos-game-5": { score: "40–34", sets: [{n: 1, o: 21, t: 18, r: "Won"}, {n: 2, o: 19, t: 16, r: "Won"}] },
  "philos-game-6": { score: "34–27", sets: [{n: 1, o: 21, t: 17, r: "Won"}, {n: 2, o: 13, t: 10, r: "Won"}] },
  "philos-game-7": { score: "34–35", sets: [{n: 1, o: 21, t: 19, r: "Won"}, {n: 2, o: 13, t: 16, r: "Lost"}] },
  "philos-game-8": { score: "40–39", sets: [{n: 1, o: 21, t: 19, r: "Won"}, {n: 2, o: 19, t: 20, r: "Lost"}] },
  "philos-game-9": { score: "32–35", sets: [{n: 1, o: 21, t: 18, r: "Won"}, {n: 2, o: 11, t: 17, r: "Lost"}] },
  "philos-game-10": { score: "32–38", sets: [{n: 1, o: 21, t: 19, r: "Won"}, {n: 2, o: 11, t: 19, r: "Lost"}] },
  "philos-game-11": { score: "27–28", sets: [{n: 1, o: 21, t: 19, r: "Won"}, {n: 2, o: 6, t: 9, r: "Lost"}] },
  "philos-game-12": { score: "24–28", sets: [{n: 1, o: 21, t: 18, r: "Won"}, {n: 2, o: 3, t: 10, r: "Lost"}] },
  "philos-qf": { score: "57–53", sets: [{n: 1, o: 21, t: 19, r: "Won"}, {n: 2, o: 21, t: 20, r: "Won"}, {n: 3, o: 15, t: 14, r: "Won"}] },
  "philos-sf": { score: "37–50", sets: [{n: 1, o: 16, t: 25, r: "Lost"}, {n: 2, o: 21, t: 25, r: "Lost"}] }
};

for (const [slug, data] of Object.entries(updates)) {
  const setsStr = `sets: [\n` + data.sets.map(s => `      { setNumber: ${s.n}, ourScore: ${s.o}, theirScore: ${s.t}, result: "${s.r}" },`).join('\n') + `\n    ],`;
  
  // Replace score
  content = content.replace(
      new RegExp(`(slug: "${slug}",[\\s\\S]*?score: )"[^"]+"`, 's'),
      `$1"${data.score}"`
  );
  
  // Replace sets
  content = content.replace(
      new RegExp(`(slug: "${slug}",[\\s\\S]*?)(sets: \\[[\\s\\S]*?\\],?|sets: \\[\\])`, 's'),
      `$1${setsStr}`
  );
}

fs.writeFileSync('src/lib/games.ts', content, 'utf8');
