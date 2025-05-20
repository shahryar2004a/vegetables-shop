import React from "react";
import Product from "./Product/Product";

export default function ProductList({ products }) {
  return (
    <>
      <section className="mt-20">
        <div className="container">
          <div className="grid sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
