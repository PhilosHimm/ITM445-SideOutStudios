"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ScrollSection from "@/components/ScrollSection";
import { Play, Pause, SkipBack, SkipForward, Check, MessageSquare } from "lucide-react";
import { useState, useRef } from "react";

export default function Stories() {
  // Poll State
  const [pollVoted, setPollVoted] = useState(false);
  const [pollOptions, setPollOptions] = useState([
    { id: 1, text: 'Set 2 timeout', votes: 124 },
    { id: 2, text: 'Final rally', votes: 85 },
    { id: 3, text: 'Rotation switch', votes: 42 }
  ]);
  const totalVotes = pollOptions.reduce((acc, opt) => acc + opt.votes, 0);

  const handleVote = (id: number) => {
    if (pollVoted) return;
    setPollOptions(opts => opts.map(o => o.id === id ? { ...o, votes: o.votes + 1 } : o));
    setPollVoted(true);
  };

  // Audio State
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
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

  const handleCommentSubmit = () => {
    if (!newComment.trim()) return;
    setComments([{
      id: Date.now(),
      text: newComment,
      author: 'You',
      time: 'Just now'
    }, ...comments]);
    setNewComment('');
  };

  return (
    <div className="bg-white flex flex-col items-start w-full">
      <Navbar activePage="Stories" />
      <PageHero subtitle="MULTI-ANGLE · POLLS · AUDIO" title="Side-Out Stories" bgImage="/images/stories-hero-bg.jpg" />

      {/* Page Body */}
      <div className="bg-white flex flex-col lg:flex-row gap-6 items-start px-6 md:px-16 lg:px-20 py-10 md:py-12 w-full">
        {/* Main Column */}
        <ScrollSection as="section" animation="fade-up" className="flex flex-1 flex-col gap-6 items-start min-w-0">
          {/* Episode Nav */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-4">
            <div className="flex flex-col gap-1 items-start">
              <span className="text-primary text-[11px] tracking-[1px] font-medium">NOW WATCHING</span>
              <h2 className="font-medium text-dark text-[22px] tracking-[-0.5px]">Game 3 — Rally Breakdown</h2>
            </div>
            <div className="bg-primary flex gap-2 h-9 items-center px-4 rounded-[2px]">
              <Play size={14} className="text-white fill-white" aria-hidden="true" />
              <span className="font-medium text-[12px] text-white">5 min</span>
            </div>
          </div>

          {/* Video Player */}
          <div
            className="bg-dark h-[280px] sm:h-[380px] md:h-[480px] overflow-clip relative rounded-[2px] w-full shadow-lg group cursor-pointer"
            role="region" aria-label="Video player: Game 3 Rally Breakdown"
          >
            <div
              className="absolute bg-cover bg-center h-full left-0 top-0 w-full group-hover:scale-105 transition-transform duration-700"
              style={{ backgroundImage: "url('/images/stories-video-bg.png')" }}
              role="img" aria-label="Game 3 rally action"
            />
            <div className="absolute bg-dark/33 h-full left-0 top-0 w-full" aria-hidden="true" />

            {/* Top Bar */}
            <div className="absolute bg-dark/60 flex h-[52px] items-center justify-between left-0 px-5 top-0 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex gap-1 items-center" role="tablist" aria-label="Camera angle">
                <button role="tab" aria-selected="true" className="bg-white flex h-7 items-center justify-center px-3 rounded-[2px] transition-colors duration-200 hover:bg-gray-100"><span className="font-medium text-dark text-[12px]">Wide</span></button>
                <button role="tab" aria-selected="false" className="flex h-7 items-center px-3 rounded-[2px] hover:bg-white/10 transition-all duration-300 hover:scale-105 active:scale-95"><span className="text-[#eee] text-[12px]">Close-up</span></button>
                <button role="tab" aria-selected="false" className="flex h-7 items-center px-3 rounded-[2px] hover:bg-white/10 transition-all duration-300 hover:scale-105 active:scale-95"><span className="text-[#eee] text-[12px]">POV</span></button>
              </div>

              <button aria-label="Play video" className="bg-primary flex items-center justify-center rounded-[2px] size-10 hover:bg-primary-hover transition-all duration-300 hover:scale-110 hover-glow animate-pulse-ring active:scale-90 group">
                <Play size={18} className="text-white fill-white ml-1 group-hover:scale-110 transition-transform duration-300" />
              </button>

              <div className="hidden sm:flex gap-[6px] items-center" role="tablist" aria-label="Player POV">
                <span className="font-medium text-white/30 text-[10px] tracking-[2px]">POV</span>
                <button role="tab" aria-selected="true" className="bg-primary flex h-7 items-center justify-center px-3 rounded-[2px] hover:bg-primary-hover transition-colors duration-200"><span className="font-medium text-[12px] text-white">Person A</span></button>
                <button role="tab" aria-selected="false" className="bg-[rgba(255,255,255,0.1)] flex h-7 items-center justify-center px-3 rounded-[2px] hover:bg-[rgba(255,255,255,0.2)] transition-colors duration-200"><span className="text-[#eee] text-[12px]">Person B</span></button>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="absolute bg-gradient-to-t from-dark/80 to-transparent flex flex-col justify-end left-0 px-5 pb-4 h-20 bottom-0 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex flex-col gap-2 w-full">
                <div
                  className="bg-[rgba(255,255,255,0.3)] flex h-1 items-center rounded-full w-full cursor-pointer hover:scale-y-150 origin-bottom transition-transform duration-200"
                  role="slider" aria-label="Video progress"
                >
                  <div className="bg-primary h-full rounded-l-full w-[38%] relative">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full size-3 shadow shadow-black/50" />
                  </div>
                </div>
                <div className="flex items-center justify-between text-white/50 font-medium text-[11px] w-full">
                  <span>18:22</span><span>45:00</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollSection>

        {/* Sidebar */}
        <ScrollSection as="aside" animation="fade-left" className="flex flex-col gap-5 items-start w-full lg:w-[280px] shrink-0">
          {/* Viewer Poll Card */}
          <div className="border border-border-light flex flex-col gap-[14px] items-start p-5 rounded-[2px] w-full bg-white shadow-sm" role="group" aria-labelledby="poll-heading">
            <span className="font-medium text-primary text-[10px] tracking-[1px]" id="poll-heading">VIEWER POLL</span>
            <p className="font-medium text-dark text-[14px] w-full">
              What was the turning point of Game 3?
            </p>
            <div className="flex flex-col gap-2 items-start w-full" role="group" aria-label="Poll options">
              {pollOptions.map((opt) => {
                const percentage = Math.round((opt.votes / totalVotes) * 100);
                const isWinner = pollVoted && opt.votes === Math.max(...pollOptions.map(o => o.votes));
                
                return (
                  <button 
                    key={opt.id}
                    onClick={() => handleVote(opt.id)}
                    className={`border flex h-9 items-center justify-between px-3 rounded-[2px] w-full transition-all duration-200 group relative overflow-hidden ${
                      pollVoted 
                        ? (isWinner ? 'bg-dark text-white border-dark' : 'bg-dark/5 border-transparent text-dark/60') 
                        : 'border-border-light hover:border-dark hover:bg-dark/5'
                    }`}
                  >
                    {pollVoted && (
                      <div 
                        className="absolute left-0 top-0 h-full bg-primary/10 -z-10 transition-all duration-500" 
                        style={{ width: `${percentage}%` }}
                      />
                    )}
                    <span className={`text-[13px] font-medium transition-colors flex items-center gap-2 ${pollVoted ? (isWinner ? 'text-white' : 'text-dark/60') : 'text-dark/60 group-hover:text-dark'}`}>
                      {pollVoted && isWinner && <Check size={14} className="text-white" />}
                      {opt.text}
                    </span>
                    <span className={`text-[12px] ${pollVoted && isWinner ? 'text-white/80' : 'text-muted'}`}>
                      {pollVoted ? `${percentage}%` : ' Vote '}
                    </span>
                  </button>
                )
              })}
            </div>
            {pollVoted && <span className="text-[11px] text-muted w-full text-center mt-1">{totalVotes} votes</span>}
          </div>

          {/* Audio Only Card */}
          <div className="border border-border-light flex flex-col gap-4 items-start p-5 rounded-[2px] w-full bg-white shadow-sm" role="region" aria-label="Audio player">
            <span className="font-medium text-muted text-[10px] tracking-[1px]">AUDIO ONLY</span>
            <p className="font-medium text-dark text-[14px]">
              Game 3 — Rally Breakdown
            </p>
            <audio 
              ref={audioRef} 
              onTimeUpdate={handleTimeUpdate} 
              onEnded={() => setIsPlaying(false)} 
              src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" 
            />
            {/* Audio Progress */}
            <div
              className="bg-border-light h-1 relative rounded-full w-full cursor-pointer hover:scale-y-150 origin-left transition-transform duration-200"
              role="slider"
              aria-label="Audio progress"
            >
              <div 
                className="absolute bg-dark h-full left-0 rounded-full top-0 transition-all duration-100" 
                style={{ width: `${audioProgress}%` }}
              />
            </div>
            {/* Audio Controls */}
            <div className="flex justify-between items-center w-full">
              <div className="flex gap-3 items-center">
                <button onClick={() => {if(audioRef.current) audioRef.current.currentTime = Math.max(0, audioRef.current.currentTime - 10)}} aria-label="Previous track" className="border border-border-light rounded-[2px] size-8 flex items-center justify-center hover:bg-dark/5 transition-colors duration-200 text-dark/60">
                  <SkipBack size={14} className="fill-current" />
                </button>
                <button onClick={toggleAudio} aria-label="Play audio" className="bg-dark flex items-center justify-center rounded-[2px] size-8 hover:bg-black transition-transform duration-200 hover:scale-105 active:scale-95 text-white">
                  {isPlaying ? <Pause size={14} className="fill-white" /> : <Play size={14} className="fill-white" />}
                </button>
                <button onClick={() => {if(audioRef.current) audioRef.current.currentTime += 10}} aria-label="Next track" className="border border-border-light rounded-[2px] size-8 flex items-center justify-center hover:bg-dark/5 transition-colors duration-200 text-dark/60">
                  <SkipForward size={14} className="fill-current" />
                </button>
              </div>
              <span className="font-medium text-muted text-[11px]">
                  {audioRef.current?.currentTime ? `${Math.floor(audioRef.current.currentTime / 60)}:${String(Math.floor(audioRef.current.currentTime % 60)).padStart(2, '0')}` : "0:00"}
              </span>
            </div>
          </div>

          {/* Comment Card */}
          <div className="border border-border flex flex-col gap-3 items-start overflow-clip p-5 rounded-[2px] w-full bg-dark/5 max-h-[400px]">
            <span className="font-medium text-primary text-[10px] tracking-[1px] w-full flex items-center gap-1">
              <MessageSquare size={12} />
              YOUR TAKE
            </span>
            <p className="font-medium text-[#17171c] text-[14px] w-full">
              What would you have done on this play?
            </p>
            
            {/* Comments List */}
            <div className="flex flex-col gap-3 w-full overflow-y-auto pr-1 flex-1 min-h-[100px]">
              {comments.map(c => (
                <div key={c.id} className="bg-white p-3 rounded-[4px] shadow-sm border border-border-light/50">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-[12px] text-dark">{c.author}</span>
                    <span className="text-[10px] text-muted">{c.time}</span>
                  </div>
                  <p className="text-[13px] text-dark/80 leading-snug">{c.text}</p>
                </div>
              ))}
            </div>

            <div className="w-full flex gap-2 flex-col pt-2 border-t border-border mt-2">
              <label htmlFor="user-comment" className="sr-only">Your response</label>
              <textarea
                id="user-comment"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="bg-white border border-[#d0d0d0] flex flex-col h-16 items-start px-3 py-[10px] rounded-[4px] w-full text-[13px] text-dark placeholder:text-dark/40 resize-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200"
                placeholder="Armchair coach? Let's hear it..."
              />
              <button 
                onClick={handleCommentSubmit}
                className="bg-primary flex h-9 items-center justify-center rounded-[4px] w-full hover:bg-primary-hover transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/20 hover-glow active:scale-[0.98] group overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="font-medium text-[13px] text-white relative z-10">Send to Press Box</span>
              </button>
            </div>
          </div>
        </ScrollSection>
      </div>

      <Footer />
    </div>
  );
}