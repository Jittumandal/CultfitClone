import { useState } from "react";

export default function AnimatedBox() {
  const [isStepsMode, setIsStepsMode] = useState(false);

  return (
    <div
      className={`animate-move h-12 w-12 bg-blue-600`}
      style={{
        animationTimingFunction: isStepsMode ? "steps(10, end)" : "linear",
        animationDuration: "2s",
        animationIterationCount: "infinite",
      }}
    >
      sdfsd
    </div>
  );
}
