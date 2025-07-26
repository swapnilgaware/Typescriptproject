import { useLoaderData } from 'react-router-dom';

interface ProductData {
  id: string;
  name: string;
  [key: string]: unknown;
}

export default function Product() {
  const product = useLoaderData() as ProductData;
  return (
    <div>
      <h2>Product: {product.name}</h2>
      <pre>{JSON.stringify(product, null, 2)}</pre>
    </div>
  );
}
