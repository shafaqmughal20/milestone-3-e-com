import Products from "../components/Products";

const fetchProducts = async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  
  return response.json();
};

export default async function Home() {
  const products = await fetchProducts();

  return (
    <main>
      <Products products={products} />
    </main>
  );
}
