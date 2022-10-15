import { Routes, Route } from "react-router-dom";
import { Header } from "./components/header/header";
import { Blog } from "./components/pages/blog/blog";
import { About } from "./components/pages/about/about";
import { languages } from "./locale";
import { useTheme } from "./hooks/theme";
import { useLang } from "./hooks/lang";
import {Posts } from "./components";
import { SinglePage } from "./components/pages/single-page";
export const App = () => {
  const [theme] = useTheme();
  const [lang] = useLang();
  return (
    <div className={theme}>
      <Header />
      <div className={theme}>
        <Routes>
          <Route path="/" element={<>{languages[lang].main.text}</>} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/post/:postId" element={<SinglePage />} />

          <Route path="*" element={<>Error</>} />
        </Routes>
      </div>
    </div>
  );
};
