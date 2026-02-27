import React, { useRef, useEffect } from "react";

export default function Wheel({ names, rotation }) {
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
      const angle = slice * i;
      const nextAngle = angle + slice;

      ctx.beginPath();
      ctx.moveTo(center, center);
      ctx.arc(center, center, center - 10, angle, nextAngle);
      ctx.fillStyle = `hsl(${(i * 360) / names.length}, 70%, 55%)`;
      ctx.fill();

      ctx.save();
      ctx.translate(center, center);
      ctx.rotate(angle + slice / 2);
      ctx.textAlign = "right";
      ctx.fillStyle = "#fff";
      ctx.font = "14px sans-serif";
      ctx.fillText(name, center - 20, 5);
      ctx.restore();
    });

    // Pointer
    ctx.fillStyle = "#000";
    ctx.beginPath();
    ctx.moveTo(center - 10, 5);
    ctx.lineTo(center + 10, 5);
    ctx.lineTo(center, 30);
    ctx.fill();
  }, [names, rotation]);

  return (
    <canvas
      ref={canvasRef}
      width={420}
      height={420}
      style={{ transform: `rotate(${rotation}deg)` }}
    />
  );
}
