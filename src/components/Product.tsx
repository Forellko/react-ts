import React, { useState } from 'react';
import { IProduct } from '../models';
interface ProductProps {
  product: IProduct;
}

export default function Product({ product }: ProductProps) {
  const [isOpenDescription, setIsOpenDescription] = useState(false);
  const toggleDesciption = () => setIsOpenDescription((prev) => !prev);

  return (
    <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
      <img
        src={product.image}
        className="w-1/6 my-[25px]"
        alt={product.title}
      />
      <p>{product.title}</p>
      <span className="font-bold my-[25px]">{product.price}</span>
      <button
        onClick={toggleDesciption}
        className={`h-[50px] w-[200px] my-[25px] ${
          isOpenDescription ? 'bg-slate-200' : 'bg-slate-300'
        } `}
      >
        {!isOpenDescription && 'Show details'}
        {isOpenDescription && 'Hide'}
      </button>
      {isOpenDescription && <p>{product.description}</p>}
    </div>
  );
}
