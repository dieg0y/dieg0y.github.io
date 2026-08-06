import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    const titles: Record<string, string> = {
      "/": "Diego Yonoff | SOC Analyst & Security Operations",
      "/about": "About & Profile | Diego Yonoff",
      "/experience": "Experience | Diego Yonoff",
      "/skills": "Skills & Education | Diego Yonoff",
      "/certifications": "Certifications & Badges | Diego Yonoff",
      "/projects": "Projects & Networking Tools | Diego Yonoff",
      "/blog": "Blog & Blue Team Writeups | Diego Yonoff",
    };

    if (titles[pathname]) {
      document.title = titles[pathname];
    }
  }, [pathname]);

  return null;
}
