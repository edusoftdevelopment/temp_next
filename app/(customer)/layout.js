import { Suspense } from "react";
import { BasketProvider } from "../providers/customer/basket-provider";
import Header from "../lib/ui/customer/header";

export default function CustomerLayout({ children }) {
  return (
    <BasketProvider>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Header />
      </Suspense>
      <div className="p-4">{children}</div>
    </BasketProvider>
  );
}
