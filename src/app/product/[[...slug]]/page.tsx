import { error } from "console";
import HeaderMenu from "@/component/util/header_menu";
import Pagination from "@/component/util/pagination";

type ProductPageProps = { params: { slug: string[] } };

async function getData() {
  const res = await fetch("https://api.jikan.moe/v4/top/anime");

  if (!res) {
    throw error;
  }

  return res.json();
}

export default async function ProductPage(props: ProductPageProps) {
  const { params } = props;
  const products = await getData();
  return (
    <>
      <HeaderMenu />
      <div className="grid grid-cols-3 place-items-center">
        {/* <h1>{params.slug ? "Detail Product" : "Product"}</h1> */}
        {products.length > 0 &&
          products.map((product: any) => (
            <div
              key={product.id}
              className="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg"
            >
              <img
                className="h-48 w-full object-cover p-2"
                src={product.image}
                alt="Product Image"
              />
              <div className="p-4">
                <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900 truncate">
                  {product.title}
                </h2>
                <p className="mb-2 text-base dark:text-gray-300 text-gray-700 truncate">
                  {product.description}
                </p>
                <div className="flex items-center">
                  <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
                    ${product.price}
                  </p>
                  {/* <p className="text-base  font-medium text-gray-500 line-through dark:text-gray-300">
                    ${product.price}
                  </p> */}
                </div>
              </div>
            </div>
          ))}
        {params.slug && (
          <>
            <p>Category = {params.slug[0]}</p>
            <p>Gender = {params.slug[1]}</p>
            <p>Id = {params.slug[2]}</p>
          </>
        )}
      </div>
      <Pagination />
    </>
  );
}
