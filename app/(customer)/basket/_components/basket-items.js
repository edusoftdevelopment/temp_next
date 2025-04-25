"use client";

import { useBasketProvider } from "@/app/providers/customer/basket-provider";
import Image from "next/image";

export default function BasketItems() {
  const { items, addItemToBasket, removeItemFromBasket } = useBasketProvider();

  const renderBasketItems = () => {
    return Array.from(items.entries()).map((basketItem) => {
      const { item, quantity } = basketItem[1];

      return (
        <tr key={item.id}>
          <td className="border border-gray-300 px-4 py-2">
            <Image
              src={item.thumbnail}
              alt={item.description}
              width={100}
              height={100}
              placeholder="blur"
              blurDataURL="/file.svg"
            />
          </td>
          <td className="border border-gray-300 px-4 py-2 text-left">
            {item.id}
          </td>
          <td className="border border-gray-300 px-4 py-2 text-left">
            {item.title}
          </td>
          <td className="border border-gray-300 px-4 py-2 text-left">
            {item.description.substring(0, 50)}
          </td>
          <td className="border border-gray-300 px-4 py-2">
            <div className="flex items-center gap-2 w-full justify-center">
              <button type="button" onClick={() => removeItemFromBasket(item)}>
                -
              </button>
              <span>{quantity}</span>
              <button type="button" onClick={() => addItemToBasket(item, 1)}>
                +
              </button>
            </div>
          </td>
        </tr>
      );
    });
  };

  return (
    <table className="min-w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 px-4 py-2 text-left"></th>
          <th className="border border-gray-300 px-4 py-2 text-left">
            Part No
          </th>
          <th className="border border-gray-300 px-4 py-2 text-left">Title</th>
          <th className="border border-gray-300 px-4 py-2 text-left">
            Description
          </th>
          <th className="border border-gray-300 px-4 py-2 text-left"></th>
        </tr>
      </thead>
      <tbody>{renderBasketItems()}</tbody>
    </table>
  );
}
