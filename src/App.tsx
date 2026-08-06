import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Experience } from "./pages/Experience";
import { Skills } from "./pages/Skills";
import { Certifications } from "./pages/Certifications";
import { Blog } from "./pages/Blog";
import { Post } from "./pages/Post";
import { Projects } from "./pages/Projects";
import { ScrollToTop } from "./components/ScrollToTop";

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/post/:slug" element={<Post />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
}
