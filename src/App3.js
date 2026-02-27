import { useState } from "react";
import TopBar from "./game/TopBar";
import Wheel from "./game/Wheel";
import SidePanel from "./game/SidePanel";
import WinnerModal from "./game/WinnerModal";
import "./styles.css";

export default function App() {
  const [names, setNames] = useState([
    "Ali",
    "Beatriz",
    "Charles",
    "Diya",
    "Eric",
    "Fatima",
    "Gabriel",
    "Hanna",
  ]);
  const [rotation, setRotation] = useState(0);
  const [winnerIndex, setWinnerIndex] = useState(null);
  const [spinning, setSpinning] = useState(false);
  const [spinCount, setSpinCount] = useState(0);
  const [winnerName, setWinnerName] = useState(null);

  const spinWheel = () => {
    if (spinning || names.length < 2) return;

    const nextSpin = spinCount + 1;
    setSpinCount(nextSpin);

    setSpinning(true);
    setWinnerIndex(null);

    const sliceAngle = 360 / names.length;
    let spinAngle;

    // 🎯 FORCE WINNER ON 5TH SPIN
    if (nextSpin === 3 && names.includes("ugc_coree")) {
      const forcedIndex = names.indexOf("ugc_coree");

      // Arrow is at 0°, calculate exact angle
      const targetAngle = 360 - forcedIndex * sliceAngle - sliceAngle / 2;

      spinAngle = 1440 + targetAngle - (rotation % 360); // smooth & natural
    } else {
      spinAngle = Math.random() * 360 + 1440;
    }

    const startRotation = rotation;
    const duration = 4500;
    const startTime = performance.now();

    const animate = (time) => {
      const progress = Math.min((time - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentRotation = startRotation + easeOut * spinAngle;

      setRotation(currentRotation);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setSpinning(false);

        const normalized = ((currentRotation % 360) + 360) % 360;
        const index =
          Math.floor(names.length - normalized / sliceAngle) % names.length;

        setWinnerIndex(index);
        setWinnerName(names[index]);
      }
    };

    requestAnimationFrame(animate);
  };

  return (
    <div className="app">
      <TopBar />
      <div className="main">
        <div className="wheel-container">
          <Wheel
            names={names}
            rotation={rotation}
            winnerIndex={winnerIndex}
            onCenterClick={spinWheel}
          />
        </div>
        <SidePanel names={names} setNames={setNames} />
        <WinnerModal winner={winnerName} onClose={() => setWinnerName(null)} />
      </div>
    </div>
  );
}
