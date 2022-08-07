import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { products } from "../_mockAPI/products";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../slice/productsSlice";

export interface ProductsTypes {
  _id: number;
  name: string;
  brand?: string;
  category?: string;
  countInStock?: number;
  createdAt?: string;
  description: string;
  numReviews?: number;
  price?: string;
  rating?: string;
  user?: 1;
}

function Home() {
  // const [loading, setLoading] = useState(false);
  // const [products, setProducts] = useState<any>([]);
  const dispatch = useDispatch();
  // @ts-ignore
  const { products } = useSelector<ProductsTypes[]>((state) => state.products);
  const loading = useSelector<any>((state) => state.products.loading);
  const error = useSelector<any>((state) => state.products.error);
  useEffect(() => {
    // @ts-ignore
    dispatch(fetchProducts());
  }, []);

  // @ts-ignore
  return (
    <section className="mt-3">
      <div className="container mx-auto">
        {loading ? (
          <p>loading</p>
        ) : error ? (
          <p>d</p>
        ) : (
          <div className="grid gap-4 grid-cols-4">
            {products.map((product: any) => (
              <div key={product._id} className="border rounded p-2">
                <Link to={`/products/${product._id}`}>
                  <div>
                    <img
                      className="max-h-48 mx-auto mb-5"
                      src={product.image}
                      alt={product.name}
                    />
                  </div>
                  <h3 className="text-lg">{product.name}</h3>
                  <p className="text-sm text-gray-500 ">
                    {product.description}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Home;
