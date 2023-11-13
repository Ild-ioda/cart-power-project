import "./styles.css";
const Bedroom = () => {
  return (
    <section className="bedroom">
      <div className="container__bedroom">
        <p className="bedroom__menu">
          Главная <span className="slash">/</span> Все коллекции
          <span className="slash">/</span> Альба{" "}
          <span className="slash">/</span>
          <b>Спальня</b>
        </p>
        <h2 className="bedroom__title">Спальня</h2>
        <p className="bedroom__description">Спальня коллекции Альба</p>
      </div>
    </section>
  );
};

export default Bedroom;
