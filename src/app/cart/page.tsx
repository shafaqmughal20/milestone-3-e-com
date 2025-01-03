'use client';

import React from 'react';
import { useCart } from '@/app/context/cartcontext';
import Link from 'next/link';
import Image from 'next/image';

const CartPage = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg">Your cart is empty!</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      <div className="space-y-4">
        {cart.map((product) => (
          <div key={product.id} className="flex items-center justify-between p-4 border-b">
            <Image
              src={product.image}
              alt={product.title}
              className="w-20 h-20 object-cover rounded-md"
            />
            <div className="flex-1 ml-4">
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <p className="text-gray-600">{product.description}</p>
              <p className="text-gray-800 font-bold">Price: ${product.price}</p>
            </div>
            <button
              onClick={() => removeFromCart(product.id)}
              className="px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-4 flex justify-between items-center">
        <button
          onClick={clearCart}
          className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition"
        >
          Clear Cart
        </button>
        <Link href="/checkout">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
            Proceed to Checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CartPage;
