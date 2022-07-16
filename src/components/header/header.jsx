import { NavLink } from "react-router-dom";
import { useLang } from "../../hooks/lang";
import { useTheme } from "../../hooks/theme";
import { languages } from "../../locale";
import "./header.css";
export const Header = () => {
  const [theme, setTheme] = useTheme();
  const [lang, setLang] = useLang();
  const handleChangeTheme = (evt) => {
    setTheme(evt.target.value);
  };
  const handleChangeLang = (evt) => {
    setLang(evt.target.value);
  };
  return (
    <header className={theme}>
      <div className="container d-flex justify-content-between align-items-center ">
        <NavLink className={"link"} to="/">
          {languages[lang].header.logo}
        </NavLink>
        <nav className="d-flex align-items-center">
          <ul className="d-flex list-unstyled align-items-center mt-2">
            <li className="nav__list">
              <NavLink
                className={({ isActive }) =>
                  `link ${isActive ? "link-active" : ""}`
                }
                to="/blog"
              >
                {languages[lang].header.link.blog}
              </NavLink>
            </li>
            <li className="ms-3 nav__list">
              <NavLink
                className={({ isActive }) =>
                  `link ${isActive ? "link-active" : ""}`
                }
                to="/about"
              >
                {languages[lang].header.link.about}
              </NavLink>
            </li>
            <li className="ms-3 nav__list">
              <NavLink
                className={({ isActive }) =>
                  `link ${isActive ? "link-active" : ""}`
                }
                to="/posts"
              >
                {languages[lang].header.link.posts}
              </NavLink>
            </li>
          </ul>
          <select
            defaultValue={theme}
            className="ms-2"
            onChange={handleChangeTheme}
          >
            <option value="light">light</option>
            <option value="dark">dark</option>
          </select>
          <select
            defaultValue={lang}
            className="ms-2"
            onChange={handleChangeLang}
          >
            <option value="en">en</option>
            <option value="uz">uz</option>
            <option value="ru">ru</option>
          </select>
        </nav>
      </div>
    </header>
  );
};
