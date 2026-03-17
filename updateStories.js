const fs = require('fs');
const file = 'src/app/stories/page.tsx';
let content = fs.readFileSync(file, 'utf8');

if (!content.includes('use client')) {
  content = '"use client";\n\n' + content;
}

content = content.replace(
  'import { Play, SkipBack, SkipForward, Check } from "lucide-react";',
  'import { Play, SkipBack, SkipForward, Check, MessageSquare, Pause } from "lucide-react";\nimport { useState, useRef } from "react";'
);

const startFn = 'export default function Stories() {';
const stateCode = `
  // Poll State
  const [pollVoted, setPollVoted] = useState(false);
  const [pollOptions, setPollOptions] = useState([
    { id: 1, text: 'Set 2 timeout', votes: 124 },
    { id: 2, text: 'Final rally', votes: 85 },
    { id: 3, text: 'Rotation switch', votes: 42 }
  ]);
  const totalVotes = pollOptions.reduce((acc, opt) => acc + opt.votes, 0);

  const handleVote = (id) => {
    if (pollVoted) return;
    setPollOptions(opts => opts.map(o => o.id === id ? { ...o, votes: o.votes + 1 } : o));
    setPollVoted(true);
  };

  // Audio State
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const [audioProgress, setAudioProgress] = useState(0);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const progress = (audioRef.current.currentTime / audioRef.current.duration) * 100;
      setAudioProgress(progress || 0);
    }
  };

  // Comments State
  const [comments, setComments] = useState([
    { id: 1, text: 'The rotation switch was definitely the turning point!', author: 'VolleyFan99', time: '2m ago' }
  ]);
  const [newComment, setNewComment] = useState('');

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    setComments([{
      id: Date.now(),
      text: newComment,
      author: 'You',
      time: 'Just now'
    }, ...comments]);
    setNewComment('');
  };
`;

content = content.replace(startFn, startFn + '\n' + stateCode);

const audioBlock = `
          <audio ref={audioRef} onTimeUpdate={handleTimeUpdate} onEnded={() => setIsPlaying(false)} src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" className="hidden" />
          {/* Comment Card */}`;
content = content.replace('          {/* Comment Card */}', audioBlock);

fs.writeFileSync(file, content);
