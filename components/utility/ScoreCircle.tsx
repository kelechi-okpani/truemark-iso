import React, { useEffect, useState } from "react";

type ScoreCircleProps = {
  score: number;            // user's score (e.g., 78)
  maxScore?: number;        // maximum score (default: 100)
  size?: number;            // diameter in px (default: 160)
  stroke?: number;          // ring thickness (default: 12)
  animate?: boolean;        // animate progress (default: true)
  label?: string;           // optional label under number (e.g., "Points")
};

export default function ScoreCircle({
                                      score,
                                      maxScore = 100,
                                      size = 160,
                                      stroke = 12,
                                      animate = true,
                                      label = "Score",
                                    }: ScoreCircleProps) {
  const [progress, setProgress] = useState(0); // 0..1
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const clampedScore = Math.max(0, Math.min(score, maxScore));
  const target = maxScore === 0 ? 0 : clampedScore / maxScore;

  useEffect(() => {
    if (!animate) {
      setProgress(target);
      return;
    }
    let rafId: number;
    let start: number | null = null;
    const duration = 800; // ms
    const step = (timestamp: number) => {
      if (start === null) start = timestamp;
      const elapsed = timestamp - start;
      const t = Math.min(1, elapsed / duration);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(eased * target);
      if (t < 1) rafId = requestAnimationFrame(step);
    };
    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [target, animate]);

  const dashOffset = circumference * (1 - progress);

  const percent = Math.round((clampedScore / Math.max(1, maxScore)) * 100);
  const display = Number.isInteger(score) ? score : +score.toFixed(1);

  return (
    <div style={{ width: size }} className="mx-auto">
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        role="img"
        aria-label={`${display} out of ${maxScore} (${percent}%)`}
      >
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#04BA99" />
            <stop offset="100%" stopColor="#387467" />
          </linearGradient>
        </defs>

        {/* Background ring */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#e6f0ec"
          strokeWidth={stroke}
          fill="transparent"
        />

        {/* Progress ring */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="url(#grad)"
          strokeWidth={stroke}
          strokeLinecap="round"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>

      {/* Center content */}
      <div
        className="mt-[-${10}px] -translate-y-[${size / 2}px]" /* no-op tailwind note */
        style={{
          marginTop: `-${size}px`,
          height: size,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div className="flex flex-col items-center justify-center">
          <div className="text-5xl font-extrabold text-[#387467] leading-none">
            {display}
          </div>
          <div className="text-sm text-gray-500 mt-1">{label}</div>
          <div className="text-xs text-gray-400 mt-1">{percent}%</div>
        </div>
      </div>
    </div>
  );
}
