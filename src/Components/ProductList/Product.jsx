import ProductCard from "./ProductCard";
import "./Products.css";

const Product = ({ products, error, loading }) => {
  return (
    <>
      {loading && <h3>Loading...</h3>}
      {error && <h3>Error: {error.message}</h3>}
      {!loading && !error && (
        <div className="card-container">
          {products.map((item) => (
            <ProductCard
              key={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              rating={item.rating.rate}
              review={item.rating.count}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Product;
