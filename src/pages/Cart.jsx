import React from "react";
import { useSelector } from "react-redux";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          {cartItems &&
            cartItems.map((item) => (
              <div className="flex items-center justify-between border rounded-lg p-4">
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-contain rounded"
                  />
                  <div>
                    <h2 className="font-semibold text-lg">{item.name}</h2>
                    <p className="font-bold mt-2">
                      Rp {item.price.toLocaleString("id-ID")}
                    </p>
                  </div>
                </div>
                <button className="text-blue-600 hover:underline">
                  Remove
                </button>
              </div>
            ))}
        </div>

        <div className="border rounded-lg p-6 h-fit">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="flex justify-between mb-6">
            <span className="text-gray-700 font-medium">Subtotal</span>
            <span className="font-bold">$145.00</span>
          </div>
          <button className="w-full bg-black text-white py-3 rounded-lg bg-orange-600 hover:bg-orange-700">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
