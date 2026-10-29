import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    const titles: Record<string, string> = {
      "/": "Diego Yonoff | Junior IAM Analyst — Identity & Access Management",
      "/about": "About & Profile | Diego Yonoff — IAM Analyst",
      "/experience": "Experience | Diego Yonoff — IAM Analyst",
      "/skills": "Skills & Education | Diego Yonoff — IAM Analyst",
      "/certifications": "Certifications | Diego Yonoff — IAM Goals & Credentials",
      "/projects": "IAM Projects & Roadmap | Diego Yonoff",
      "/blog": "Blog & Writeups | Diego Yonoff",
    };

    if (titles[pathname]) {
      document.title = titles[pathname];
    }
  }, [pathname]);

  return null;
}
