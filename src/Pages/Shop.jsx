import Product from "../Components/ProductList/Product";

const Shop = ({ products, error, loading }) => {
  return (
    <div className="shop-container">
      <Product products={products} error={error} loading={loading} />
    </div>
  );
};

export default Shop;
