"use client";

import { useBasketProvider } from "@/app/providers/customer/basket-provider";

const { default: Link } = require("next/link");

export default function BasketIcon() {
  const { getTotalBasketQuantity } = useBasketProvider();

  const totalQuantity = getTotalBasketQuantity();

  return (
    <Link href={"/basket"} className="p-2 text-primary underline">
      Basket {totalQuantity == 0 ? "" : totalQuantity}
    </Link>
  );
}
