import "./styles.css";
import Hamburger from "../menuhamburger/Hamburger";
import point from "./../../img/icons/point.png";
import arrow from "./../../img/icons/downArrowNav.png";

const Navbar = () => {
  return (
    <nav className="nav">
      <Hamburger />
      <div className="nav__container">
        <div className="nav__inner">
          <a className="logo" href="/#">
            <img className="logo__img" src={point} alt="logoImg" />
            Нижний Новгород
          </a>

          <ul className="nav__list">
            <li className="nav__list-item">
              <a href="/#" className="nav__list-link">
                Как заказать
              </a>
            </li>
            <li className="nav__list-item">
              <a href="/#" className="nav__list-link">
                Доставка и оплата
              </a>
            </li>
            <li className="nav__list-item">
              <a href="/#" className="nav__list-link">
                Кредит и рассрочка
              </a>
            </li>
            <li className="nav__list-item">
              <a href="/#" className="nav__list-link">
                Сборка
              </a>
            </li>
            <li className="nav__list-item">
              <a className="nav__list-link" href="/#">
                Частые вопросы
              <img className="down-arrow" src={arrow} alt="menu" />
              </a>
            </li>
          </ul>

          <a className="nav__number" href="tel:+7 (347) 292-62-52">
            +7 (347) 292-62-52
          </a>
        </div>
        <hr className="nav__line" />
      </div>
    </nav>
  );
};

export default Navbar;
