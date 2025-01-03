


// const data = async()=>{
//   const response = await fetch('https://fakestoreapi.com/products')


//   if (!response.ok) {
//     throw new Error("Failed to fetch products")
//   }
//   return response.json()
// };

// export const single = async(id:number)=>{
//     const item = await data();
//     const dis = await item.find((product:any)=> product.id === id)
//     return dis;
// }

// // Fetch all products
// export const data = async () => {
//     try {
//       const response = await fetch('https://fakestoreapi.com/products');
  
//       if (!response.ok) {
//         throw new Error("Failed to fetch products");
//       }
  
//       return await response.json();
//     } catch (error) {
//       console.error("Error fetching products:", error);
//       throw error; // Propagate the error to the caller
//     }
//   };
  
//   // Fetch a single product by ID
//   export const single = async (id: number) => {
//     try {
//       // Use a specific endpoint to fetch a single product
//       const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  
//       if (!response.ok) {
//         throw new Error(`Failed to fetch product with ID ${id}`);
//       }
  
//       return await response.json();
//     } catch (error) {
//       console.error(`Error fetching product with ID ${id}:`, error);
//       throw error; // Propagate the error to the caller
//     }
//   };
  