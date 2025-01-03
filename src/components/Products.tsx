// "use client"

// import React from 'react'
// import Link from 'next/link';

// type ProductProps = {
//   products: any[]  // You can make this more specific based on your product structure
// }

// interface Product  {
//   id: number;
//   title: string;
//   price: number;
//   description: string;
//   image: string;
// }

// export default function Products({ products }: ProductProps) {
//   console.log(products)
//   return (
//     <div className="flex flex-wrap gap-6 p-4 items-center justify-center">
//     {products.map((product: Product) => (
//       <Link 
//         href={{pathname:"/singleproduct",query:{id:product.id}}} 
//         key={product.id} 
//         className="flex flex-col bg-white shadow-md rounded-lg p-4 w-64 hover:shadow-lg transition-shadow"
//       >
//         <img 
//           src={product.image} 
//           alt={product.title} 
//           className="w-full h-40 object-cover rounded-md mb-4" 
//         />
//         <h2 className="text-lg font-semibold text-gray-800 mb-2">{product.title}</h2>
//         <p className="text-gray-600 text-sm mb-4">{product.description}</p>
//         <p className="text-gray-800 font-bold">Price: ${product.price}</p>
//         <button className="px-2 py-0 text-sm ml-32">
//           Add to Cart
//         </button>
//         <button className="px-2 py-0 text-sm mr-32">
//           View Details
//         </button>
//       </Link>
//     ))}
//   </div>
  
//   )
// }
 
// 'use client';

// import React, { useState } from 'react';

// interface Product {
//   id: number;
//   title: string;
//   price: number;
//   description: string;
//   image: string;
// }

// interface ProductProps {
//   products: Product[];
// }

// const ProductModal = ({ product, onClose }: { product: Product; onClose: () => void }) => (
//   <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//     <div className="bg-white p-6 rounded-lg shadow-lg w-96">
//       <button
//         onClick={onClose}
//         className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
//       >
//         ✖
//       </button>
//       <img
//         src={product.image}
//         alt={product.title}
//         className="w-full h-64 object-cover rounded-md mb-4"
//       />
//       <h1 className="text-2xl font-bold text-gray-800 mb-2">{product.title}</h1>
//       <p className="text-gray-600 text-sm mb-4">{product.description}</p>
//       <p className="text-gray-800 font-bold mb-4">Price: ${product.price}</p>
//       <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
//         Add to Cart
//       </button>
//     </div>
//   </div>
// );

// export default function Products({ products }: ProductProps) {
//   const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

//   const openModal = (product: Product) => {
//     setSelectedProduct(product);
//   };

//   const closeModal = () => {
//     setSelectedProduct(null);
//   };

//   return (
//     <div className="flex flex-wrap gap-6 p-4 items-center justify-center">
//       {products.map((product) => (
//         <div
//           key={product.id}
//           onClick={() => openModal(product)}
//           className="flex flex-col bg-white shadow-md rounded-lg p-4 w-64 hover:shadow-lg transition-shadow cursor-pointer"
//         >
//           <img
//             src={product.image}
//             alt={product.title}
//             className="w-full h-40 object-cover rounded-md mb-4"
//           />
//           <h2 className="text-lg font-semibold text-gray-800 mb-2">{product.title}</h2>
//           <p className="text-gray-600 text-sm mb-4">{product.description}</p>
//           <p className="text-gray-800 font-bold">Price: ${product.price}</p>
//         </div>
//       ))}

//       {selectedProduct && (
//         <ProductModal product={selectedProduct} onClose={closeModal} />
//       )}
//     </div>
//   );
// }

// 'use client';

// import React, { useState, useEffect } from 'react';

// interface Product {
//   id: number;
//   title: string;
//   price: number;
//   description: string;
//   image: string;
// }

// interface ProductProps {
//   products: Product[];
// }

// const ProductModal = ({
//   product,
//   onClose,
// }: {
//   product: Product;
//   onClose: () => void;
// }) => {
//   // Close modal on Escape key press
//   useEffect(() => {
//     const handleKeyDown = (event: KeyboardEvent) => {
//       if (event.key === 'Escape') {
//         onClose();
//       }
//     };
//     window.addEventListener('keydown', handleKeyDown);
//     return () => {
//       window.removeEventListener('keydown', handleKeyDown);
//     };
//   }, [onClose]);

//   return (
//     <div
//       className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
//       onClick={onClose} // Close modal on backdrop click
//     >
//       <div
//         className="bg-white p-6 rounded-lg shadow-lg w-96 relative"
//         onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking inside
//       >
//         <button
//           onClick={onClose}
//           className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
//         >
//           ✖
//         </button>
//         <img
//           src={product.image}
//           alt={product.title}
//           className="w-full h-64 object-cover rounded-md mb-4"
//         />
//         <h1 className="text-2xl font-bold text-gray-800 mb-2">{product.title}</h1>
//         <p className="text-gray-600 text-sm mb-4">{product.description}</p>
//         <p className="text-gray-800 font-bold mb-4">Price: ${product.price}</p>
//         <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// };

// export default function Products({ products }: ProductProps) {
//   const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

//   const openModal = (product: Product) => {
//     setSelectedProduct(product);
//     document.body.style.overflow = 'hidden'; // Disable scrolling when modal is open
//   };

//   const closeModal = () => {
//     setSelectedProduct(null);
//     document.body.style.overflow = 'auto'; // Re-enable scrolling when modal is closed
//   };

//   return (
//     <div className="flex flex-wrap gap-6 p-4 items-center justify-center">
//       {products.map((product) => (
//         <div
//           key={product.id}
//           onClick={() => openModal(product)}
//           className="flex flex-col bg-white shadow-md rounded-lg p-4 w-64 hover:shadow-lg transition-shadow cursor-pointer"
//         >
//           <img
//             src={product.image}
//             alt={product.title}
//             className="w-full h-40 object-cover rounded-md mb-4"
//           />
//           <h2 className="text-lg font-semibold text-gray-800 mb-2">
//             {product.title}
//           </h2>
//           <p className="text-gray-600 text-sm mb-4">{product.description}</p>
//           <p className="text-gray-800 font-bold">Price: ${product.price}</p>
//         </div>
//       ))}

//       {selectedProduct && (
//         <ProductModal product={selectedProduct} onClose={closeModal} />
//       )}
//     </div>
//   );
// }

// 'use client';

// import Link from 'next/link';
// import Image from 'next/image';
// import React, { useState, useEffect } from 'react';
// import { useCart } from '@/app/context/cartcontext' // Import Cart Context

// interface Product {
//   id: number;
//   title: string;
//   price: number;
//   description: string;
//   image: string;
// }

// interface ProductProps {
//   products: Product[];
// }

// const ProductModal = ({
//   product,
//   onClose,
// }: {
//   product: Product;
//   onClose: () => void;
// }) => {
//   // Close modal on Escape key press
//   useEffect(() => {
//     const handleKeyDown = (event: KeyboardEvent) => {
//       if (event.key === 'Escape') {
//         onClose();
//       }
//     };
//     window.addEventListener('keydown', handleKeyDown);
//     return () => {
//       window.removeEventListener('keydown', handleKeyDown);
//     };
//   }, [onClose]);

//   return (
//     <div
//       className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
//       onClick={onClose} // Close modal on backdrop click
//     >
//       <div
//         className="bg-white p-6 rounded-lg shadow-lg w-96 relative"
//         onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking inside
//       >
//         <button
//           onClick={onClose}
//           className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
//         >
//           ✖
//         </button>
//         <Image
//           src={product.image}
//           alt={product.title}
//           className="w-full h-64 object-cover rounded-md mb-4"
//         />
//         <h1 className="text-2xl font-bold text-gray-800 mb-2">{product.title}</h1>
//         <p className="text-gray-600 text-sm mb-4">{product.description}</p>
//         <p className="text-gray-800 font-bold mb-4">Price: ${product.price}</p>
//         <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// };

// export default function Products({ products }: ProductProps) {
//   const { addToCart } = useCart(); // Use the cart context

//   const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

//   const openModal = (product: Product) => {
//     setSelectedProduct(product);
//     document.body.style.overflow = 'hidden'; // Disable scrolling when modal is open
//   };

//   const closeModal = () => {
//     setSelectedProduct(null);
//     document.body.style.overflow = 'auto'; // Re-enable scrolling when modal is closed
//   };

//   return (
//     <div className="flex flex-wrap gap-6 p-4 items-center justify-center">
//       {products.map((product) => (
//         <div
//           key={product.id}
//           onClick={() => openModal(product)}
//           className="flex flex-col bg-white shadow-md rounded-lg p-4 w-64 hover:shadow-lg transition-shadow cursor-pointer"
//         >
//           <Image
//             src={product.image}
//             alt={product.title}
//             className="w-full h-40 object-cover rounded-md mb-4"
//           />
//           <h2 className="text-lg font-semibold text-gray-800 mb-2">
//             {product.title}
//           </h2>
//           <p className="text-gray-600 text-sm mb-4">{product.description}</p>
//           <p className="text-gray-800 font-bold">Price: ${product.price}</p>

//           <Link href="/cart"
//             className="px-4 py-2 bg-black text-white rounded-md hover:bg-blue-600 transition"
//           >
//             Add to Cart
//           </Link>
          
//         </div>
//       ))}

//       {selectedProduct && (
//         <ProductModal product={selectedProduct} onClose={closeModal} />
//       )}
//     </div>
//   );
// }


'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { useCart } from '@/app/context/cartcontext'; // Import Cart Context

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

interface ProductProps {
  products: Product[];
}

const ProductModal = ({
  product,
  onClose,
}: {
  product: Product;
  onClose: () => void;
}) => {
  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose} // Close modal on backdrop click
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg w-96 relative"
        onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking inside
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          ✖
        </button>
        <Image
          src={product.image}
          alt={product.title}
          width={384}
          height={256}
          className="w-full h-64 object-cover rounded-md mb-4"
        />
        <h1 className="text-2xl font-bold text-gray-800 mb-2">{product.title}</h1>
        <p className="text-gray-600 text-sm mb-4">{product.description}</p>
        <p className="text-gray-800 font-bold mb-4">Price: ${product.price}</p>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default function Products({ products }: ProductProps) {
  const { addToCart } = useCart(); // Use the cart context

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const openModal = (product: Product) => {
    setSelectedProduct(product);
    document.body.style.overflow = 'hidden'; // Disable scrolling when modal is open
  };

  const closeModal = () => {
    setSelectedProduct(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling when modal is closed
  };

  return (
    <div className="flex flex-wrap gap-6 p-4 items-center justify-center">
      {products.map((product) => (
        <div
          key={product.id}
          onClick={() => openModal(product)}
          className="flex flex-col bg-white shadow-md rounded-lg p-4 w-64 hover:shadow-lg transition-shadow cursor-pointer"
        >
          <Image
            src={product.image}
            alt={product.title}
            width={256}
            height={160}
            className="w-full h-40 object-cover rounded-md mb-4"
          />
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            {product.title}
          </h2>
          <p className="text-gray-600 text-sm mb-4">{product.description}</p>
          <p className="text-gray-800 font-bold">Price: ${product.price}</p>

          <Link
            href="/cart"
            className="px-4 py-2 bg-blue-300 text-white rounded-md hover:bg-blue-600 transition"
          >
            Add to Cart
          </Link>
        </div>
      ))}

      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={closeModal} />
      )}
    </div>
  );
}
