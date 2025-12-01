import { useState } from "react";
import {useNavigate} from 'react-router-dom';

function LogoButton() {
  const navigate = useNavigate();
  const [hoverSide, setHoverSide] = useState<"left" | "right">("left");

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { left, width } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    setHoverSide(x < width / 2 ? "left" : "right");
  };

  return (
    <div>
      <button onClick={() => navigate('/home')}
        className="flex transition-transform hover:scale-105 group cursor-pointer"
        onMouseMove={handleMouseMove}
      >
        <div className="text-2xl font-bold uppercase">
          <span
            className={
              hoverSide === "left" ? "text-orange-300" : "text-blue-300"
            }
          >
            Farmers
          </span>
          -
          <span
            className={
              hoverSide === "left" ? "text-blue-300" : "text-orange-300"
            }
          >
            Market
          </span>
        </div>
      </button>
    </div>
  );
}

export default LogoButton;