import React, { useEffect, useState } from "react";

const AnimatedCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);


  useEffect(() => {
    let x = 0, y = 0;
    let targetX = 0, targetY = 0;
    const speed = 0.1; // smaller = smoother

    const move = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const update = () => {
      x += (targetX - x) * speed;
      y += (targetY - y) * speed;
      setPosition({ x, y });
      requestAnimationFrame(update);
    };

    window.addEventListener("mousemove", move);
    update();

    return () => window.removeEventListener("mousemove", move);
  }, []);


  return (
    <div
      className={`pointer-events-none fixed top-0 left-0 z-[9999] transition-transform duration-150 ease-out`}
      style={{
        transform: `translate3d(${position.x - 8}px, ${position.y - 8}px, 0)`,
      }}
    >
      <div
        className={`rounded-full transition-all duration-300 ease-out ${
          hovering ? "scale-150 bg-[#387467]/50" : "scale-100 bg-[#387467]/80"
        }`}
        style={{
          width: "16px",
          height: "16px",
        }}
      />
    </div>
  );
};

export default AnimatedCursor;
