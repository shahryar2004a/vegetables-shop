import React, { useState } from "react";
import { products } from "../../data";
import Topper from "../../components/Topper/Topper";
import NavBar from "../../components/NavBar/NavBar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Subscribe from "../../components/Subscribe/Subscribe";
import ProductList from "../../components/Products/ProductList";

export default function Shop() {
  const categories = [
    "همه محصولات",
    "میوه‌ها",
    "سبزیجات",
    "آب‌میوه‌ها",
    "میوه‌های خشک",
  ];
  const [activeCategory, setActiveCategory] = useState("همه محصولات");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const filteredProducts =
    activeCategory === "همه محصولات"
      ? products
      : products.filter((product) => product.category === activeCategory);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;

  const selectedProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );
  return (
    <>
      <Topper />
      <NavBar />
      <Header title="محصولات" />

      <div className="tabs p-4 grid grid-cols-1 md:flex md:justify-center space-x-4 my-20">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => {
              setActiveCategory(category);
              setCurrentPage(1);
            }}
            className={`tab w-full md:w-max md:px-4 py-2 md:mx-4 rounded ${
              activeCategory === category
                ? "bg-[#82ae46] text-white"
                : "dark:bg-gray-200 text-gray-500"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <ProductList products={selectedProducts} />

      <div className="pagination flex justify-center gap-x-4 mb-20">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            className={`page-number px-4 py-1 rounded ${
              currentPage === index + 1
                ? "bg-[#82ae46] text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>

      <Subscribe />
      <Footer />
    </>
  );
}
