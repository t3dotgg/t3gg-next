import React, { useEffect } from "react";

export const AnimatedBackground: React.FC = () => {
  const [blobProps, setBlobProps] = React.useState<BlobProps[]>([]);
  useEffect(() => {
    const generatedBlobs: BlobProps[] = [];
    for (let i = 0; i < window.innerWidth; i += 50) {
      generatedBlobs.push(generateBlobProps());
    }
    setBlobProps(generatedBlobs);
  }, []);

  return (
    <div className="animation">
      {blobProps.map((props, index) => {
        return <Blob {...props} key={index} />;
      })}
    </div>
  );
};

const colorIndexes: (0 | 1 | 2)[] = [0, 1, 2];

const generateBlobProps: () => BlobProps = () => {
  return {
    size: Math.floor(Math.random() * 200) + 100,
    color: colorIndexes[Math.floor(Math.random() * colorIndexes.length)],
    startLocation: {
      x: Math.floor(Math.random() * window.innerWidth),
      y: Math.floor(Math.random() * window.innerHeight),
    },
  };
};

const colors = ["#E8DDFF", "#D1C8E6", "#AEA6BF"];

interface BlobProps {
  size: number;
  color: 0 | 1 | 2;
  startLocation: {
    x: number;
    y: number;
  };
}

export const Blob: React.FC<BlobProps> = ({ size, color, startLocation }) => {
  const [bl, setBL] = React.useState<{
    x: number;
    y: number;
  }>(startLocation);

  const move = () => {
    setBL(({ x, y }) => {
      if (x - size > window.innerWidth) {
        x = -size;
      }
      if (y - size > window.innerHeight) {
        y = -size;
      }
      return { x: x + 5, y: y + 2 };
    });
    requestAnimationFrame(move);
  };

  useEffect(() => {
    const request = requestAnimationFrame(move);
    return () => cancelAnimationFrame(request);
  }, []);

  const staticStyles: React.CSSProperties = {
    width: size + "px",
    height: size + "px",
    borderRadius: size / 2 + "px",
    backgroundColor: colors[color],
  };

  return (
    <div
      className="blob"
      style={{ ...staticStyles, top: bl.y + "px", left: bl.x + "px" }}
    />
  );
};
