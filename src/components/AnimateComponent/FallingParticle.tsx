"use client";

import FallingParticles from "falling-particles";

interface FallingTagsProps {
  tags: React.ReactNode[];
}

export default function FallingTags({ tags }: FallingTagsProps) {
  const images = tags.map((tag, idx) => {
    // convert React component tag to an image or render as canvas?
    // falling-particles allows `images` prop which are image URLs or <img> elements
    // so এখানে একটি trick লাগতে পারে —ত্বম React tags কে canvas overlay দিয়ে position করো
    return undefined;
  });

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      <FallingParticles
        images={images.filter(img => img !== undefined) as string[]}
        numParticles={tags.length}
        xSpeedRange={{ min: -2, max: 2 }}
        ySpeedRange={{ min: 1, max: 3 }}
        rotationRange={{ min: 0, max: 360 }}
        sizeRange={{ min: 20, max: 60 }}
        style={{ position: "absolute", inset: 0 }}
      />
      {/* অতিরিক্তভাবে তুমি tags-গুলো absolute position এ রাখো এবং CSS animation দিয়ে নিচে এনে overlap করো */}
    </div>
  );
}
