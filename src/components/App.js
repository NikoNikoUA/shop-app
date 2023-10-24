import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout';

const About = lazy(() => import('../Pages/About'));
const Home = lazy(() => import('../Pages/Home'));
const ProductDetails = lazy(() => import('../Pages/ProductDetails'));
const Products = lazy(() => import('../Pages/Products'));
const Mission = lazy(() => import('./Mission'));
const Team = lazy(() => import('./Team'));
const Reviews = lazy(() => import('./Reviews'));
const NotFound = lazy(() => import('../components/NotFound'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />}>
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
