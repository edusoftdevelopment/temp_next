"use client";

import { useBasketProvider } from "@/app/providers/customer/basket-provider";
import { useRef } from "react";

export default function BasketActions({ product }) {
  const quantityRef = useRef();
  const { addItemToBasket } = useBasketProvider();

  return (
    <div className="flex items-center gap-2">
      <input
        className="border-primary rounded-sm border-2"
        ref={quantityRef}
        type="number"
        min={1}
        defaultValue={1}
      />
      <button
        type="button"
        onClick={() => addItemToBasket(product, quantityRef.current.value)}
      >
        Add To Basket
      </button>
    </div>
  );
}
