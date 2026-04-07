import json

updates = {
  "philos-game-1": { "score": "28–35", "sets": [{'n': 1, 'o': 21, 't': 18, 'r': "Won"}, {'n': 2, 'o': 7, 't': 17, 'r': "Lost"}] },
  "philos-game-2": { "score": "39–31", "sets": [{'n': 1, 'o': 21, 't': 17, 'r': "Won"}, {'n': 2, 'o': 18, 't': 14, 'r': "Won"}] },
  "philos-game-3": { "score": "35–35", "sets": [{'n': 1, 'o': 21, 't': 18, 'r': "Won"}, {'n': 2, 'o': 14, 't': 17, 'r': "Lost"}] },
  "philos-game-4": { "score": "32–42", "sets": [{'n': 1, 'o': 19, 't': 21, 'r': "Lost"}, {'n': 2, 'o': 13, 't': 21, 'r': "Lost"}] },
  "philos-game-5": { "score": "40–34", "sets": [{'n': 1, 'o': 21, 't': 18, 'r': "Won"}, {'n': 2, 'o': 19, 't': 16, 'r': "Won"}] },
  "philos-game-6": { "score": "34–27", "sets": [{'n': 1, 'o': 21, 't': 17, 'r': "Won"}, {'n': 2, 'o': 13, 't': 10, 'r': "Won"}] },
  "philos-game-7": { "score": "34–35", "sets": [{'n': 1, 'o': 21, 't': 19, 'r': "Won"}, {'n': 2, 'o': 13, 't': 16, 'r': "Lost"}] },
  "philos-game-8": { "score": "40–39", "sets": [{'n': 1, 'o': 21, 't': 19, 'r': "Won"}, {'n': 2, 'o': 19, 't': 20, 'r': "Lost"}] },
  "philos-game-9": { "score": "32–35", "sets": [{'n': 1, 'o': 21, 't': 18, 'r': "Won"}, {'n': 2, 'o': 11, 't': 17, 'r': "Lost"}] },
  "philos-game-10": { "score": "32–38", "sets": [{'n': 1, 'o': 21, 't': 19, 'r': "Won"}, {'n': 2, 'o': 11, 't': 19, 'r': "Lost"}] },
  "philos-game-11": { "score": "27–28", "sets": [{'n': 1, 'o': 21, 't': 19, 'r': "Won"}, {'n': 2, 'o': 6, 't': 9, 'r': "Lost"}] },
  "philos-game-12": { "score": "24–28", "sets": [{'n': 1, 'o': 21, 't': 18, 'r': "Won"}, {'n': 2, 'o': 3, 't': 10, 'r': "Lost"}] },
  "philos-qf": { "score": "57–53", "sets": [{'n': 1, 'o': 21, 't': 19, 'r': "Won"}, {'n': 2, 'o': 21, 't': 20, 'r': "Won"}, {'n': 3, 'o': 15, 't': 14, 'r': "Won"}] },
  "philos-sf": { "score": "37–50", "sets": [{'n': 1, 'o': 16, 't': 25, 'r': "Lost"}, {'n': 2, 'o': 21, 't': 25, 'r': "Lost"}] }
}

with open('src/lib/games.ts', 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_lines = []
current_slug = None
in_sets = False

for line in lines:
    slug_match = line.strip().startswith('slug: "')
    if slug_match:
        current_slug = line.split('"')[1]
    
    if current_slug in updates and line.strip().startswith('score: "'):
        line = f'    score: "{updates[current_slug]["score"]}",\n'
        
    if current_slug in updates and line.strip().startswith('sets: ['):
        in_sets = True
        sets_lines = []
        sets_lines.append('    sets: [\n')
        for s in updates[current_slug]['sets']:
            sets_lines.append(f'      {{ setNumber: {s["n"]}, ourScore: {s["o"]}, theirScore: {s["t"]}, result: "{s["r"]}" }},\n')
        sets_lines.append('    ],\n')
        new_lines.extend(sets_lines)
        continue
    
    if in_sets and line.strip().startswith(']'):
        in_sets = False
        continue
        
    if not in_sets:
        new_lines.append(line)

with open('src/lib/games.ts', 'w', encoding='utf-8') as f:
    f.writelines(new_lines)
