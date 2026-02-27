import { useEffect, useRef } from "react";

export default function Wheel({ names, rotation, winnerIndex, onCenterClick }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!names.length) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const size = canvas.width;
    const center = size / 2;
    const slice = (2 * Math.PI) / names.length;

    ctx.clearRect(0, 0, size, size);

    names.forEach((name, i) => {
      const angle = i * slice;
      ctx.beginPath();
      ctx.moveTo(center, center);
      ctx.arc(center, center, center - 10, angle, angle + slice);

      ctx.fillStyle =
        i === winnerIndex
          ? "#ff1744"
          : ["#e53935", "#1e88e5", "#43a047", "#fbc02d"][i % 4];

      ctx.fill();

      ctx.save();
      ctx.translate(center, center);
      ctx.rotate(angle + slice / 2);
      ctx.textAlign = "right";
      ctx.fillStyle = "#fff";
      ctx.font = i === winnerIndex ? "bold 22px Arial" : "18px Arial";
      ctx.fillText(name, center - 25, 8);
      ctx.restore();
    });

    // center button
    ctx.beginPath();
    ctx.arc(center, center, 45, 0, Math.PI * 2);
    ctx.fillStyle = "#fff";
    ctx.fill();

    ctx.fillStyle = "#000";
    ctx.font = "bold 14px Arial";
    ctx.textAlign = "center";
    ctx.fillText("SPIN", center, center + 5);
  }, [names, rotation, winnerIndex]);

  return (
    <div className="wheel-wrapper">
      <canvas
        ref={canvasRef}
        width={500}
        height={500}
        style={{ transform: `rotate(${rotation}deg)` }}
        onClick={onCenterClick}
      />
      <div className="pointer">◀</div>
    </div>
  );
}
