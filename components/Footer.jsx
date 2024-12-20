import React, { useState, useEffect } from "react";
import "../styles/Footer.css";
import { useTheme } from "../hooks/useTheme";

export default function Footer() {
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [isDark] = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const isBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight;
      setIsAtBottom(isBottom);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className={`footer ${isAtBottom ? "visible" : ""}`}>
      <span className={`${isDark ? "dark" : "light"}`}>
        Created with 💝 by Piyush
      </span>
    </footer>
  );
}
