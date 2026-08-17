import React from 'react';

interface MorrLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'mark' | 'horizontal';
  className?: string;
}

export const MorrLogo: React.FC<MorrLogoProps> = ({
  size = 'md',
  variant = 'full',
  className = ''
}) => {
  const markSizes = {
    sm: { w: 28, h: 32 },
    md: { w: 38, h: 44 },
    lg: { w: 54, h: 62 },
    xl: { w: 72, h: 84 }
  };

  const currentMark = markSizes[size];

  // Authentic MORR FIT geometric "MF" monogram (White M structure + Orange diagonal bars)
  const MonogramSvg = (
    <svg
      width={currentMark.w}
      height={currentMark.h}
      viewBox="0 0 270 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 transition-transform duration-300 group-hover:scale-105"
    >
      {/* 1. White Main 'M' Structure */}
      <path
        d="M 20 12 L 122 102 L 250 12 L 250 56 L 122 146 L 66 102 V 224 H 20 Z"
        fill="#FFFFFF"
      />
      
      {/* 2. Vibrant Orange Middle Parallelogram */}
      <path
        d="M 122 172 L 250 82 L 250 126 L 122 216 Z"
        fill="#FF6321"
      />
      
      {/* 3. Vibrant Orange Bottom Diamond / Rhombus */}
      <path
        d="M 122 242 L 158 216 L 158 260 L 122 286 Z"
        fill="#FF6321"
      />
    </svg>
  );

  if (variant === 'mark') {
    return (
      <div className={`inline-flex items-center group ${className}`}>
        {MonogramSvg}
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-3 group select-none ${className}`}>
      {MonogramSvg}
      <div className="flex flex-col justify-center">
        <div className="flex items-baseline tracking-tighter">
          <span className="font-athletic font-black text-white text-xl sm:text-2xl tracking-wider leading-none">
            MORR
          </span>
          <span className="font-athletic font-black text-[#FF6321] text-xl sm:text-2xl tracking-wider leading-none ml-1">
            FIT
          </span>
        </div>
        <div className="flex items-center gap-1.5 mt-0.5">
          <span className="h-0.5 w-2 bg-[#FF6321]"></span>
          <span className="text-[10px] tracking-[0.28em] text-white/70 font-bold uppercase font-display leading-none">
            HOUSTON
          </span>
        </div>
      </div>
    </div>
  );
};
