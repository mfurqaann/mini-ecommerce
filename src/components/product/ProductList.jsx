import { memo } from "react";
import ProductItem from "./ProductItem";

function ProductList({ products, ...props }) {
  return (
    <div {...props}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition flex flex-col"
          >
            <ProductItem product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default memo(ProductList);
