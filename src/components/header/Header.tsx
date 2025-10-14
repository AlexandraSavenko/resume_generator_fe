import { NavLink } from 'react-router-dom';
import css from "./Header.module.css"
import clsx from 'clsx';

const Header = () => {
  return (
    <div className={`${css.headerWrap} container`}>
      <nav>
        <NavLink className={({ isActive }) => clsx(isActive && css.active, css.link) } to={"/"}>Home</NavLink>
        <NavLink className={({ isActive }) => clsx(isActive && css.active, css.link)} to={"/catalog"}>Catalog</NavLink>
      </nav>
    </div>
  )
}

export default Header