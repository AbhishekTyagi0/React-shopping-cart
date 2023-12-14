import Product from "../Components/ProductList/Product";

const Shop = ({ products, error, loading }) => {
  return (
    <>
      <div>
        <p>Product &gt; Categories &gt; random</p>
      </div>
      <div className="shop-container">
        <Product products={products} error={error} loading={loading} />
      </div>
    </>
  );
};

export default Shop;
