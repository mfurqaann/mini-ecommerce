import { useEffect, useState } from "react";
import { useParams } from "react-router";

function DetailProduct() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function getProductById(id) {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();

        if (!response.ok) {
          throw new Error("Error server");
        }

        const newData = {
          id: data.id,
          image: data.image,
          name: data.title,
          price: data.price * 16000,
          description: data.description,
        };
        setProduct(newData);
      } catch (error) {
        console.error(error);
      }
    }

    getProductById(id);
  }, []);

  return (
    <div className="container mx-auto px-6 py-12">
      {product && (
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex items-center justify-center border rounded-xl p-6 bg-white">
            <img
              src={product.image}
              alt="Stylish T-Shirt"
              className="object-contain h-96 w-full"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-3">
              {product.name}
            </h1>
            <p className="text-xl text-blue-600 font-semibold mb-4">
              Rp {product.price.toLocaleString("id-ID")}
            </p>

            <p className="text-gray-600 mb-6 leading-relaxed">
              {product.description}
            </p>

            <div className="flex items-center gap-4 mb-6">
              <button className="px-3 py-1 border rounded-md text-gray-700 hover:bg-gray-100">
                -
              </button>
              <span className="px-4">1</span>
              <button className="px-3 py-1 border rounded-md text-gray-700 hover:bg-gray-100">
                +
              </button>
            </div>

            <button className="w-full md:w-[150px] bg-orange-600 text-white py-3 rounded-lg font-medium hover:bg-orange-700 transition">
              Add to Cart
            </button>

            <div className="mt-6 text-sm text-gray-500">
              <p>Material: 100% Cotton</p>
              <p>Available Sizes: S, M, L, XL</p>
              <p>Color: Dark Gray</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DetailProduct;
