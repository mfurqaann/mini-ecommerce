import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionsCart } from "../store/cartSlice";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { formatRupiah } from "../utils/FormatRupiah";
import PrimaryButton from "../components/layout/PrimaryButton";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const subTotal = useSelector((state) => state.cart.totalPrice);
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  function handleAddQuantity(product) {
    const payload = {
      id: product.id,
      price: product.price / product.quantity,
      quantity: quantity,
    };
    dispatch(actionsCart.incrementItemCart(payload));
    setQuantity((prev) => prev + 1);
  }

  function handleDecreaseQuantity(product) {
    const payload = {
      price: product.price / product.quantity,
      id: product.id,
      quantity,
    };
    dispatch(actionsCart.decrementItemCart(payload));
  }

  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          {cartItems &&
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border rounded-lg p-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-contain rounded"
                  />
                  <div>
                    <h2 className="font-semibold text-lg">{item.name}</h2>
                    <p className="font-bold mt-2">{formatRupiah(item.price)}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <button
                    onClick={() => handleDecreaseQuantity(item)}
                    className="px-3 py-1 border cursor-pointer rounded-md text-gray-700 hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="px-4">{item.quantity}</span>
                  <button
                    onClick={() => handleAddQuantity(item)}
                    className="px-3 py-1 border cursor-pointer rounded-md text-gray-700 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
        </div>

        <div className="border rounded-lg p-6 h-fit">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="flex justify-between mb-6">
            <span className="text-gray-700 font-medium">Subtotal</span>
            <span className="font-bold">{formatRupiah(subTotal)}</span>
          </div>
          <Link to="/checkout">
            <PrimaryButton className="w-full py-3">Checkout</PrimaryButton>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
