import { Star } from "lucide-react";
import { useDispatch } from "react-redux";
import { Link } from "react-router";
import { actionsCart } from "../../store/cartSlice";
import { Button } from "@/components/ui/button";
import { formatRupiah } from "../../utils/FormatRupiah";
import PrimaryButton from "../layout/PrimaryButton";

function ProductItem({ product }) {
  const dispatch = useDispatch();

  function handleAddItemToCart(product) {
    const payload = {
      id: product.id,
      image: product.image,
      name: product.name,
      price: product.price,
      quantity: 1,
    };
    dispatch(actionsCart.addItemToCart(payload));
  }
  return (
    <>
      <Link to={`/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-contain bg-zinc-100"
        />
      </Link>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="truncate text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-500">{formatRupiah(product.price)}</p>

        <PrimaryButton
          onClick={() => handleAddItemToCart(product)}
          className="mt-3 w-[120px] py-2 hover:bg-orange-700 transition"
        >
          Add to cart
        </PrimaryButton>

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
    </>
  );
}

export default ProductItem;
