const fs = require('fs');

let content = fs.readFileSync('src/lib/games.ts', 'utf8');

const updates = [
  { slug: "philos-game-1", sets: [{n: 1, o: 21, t: 18, r: "Won"}, {n: 2, o: 7, t: 17, r: "Lost"}] },
  { slug: "philos-game-2", sets: [{n: 1, o: 21, t: 17, r: "Won"}, {n: 2, o: 18, t: 14, r: "Won"}] },
  { slug: "philos-game-3", sets: [{n: 1, o: 21, t: 18, r: "Won"}, {n: 2, o: 14, t: 17, r: "Lost"}] },
  { slug: "philos-game-4", sets: [{n: 1, o: 19, t: 21, r: "Lost"}, {n: 2, o: 13, t: 21, r: "Lost"}] },
  { slug: "philos-game-5", sets: [{n: 1, o: 21, t: 18, r: "Won"}, {n: 2, o: 19, t: 16, r: "Won"}] },
  { slug: "philos-game-6", sets: [{n: 1, o: 21, t: 17, r: "Won"}, {n: 2, o: 13, t: 10, r: "Won"}] },
  { slug: "philos-game-7", sets: [{n: 1, o: 21, t: 19, r: "Won"}, {n: 2, o: 13, t: 16, r: "Lost"}] },
  { slug: "philos-game-8", sets: [{n: 1, o: 21, t: 19, r: "Won"}, {n: 2, o: 19, t: 20, r: "Lost"}] },
  { slug: "philos-game-9", sets: [{n: 1, o: 21, t: 18, r: "Won"}, {n: 2, o: 11, t: 17, r: "Lost"}] },
  { slug: "philos-game-10", sets: [{n: 1, o: 21, t: 19, r: "Won"}, {n: 2, o: 11, t: 19, r: "Lost"}] },
  { slug: "philos-game-11", sets: [{n: 1, o: 21, t: 19, r: "Won"}, {n: 2, o: 6, t: 9, r: "Lost"}] },
  { slug: "philos-game-12", sets: [{n: 1, o: 21, t: 18, r: "Won"}, {n: 2, o: 3, t: 10, r: "Lost"}] },
  { slug: "philos-qf", score: "57–53", sets: [{n: 1, o: 21, t: 19, r: "Won"}, {n: 2, o: 21, t: 20, r: "Won"}, {n: 3, o: 15, t: 14, r: "Won"}] },
  { slug: "philos-sf", score: "37–50", sets: [{n: 1, o: 16, t: 25, r: "Lost"}, {n: 2, o: 21, t: 25, r: "Lost"}] }
];

for (const game of updates) {
  let setsStr = `sets: [\n` + game.sets.map(s => `      { setNumber: ${s.n}, ourScore: ${s.o}, theirScore: ${s.t}, result: "${s.r}" },`).join('\n') + `\n    ]`;
  
  if (game.score) {
    let regex = new RegExp(`(slug: "${game.slug}".*?score: )"[^"]+"(.*?)(sets: \\[[\\s\\S]*?\\])`, 's');
    content = content.replace(regex, `$1"${game.score}"$2${setsStr}`);
  } else {
    let regex = new RegExp(`(slug: "${game.slug}".*?)(sets: \\[[\\s\\S]*?\\])`, 's');
    content = content.replace(regex, `$1${setsStr}`);
  }
}

fs.writeFileSync('src/lib/games.ts', content, 'utf8');
