import { useEffect, useState } from "react";
import ProductFilter from "../components/product/ProductFilter";
import ProductList from "../components/product/ProductList";

function Home() {
  const [products, setProducts] = useState([]);
  const [categoriesFilter, setCategoriesFilter] = useState([]);
  const [rangePrice, setRangePrice] = useState(0);
  const [debouncePrice, setDebouncePrice] = useState(0);
  const [sortedBy, setSortedBy] = useState("name");
  const [orderBy, setOrderBy] = useState("asc");

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();

        if (!response.ok) {
          throw new Error("Error server");
        }
        const newData = data.map((d) => ({
          id: d.id,
          image: d.image,
          name: d.title,
          price: d.price * 16000,
          category: d.category,
          description: d.description,
          rate: d.rating.rate,
        }));

        setProducts(newData);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchProducts();
  }, []);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncePrice(rangePrice);
    }, 1000);

    return () => {
      clearTimeout(handler);
    };
  }, [rangePrice]);

  function handleCheckBoxFilter(field) {
    setCategoriesFilter((prev) =>
      prev.includes(field)
        ? prev.filter((cat) => cat !== field)
        : [...prev, field]
    );
  }

  function handleSlider(val) {
    setRangePrice(+val);
  }

  function handleSort(sortValue) {
    setSortedBy(sortValue);
  }

  function handleOrder(orderValue) {
    console.log(orderValue);
    setOrderBy(orderValue);
  }

  const filteredData = products
    .filter((product) => {
      const matchCategories =
        categoriesFilter.length === 0 ||
        categoriesFilter.includes(product.category);

      const matchPrice =
        debouncePrice > 0 ? product.price <= debouncePrice : true;

      return matchCategories && matchPrice;
    })
    .toSorted((a, b) => {
      switch (sortedBy) {
        case "name":
          if (orderBy === "asc") {
            return a.name.localeCompare(b.name);
          }
          return b.name.localeCompare(a.name);
        case "price":
          if (orderBy === "asc") {
            return a.price - b.price;
          }
          return b.price - a.price;
        case "rate":
          if (orderBy === "asc") {
            return a.rate - b.rate;
          }
          return b.rate - a.rate;
      }
    });

  const maxPrice = Math.max(...products.map((product) => product.price));

  return (
    <>
      <h1 className="text-3xl text-center mt-8 font-bold">Product List</h1>
      <div className="w-full">
        <div className="container grid grid-cols-1 md:grid-cols-4 gap-8 mx-auto px-6 py-3">
          <ProductFilter
            maxPrice={maxPrice}
            rangePrice={rangePrice}
            sortedBy={sortedBy}
            orderBy={orderBy}
            handleSlider={handleSlider}
            handleSort={handleSort}
            handleOrder={handleOrder}
            handleCheckBoxFilter={handleCheckBoxFilter}
          />
          <ProductList
            products={filteredData}
            className="md:col-span-3 max-w-6xl mx-auto px-4 py-8"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
