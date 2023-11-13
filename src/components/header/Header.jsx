import "./styles.css";
import heart from "./../../img/icons/heart.svg";
import map from "./../../img/icons/mapHeader.svg";
import user from "./../../img/icons/userHeader.svg";
import basket from "./../../img/icons/shoppingCartHeader.svg";
import menu from "./../../img/icons/menuFormHeader.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__inner">
          <button className="header__button1" type="button">
            <span className="header__button1-text">Test</span>
            <br />
            <span className="header__button1-description">
              Сеть мебельных магазинов
            </span>
          </button>
          <button className="header__button2" type="button">
            <img className="form__img-menu" src={menu} alt="menu" />
            <span className="header__button2-text">Каталог</span>
          </button>

          <form className="header__form">
            <input
              className="header__input"
              type="text"
              placeholder="Например, двухъярусная кровать"
            />
          </form>

          <a className="header__heart" href="/#">
            <img
              className="heart__logo"
              src={heart}
             
              alt="heart"
            />
          </a>
          <a href="/#" className=" header__link-adress">
            Адреса
            <img className="adress__logo" src={map} alt="map" />
          </a>
          <a href="/#" className=" header__link-profile">
            Профиль
            <img className="profile__logo" src={user} alt="user" />
          </a>

          <a className=" header__link-basket" href="/#">
            <img
              className="basket"
              src={basket}
              alt="basket"
              width="24px"
              height="24px"
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
