import React, { useEffect } from "react";
import * as innerHeight from "ios-inner-height";
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";

const runAnimations = () => {
  const c = document.getElementById("homepage-animation") as HTMLCanvasElement;
  const ctx = c.getContext("2d");
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = innerHeight();

  let blobs: BlobProps[] = [];
  for (let i = 0; i < window.innerWidth; i += 60) {
    blobs.push(generateBlobProps());
  }
  blobs.sort((a, b) => a.size - b.size);

  const drawBlob = (props: BlobProps) => {
    const { x, y } = props.location;
    ctx.fillStyle = props.color;
    ctx.beginPath();
    ctx.arc(x ?? 0, y ?? 0, props.size, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
  };
  const animate = () => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    blobs = blobs.map((blob) => {
      const { size } = blob;
      let { x, y } = blob.location;
      x += size / 60;
      y += size / 60;
      if (x - size > ctx.canvas.width) {
        x = -size;
      }
      if (y - size > ctx.canvas.height) {
        y = -size;
      }

      return {
        ...blob,
        location: {
          x: x,
          y: y,
        },
      };
    });
    blobs.forEach(drawBlob);
    return requestAnimationFrame(animate);
  };
  return animate();
};

export const AnimatedBackground: React.FC = () => {
  useEffect(() => {
    const cancel = runAnimations();
    disableBodyScroll(document.getElementById("homepage-animation"));
    return () => {
      clearAllBodyScrollLocks();
      cancelAnimationFrame(cancel);
    };
  }, []);

  return <canvas className="animation" id="homepage-animation" />;
};

const generateBlobProps: () => BlobProps = () => {
  return {
    size: Math.floor(Math.random() * 150) + 80,
    color: colors[Math.floor(Math.random() * colors.length)],
    location: {
      x: Math.floor(Math.random() * window.innerWidth),
      y: Math.floor(Math.random() * window.innerHeight),
    },
  };
};
type Colors = "#E8DDFF" | "#D1C8E6" | "#AEA6BF";
const colors: Colors[] = ["#E8DDFF", "#D1C8E6", "#AEA6BF"];
interface BlobProps {
  size: number;
  color: Colors;
  location: {
    x: number;
    y: number;
  };
}
