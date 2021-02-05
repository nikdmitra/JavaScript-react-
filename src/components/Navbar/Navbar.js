import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';


const Navbar = () => {
  return (

    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to='/Стена' activeClassName={s.aktiveLink}>Стена</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/Сообщения' activeClassName={s.aktiveLink}>Сообщения</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/Настройки' activeClassName={s.aktiveLink}>Настройки</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/Игры' activeClassName={s.aktiveLink}>Игры</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/Пользователи' activeClassName={s.aktiveLink}>Пользователи</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/Фото' activeClassName={s.aktiveLink}>Фото</NavLink>
      </div>
    </nav>
  );
}


export default Navbar;
