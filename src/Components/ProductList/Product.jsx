import ProductCard from "./ProductCard";
import "./shopItems.css";

const Product = ({ products, error, loading, onBuy, onAddToCart }) => {
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
              onBuy={() => onBuy(item)}
              onAddToCart={() => onAddToCart(item)}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Product;
