import "./styles.css";
import profile from "./../../img/icons/loginFooter.png";
import phone from "./../../img/icons/phoneFooter.png";
import mail from "./../../img/icons/mailFooter.png";

const Footer = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);

    const formData = new FormData(e.target);
    const email = formData.get("email");
    var container = document.getElementById("input-email");
    var p = container.querySelector("p");
    if (!email) {
      const div = document.createElement("div");
      div.style.color = "red";
      div.textContent = "Не может быть пустым";
      container.append(div);
    } else {
      container.innerHTML = "";
      container.append(p);
    }
  };

  return (
    <footer className="footer">
      <div className="container__footer">
        <h2 className="footer__title">
          Сайт рыбатекст поможет дизайнеру, верстальщику
        </h2>
        <p className="footer__text">Оставьте заявку и мы пришлем вам ссылку</p>

        <form name="formik" className="footer__form" onSubmit={onSubmit}>
          <div id="input-email" className="form-input-block1">
            <div className="footer__input-text">
              <img className="footer__form-img" src={profile} alt="profile" />
              <input
                className="footer__input form__profile"
                type="text"
                placeholder="Ваше имя"
                color="blue"
                name="name"
              />
              <hr
                className="footer__line"
                width="232"
                size="1"
                color="#F9F9F9"
              />
            </div>
          </div>

          <div className="form-input-block2">
            <img className="footer__form-img" src={phone} alt="profile" />

            <input
              className="footer__input form-tel"
              type="number"
              placeholder="Ваш телефон"
              name="phonenumber"
            />
            <hr className="footer__line" width="232" size="1" color="#F9F9F9" />
            <img src="" alt="" />
          </div>

          <div>
            <img className="footer__form-img" src={mail} alt="profile" />

            <input
              className="footer__input form-mail"
              type="email"
              placeholder="Ваша почта"
              name="email"
            />
            <hr className="footer__line" width="232" size="1" color="#F9F9F9" />
          </div>
          <button type="submit" className="footer__button">
            <span className="footer__button-text"> Подписаться</span>
          </button>
        </form>

        <div className="container">
          <nav className="footer__menu">
            <ul className="footer__menu-list">
              <li className="footer__menu-item">
                <a href="/#" className="footer__menu-link">
                  О нас
                </a>
              </li>
              <li className="footer__menu-item">
                <a href="/#" className="footer__menu-link">
                  Как сделать заказ
                </a>
              </li>
              <li className="footer__menu-item">
                <a href="/#" className="footer__menu-link">
                  Доставка
                </a>
              </li>
              <li className="footer__menu-item">
                <a href="/#" className="footer__menu-link">
                  Гарантия
                </a>
              </li>
              <li className="footer__menu-item">
                <a href="/#" className="footer__menu-link">
                  Сборка
                </a>
              </li>
              <li className="footer__menu-item ">
                <a href="/#" className="footer__menu-link politic-conf">
                  Политика конфиденциальности
                </a>
              </li>
              <li className="footer__menu-item">
                <p className="footer__menu-text">
                  2020, МебельХолл. Все права защищены
                </p>
              </li>
            </ul>

            <ul className="footer__menu-list">
              <li className="footer__menu-item">
                <a href="/#" className="footer__menu-link">
                  Адреса магазинов
                </a>
              </li>
              <li className="footer__menu-item">
                <a href="/#" className="footer__menu-link">
                  Вакансии
                </a>
              </li>
              <li className="footer__menu-item">
                <a href="/#" className="footer__menu-link">
                  Блог
                </a>
              </li>
              <li className="footer__menu-item">
                <a href="/#" className="footer__menu-link">
                  Отзывы
                </a>
              </li>
            </ul>

            <ul className="footer__menu-list push__block">
              <li className="footer__menu-item">
                <a href="/#" className="footer__menu-link insta">
                  Инстаграм
                </a>
              </li>
              <li className="footer__menu-item">
                <a href="/#" className="footer__menu-link facebook">
                  Фейсбук
                </a>
              </li>
              <li className="footer__menu-item">
                <a href="/#" className="footer__menu-link vk">
                  Вконтакте
                </a>
              </li>
              <li className="footer__menu-item">
                <a href="tel:+7 (347) 292-62-52" className="footer__menu-link">
                  +7 (347) 292-62-52
                </a>
              </li>
              <li className="footer__menu-item">
                <a href="email:info@mebelhol.ru" className="footer__menu-link">
                  info@mebelhol.ru
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
