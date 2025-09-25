"use client";
import { useEffect, useState } from "react";

interface TypewriterProps {
  text: string[];
  speed?: number;
  deleteSpeed?: number;
  waitTime?: number;
  className?: string;
  cursorChar?: string;
}

export default function Typewriter({
  text,
  speed = 100,
  deleteSpeed = 50,
  waitTime = 1500,
  className = "",
  cursorChar = "|",
}: TypewriterProps) {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const handleTyping = () => {
      const currentText = text[index % text.length];

      if (!isDeleting) {
        // টাইপ করা হচ্ছে
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.substring(0, displayText.length + 1));
        } else {
          // পুরো শব্দ টাইপ হয়ে গেলে অপেক্ষা করবে
          timer = setTimeout(() => setIsDeleting(true), waitTime);
          return;
        }
      } else {
        // ডিলিট করা হচ্ছে
        if (displayText.length > 0) {
          setDisplayText(currentText.substring(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setIndex((prev) => prev + 1);
        }
      }
    };

    timer = setTimeout(handleTyping, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, index, text, speed, deleteSpeed, waitTime]);

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse">{cursorChar}</span>
    </span>
  );
}
