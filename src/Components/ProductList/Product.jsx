import ProductCard from "./ProductCard";
import "./Products.css";

const Product = ({ products, error, loading }) => {
  if (loading) {
    return <h3>Loading...</h3>;
  }
  if (error) {
    return <h3>Error: {error.message}</h3>;
  }
  return (
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
  );
};

export default Product;
