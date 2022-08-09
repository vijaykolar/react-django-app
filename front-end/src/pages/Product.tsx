import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { fetchProducts } from "../slice/productsSlice";
import { fetchProduct } from "../slice/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { ProductsTypes } from "./Home";

type Product = {
  name: string;
  image: string;
  description: string;
  price: number;
  countInStock: number;
};

interface Loading {
  loading: boolean;
}

type Error = {
  error: string;
};

function Product() {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // @ts-ignore
  const { product } = useSelector<Product>((state) => state.product);
  const loading = useSelector<any>((state) => state.product.loading);
  const error = useSelector<any>((state) => state.product.error);

  const [value, setValue] = useState<number>(1);

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchProduct(params.id));
  }, []);

  const addItemToCart = () => {
    console.log(params.id);
    navigate(`/cart/${params.id}?qty=${value}`);
  };
  // const product = products.find((prod) => prod._id === params.id);

  // useEffect(() => {
  //   async function getProduct() {
  //     try {
  //       const {data} = await axios.get(`/api/products/${params.id}`)
  //       setLoading(false);
  //       setProduct(data);
  //     }
  //     catch (err) {
  //       setError("something went wrong");
  //       setLoading(false)
  //     }
  //   }
  //
  //   getProduct()
  // }, [params.id]);

  if (loading) return <p>loading</p>;
  if (error) return <p>q</p>;
  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
  return (
    <section className="mt-3">
      <div className="container mx-auto">
        <div className="grid gap-4 grid-cols-2">
          <div className="border p-2 rounded">
            <img
              className="max-h-72 mx-auto"
              src={product?.image}
              alt={product?.name}
            />
          </div>
          <div className="grid gap-4 grid-cols-2">
            <div>
              <h3>{product?.name}</h3>

              <p className="text-sm text-gray-500">{product?.description}</p>
            </div>
            <div className="border rounded p-2">
              <div className="border-gray-300 border-b border-solid py-2 mb-4 flex justify-between">
                <span className="capitalize">price</span>
                <span>${product?.price}</span>
                <div>
                  <span
                    className={
                      product?.countInStock
                        ? "bg-green-500 text-xs text-white p-1 rounded"
                        : "bg-red-500 text-xs text-white p-1 rounded"
                    }
                  >
                    {product?.countInStock ? "In Stock" : "Out of stock"}
                  </span>
                </div>
              </div>

              {product.countInStock > 0 && (
                <div className="flex justify-between gap-2 border-b border-gray-300 mb-3 pb-3">
                  <div>
                    <p className="text-gray-700 text-sm">Qty:</p>
                  </div>

                  <select
                    value={value}
                    onChange={(e) => setValue(+e.target.value)}
                    className="p-2"
                    name=""
                    id=""
                  >
                    {
                      // [...Array(product.countInStock).keys()]
                      Array.from(Array(product.countInStock).keys()).map(
                        (el) => (
                          <option key={el + 1} value={el + 1}>
                            {el + 1}
                          </option>
                        )
                      )
                    }
                  </select>
                </div>
              )}

              <button
                disabled={product?.countInStock === 0}
                onClick={addItemToCart}
                className={`${
                  product?.countInStock === 0
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-blue-700 cursor-pointer"
                } text-sm py-2 px-4 w-full text-white rounded`}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Product;
