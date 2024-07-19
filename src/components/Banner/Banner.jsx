export default function Banner({ img, title, entry }) {
  return (
    <li className="banner">
      <div className="banner__img">
        <img src={img} alt="" />
      </div>

      <div className="banner__text">
        <h4 className="banner__title">
          {title}
        </h4>

        <p className="banner__entry">
          {entry}
        </p>
      </div>
    </li>
  );
}
