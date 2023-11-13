import "./styles.css";

const Hamburger = () => {
  return (
    <div className="hamburger-menu">
      <input id="menu__toggle" type="checkbox" />
      <label className="menu__btn" for="menu__toggle">
        <span></span>
      </label>
      <ul className="menu__box">
        <li>
          <a className="menu__item" href="/#">
            Как заказать
          </a>
        </li>
        <li>
          <a className="menu__item" href="/#">
            Доставка и оплата
          </a>
        </li>
        <li>
          <a className="menu__item" href="/#">
            Кредит и рассрочка
          </a>
        </li>
        <li>
          <a className="menu__item" href="/#">
            Сборка
          </a>
        </li>
        <li>
          <a className="menu__item" href="/#">
            Частые вопросы
          </a>
        </li>
        <li>
          {" "}
          <a className="menu__item" href="tel:+7 (347) 292-62-52">
            +7 (347) 292-62-52
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Hamburger;
