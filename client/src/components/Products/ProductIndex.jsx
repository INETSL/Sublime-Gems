import React from "react";
import ProductCard from "./ProductCard";
import ProductHero from "./ProductHero";
import ProductFilters from "./ProductFilters";

export default function ProductIndex() {
  return (
    <>
      <ProductHero />
      <ProductFilters />
      <div className="px-5 md:px-[2rem]">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </>
  );
}
