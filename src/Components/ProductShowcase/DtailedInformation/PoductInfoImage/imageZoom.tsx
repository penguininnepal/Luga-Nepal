import { useState } from "react";

interface ImageZoomProps {
  src: string;
  alt?: string;
}

const ImageZoom: React.FC<ImageZoomProps> = ({ src, alt }) => {
  const [position, setPosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setPosition({ x, y });
  };

  return (
    <div
      className="overflow-hidden w-full h-[60vh] group"
      onMouseMove={handleMouseMove}
    >
      <img
        src={src}
        alt={alt || "Zoom Image"}
        className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-[2.1] cursor-zoom-in"
        style={{ transformOrigin: `${position.x}% ${position.y}%` }}
      />
    </div>
  );
};

export default ImageZoom;