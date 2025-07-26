import { createBrowserRouter } from 'react-router-dom';
import type { LoaderFunctionArgs } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';

const App = lazy(() => import('./App'));
const Dashboard = lazy(() => import('./Dashboard'));

const stockLoader = async ({ params }: LoaderFunctionArgs) => {
  const res = await fetch(`/api/stocks/${params.symbol}`);
  if (!res.ok) throw new Error('Stock not found');
  return await res.json();
};

const withSuspense = (element: React.ReactElement) => (
  <Suspense fallback={<div>Loading...</div>}>{element}</Suspense>
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: withSuspense(<App />),
  },
  {
    path: '/dashboard/:symbol',
    element: withSuspense(<Dashboard />),
    loader: stockLoader,
  },
]);
