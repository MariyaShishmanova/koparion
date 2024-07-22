export default function Product({ img, name, price }) {
  return (
    <li className="product">
      <a href="#">
        <div className="product__img">
          <img src={img} alt="product-img" />
        </div>

        <div className="product__descr">
          <h5 className="product__title">
            {name}
          </h5>

          <div className="product__price">
            <span>
              {price}
            </span>
          </div>
        </div>
      </a>
    </li>
  );
}
