"use client";

const { createContext, useState, use, useEffect } = require("react");

const basketDefaultState = {
  items: new Map(),
  addItemToBasket: (item, quantity) => {},
  removeItemFromBasket: (item) => {},
};

const BasketContext = createContext(basketDefaultState);

export const BasketProvider = ({ children }) => {
  const [items, setItems] = useState(new Map());

  useEffect(() => {
    const basketItems =
      JSON.parse(localStorage.getItem("basket") ?? "[]") || [];
    setItems(new Map(basketItems));
  }, []);

  const addItemToBasket = (item, quantity) => {
    const itemKey = item.id;

    setItems((prevBasket) => {
      const updatedBasket = new Map(prevBasket);
      const updatedQuantity =
        Number(updatedBasket.get(itemKey)?.quantity || 0) + Number(quantity);
      updatedBasket.set(itemKey, { item, quantity: updatedQuantity });

      localStorage.setItem("basket", JSON.stringify([...updatedBasket]));

      return updatedBasket;
    });
  };

  const removeItemFromBasket = (item) => {
    const itemKey = item.id;

    setItems((prevBasket) => {
      const updatedBasket = new Map(prevBasket);
      const quantity = (updatedBasket.get(itemKey)?.quantity || 0) - 1;
      if (quantity > 0) {
        updatedBasket.set(itemKey, { item, quantity });
      } else {
        updatedBasket.delete(itemKey);
      }

      localStorage.setItem("basket", JSON.stringify([...updatedBasket]));
      return updatedBasket;
    });
  };

  return (
    <BasketContext.Provider
      value={{ items, addItemToBasket, removeItemFromBasket }}
    >
      {children}
    </BasketContext.Provider>
  );
};

export const useBasketProvider = () => {
  const { items, addItemToBasket, removeItemFromBasket } = use(BasketContext);

  const getTotalBasketQuantity = () => {
    return Array.from(items).reduce((qty, item) => qty + item[1].quantity, 0);
  };

  return {
    items,
    addItemToBasket,
    removeItemFromBasket,
    getTotalBasketQuantity,
  };
};
