import React from "react";
import UpdateProductForm from "./_components/update_product_form";
import { getProductById } from "@/app/lib/data/customer/products";
import { notFound } from "next/navigation";

export default async function UpdateProduct(props) {
  const params = await props.params;
  const { id } = params;

  const product = await getProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <div className="flex items-center justify-center w-full p-4">
      <UpdateProductForm
        product={{
          id,
          itemCode: product.id,
          itemName: product.title,
          brand: product.brand,
        }}
      />
    </div>
  );
}
