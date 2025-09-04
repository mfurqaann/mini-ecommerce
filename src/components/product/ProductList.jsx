import { Star } from "lucide-react";
import { Link } from "react-router";

function ProductList({ products, ...props }) {
  return (
    <div {...props}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link to={`/${product.id}`}>
            <div
              key={product.id}
              className="border rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition flex flex-col"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-contain bg-zinc-100"
              />
              <div className="p-4 flex flex-col flex-1">
                <h3 className="truncate text-lg font-semibold">
                  {product.name}
                </h3>
                <p className="text-gray-500">
                  Rp {product.price.toLocaleString("id-ID")}
                </p>

                <button className="mt-3 w-[120px] bg-orange-600 text-white py-2 rounded-md hover:bg-orange-700 transition cursor-pointer">
                  Add to Cart
                </button>

                <div className="flex items-center mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`text-lg ${
                        i < Math.round(product.rate)
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300 fill-gray-300"
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-600 mt-3">
                    {product.rate.toFixed(1)}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
