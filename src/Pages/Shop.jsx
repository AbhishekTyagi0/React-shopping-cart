import Product from "../Components/ProductList/Product";

const Shop = ({ products, error, loading, onBuy, onAddToCart }) => {
  return (
    <>
      <div className="shop-container">
        <Product
          products={products}
          error={error}
          loading={loading}
          onBuy={onBuy}
          onAddToCart={onAddToCart}
        />
      </div>
    </>
  );
};

export default Shop;
