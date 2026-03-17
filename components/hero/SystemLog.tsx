"use client";
import { useEffect, useState } from "react";

// The data structure to hold our messages
const logMessages = [
  "LOADING MODULES...",
  "AI JUDGE INITIALIZED...",
  "PEER MATCHING ACTIVE...",
  "READY FOR DEPLOYMENT.",
];

export default function SystemLog() {
  const [displayedMessages, setDisplayedMessages] = useState<string[]>([]);

  useEffect(() => {
    // Add messages with a delay
    logMessages.forEach((message, index) => {
      setTimeout(() => {
        setDisplayedMessages((prev) => [...prev, message]);
      }, 500 * (index + 1)); // Adjust the 500 for typing speed
    });
  }, []);

  return (
    <div className="space-y-1 font-jetbrains text-sm text-foreground/80 leading-relaxed">
      {displayedMessages.map((message, index) => (
        <div key={index} className="flex gap-x-3">
          <span className="text-foreground">{`>`}</span>
          <span className="block">{message}</span>
        </div>
      ))}
    </div>
  );
}