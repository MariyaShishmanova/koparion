import shopImg from '../../assets/shop-img.png';
import productData from '../../data/products';
import Product from '../Product/Product';
import PaginatedList from '../Pagination/PaginatedList';

const PRODUCTS_PER_PAGE = 12;

export default function ShopContent() {
  return (
    <div className="shop-content">
      <div className="shop-content__img">
        <img src={shopImg} alt="man with a book" />
      </div>

      <h2 className="shop-content__title">products</h2>

      <div className="shop-content__list">
        <PaginatedList items={productData} itemsPerPage={PRODUCTS_PER_PAGE} renderItems={items => items.map((product, index) => <Product key={index} name={product.name} price={product.price} img={product.img} href={product.href} />)} />
      </div>
    </div>
  );
}
