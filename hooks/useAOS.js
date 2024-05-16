"use client"; // Add this line if you are using Server Components

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export function useAOS() {
  useEffect(() => {
    AOS.init();
  }, []);
}
