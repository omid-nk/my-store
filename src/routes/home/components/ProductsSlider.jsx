import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../../api/products";

function ProductsSlider() {
  const {
    data: products,
    isLoading,
    error,
  } = useQuery({ queryKey: ["products"], queryFn: getProducts });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Sorry, there was an error</p>;

  return (
    <div>
      {products.map((p) => (
        <p key={p.id}>{p.title}</p>
      ))}
    </div>
  );
}

export default ProductsSlider;
