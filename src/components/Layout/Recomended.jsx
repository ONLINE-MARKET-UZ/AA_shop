import React, { useState, useEffect } from "react";
import productApi from "../../service/procuts";
import MultiCard from "./../UI/Cards/MultiCard";

const Recomended = () => {
  const [product, setProduct] = useState([]);
  function Products() {
    productApi
      .getProduct()
      .then((res) => {
        if (res.status === 200) {
          setProduct(res.data);
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  useEffect(() => {
    Products();
  }, []);

  return (
    <div className="flex gap-[20px] items-center flex-wrap mx-[10px]">
      {product.length &&
        product.map((e) => {
          return (
            <>
              <MultiCard image={e.image} price={e.price} title={e.title} />
            </>
          );
        })}
    </div>
  );
};

export default Recomended;
