import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { products } from "../_mockAPI/products";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../slice/productsSlice";

function Home() {
  // const [loading, setLoading] = useState(false);
  // const [products, setProducts] = useState<any>([]);
  const dispatch = useDispatch();
  const products = useSelector<any>((state) => state.products.products);
  const loading = useSelector<any>((state) => state.products.loading);
  useEffect(() => {
    // async function getProducts() {
    //   try {
    //     setLoading(true);
    //
    //     const { data } = await axios.get("/api/products");
    //     // setProducts(data);
    //     setLoading(false);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // }
    // getProducts();
    // @ts-ignore
    dispatch(fetchProducts());
  }, []);
  console.log(loading);
  console.log(products);
  if (loading)
    return (
      <div className="bg-indigo-5001">
        <div className="animate-pulse flex space-x-4 w-4/12 mt-10 mx-auto">
          <div className="rounded-full bg-slate-200 h-10 w-10"></div>
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 bg-slate-200 rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                <div className="h-2 bg-slate-200 rounded col-span-1"></div>
              </div>
              <div className="h-2 bg-slate-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );

  return (
    <section className="mt-3">
      <div className="container mx-auto">
        {/*<div className="grid gap-4 grid-cols-4">*/}
        {/*  {products.map((product: any) => (*/}
        {/*    <div key={product._id} className="border rounded p-2">*/}
        {/*      <Link to={`/products/${product._id}`}>*/}
        {/*        <div>*/}
        {/*          <img*/}
        {/*            className="max-h-48 mx-auto mb-5"*/}
        {/*            src={product.image}*/}
        {/*            alt={product.name}*/}
        {/*          />*/}
        {/*        </div>*/}
        {/*        <h3 className="text-lg">{product.name}</h3>*/}
        {/*        <p className="text-sm text-gray-500 ">{product.description}</p>*/}
        {/*      </Link>*/}
        {/*    </div>*/}
        {/*  ))}*/}
        {/*</div>*/}
      </div>
    </section>
  );
}

export default Home;
