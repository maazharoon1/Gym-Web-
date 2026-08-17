import React from 'react';
import { Calendar, Flame } from 'lucide-react';

interface FloatingActionBarProps {
  onOpenBooking: (mode: 'free-pass' | 'membership') => void;
}

export const FloatingActionBar: React.FC<FloatingActionBarProps> = ({ onOpenBooking }) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-30 p-3 bg-black/90 backdrop-blur-lg border-t border-white/10 flex items-center gap-3">
      <button
        onClick={() => onOpenBooking('free-pass')}
        className="flex-1 py-3 bg-white/10 text-white text-xs font-black uppercase tracking-wider rounded-lg flex items-center justify-center gap-1.5 active:bg-white/20 transition-all border border-white/15"
      >
        <Calendar className="w-3.5 h-3.5 text-[#FF6321]" />
        <span>FREE PASS</span>
      </button>

      <button
        onClick={() => onOpenBooking('membership')}
        className="flex-1 py-3 bg-[#FF6321] text-black text-xs font-black uppercase tracking-wider rounded-lg flex items-center justify-center gap-1.5 active:bg-white transition-all shadow-lg"
      >
        <Flame className="w-3.5 h-3.5 fill-black" />
        <span>JOIN MORR</span>
      </button>
    </div>
  );
};
