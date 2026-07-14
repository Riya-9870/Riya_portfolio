import { useEffect, useState } from "react";

function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-[9999] w-6 h-6 rounded-full border border-green-400 bg-green-400/20 blur-[1px] transition-transform duration-75"
      style={{
        left: position.x - 12,
        top: position.y - 12,
      }}
    />
  );
}

export default CursorGlow;
