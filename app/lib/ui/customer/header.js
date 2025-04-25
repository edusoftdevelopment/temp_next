"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { useRef } from "react";

const DynamicBasket = dynamic(() => import("./basket/basket_icon"), {
  ssr: false,
});

export default function Header() {
  return (
    <div>
      <div className="flex items-center justify-between p-2">
        <div className="text-2xl font-bold">Logo</div>
        <HeaderSearch />
      </div>
      <LinkSection />
    </div>
  );
}

const HeaderSearch = () => {
  const articleRef = useRef();
  const searchParams = useSearchParams();

  const { replace } = useRouter();

  async function handleSearch() {
    const article = articleRef.current.value;

    const params = new URLSearchParams(searchParams);

    if (article) {
      params.set("article", article);
    } else {
      params.delete("article");
    }

    replace(`/search?${params.toString()}`);
  }

  return (
    <div className="flex items-center">
      <input
        ref={articleRef}
        id="artilce_search"
        name="artilce_search"
        type="text"
        placeholder="Search..."
        className="p-1 text-lg w-52 border border-gray-300 rounded"
        defaultValue={searchParams.get("article") || ""}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
      />
      <button
        onClick={handleSearch}
        type="button"
        className="p-2 bg-primary text-primary-text"
      >
        Search
      </button>

      <DynamicBasket />
    </div>
  );
};

const LinkSection = () => {
  const links = [
    {
      url: "/product",
      title: "Products",
    },
    {
      url: "/brands",
      title: "Brands",
    },
  ];

  return (
    <div className="flex gap-4 p-4">
      {links.map((link) => (
        <Link
          key={link.url}
          href={link.url}
          className="text-blue-500 hover:underline"
        >
          {link.title}
        </Link>
      ))}
    </div>
  );
};
