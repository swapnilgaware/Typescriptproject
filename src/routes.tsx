import { createBrowserRouter } from 'react-router-dom';
import type { LoaderFunctionArgs } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';

// Lazy components
const App = lazy(() => import('./App'));
// Import the product component lazily. The file name is capitalized
// to match the component definition.
const Product = lazy(() => import('./Product'));

// Loader
const productLoader = async ({ params }: LoaderFunctionArgs) => {
  const res = await fetch(`/api/products/${params.pid}`);
  if (!res.ok) throw new Error('Product not found');
  return await res.json();
};

// Fix JSX.Element error
const withSuspense = (element: React.ReactElement) => (
  <Suspense fallback={<div>Loading...</div>}>{element}</Suspense>
);

// Routes
export const router = createBrowserRouter([
  {
    path: '/',
    element: withSuspense(<App />),
  },
  {
    path: '/products/:pid',
    element: withSuspense(<Product />),
    loader: productLoader,
  },
]);
