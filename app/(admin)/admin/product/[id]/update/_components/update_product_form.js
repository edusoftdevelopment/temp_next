"use client";

import AdminButton from "@/app/lib/ui/admin/admin_button";
import AdminFileInput from "@/app/lib/ui/admin/admin_file_input";
import AdminInput from "@/app/lib/ui/admin/admin_input";
import { updateProductAsync } from "@/app/lib/actions/admin/product";
import { useActionState } from "react";

export default function UpdateProductForm({ product }) {
  const initialState = {
    errors: {},
    message: null,
    formData: {
      itemCode: product.itemCode,
      itemName: product.itemName,
      brand: product.brand,
      itemImage: null,
    },
  };

  const updateProductWithId = updateProductAsync.bind(null, product.id);

  const [state, formAction, isPending] = useActionState(
    updateProductWithId,
    initialState
  );

  return (
    <form action={formAction}>
      <AdminInput
        label={"Item Code"}
        name={"itemCode"}
        defaultValue={state.formData?.itemCode}
        subText={state.errors?.itemCode}
      />
      <AdminInput
        label={"Item Name"}
        name={"itemName"}
        defaultValue={state.formData?.itemName}
        subText={state.errors?.itemName}
      />
      <AdminInput
        label={"Brand"}
        name={"brand"}
        defaultValue={state.formData?.brand}
        subText={state.errors?.brand}
      />
      <AdminFileInput name={"itemImage"} />
      <AdminButton type="submit" label={isPending ? "Loading" : "Update"} />

      {state?.message && (
        <p className="text-red-500 font-semibold">{state.message}</p>
      )}
    </form>
  );
}
