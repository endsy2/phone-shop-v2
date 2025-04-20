import React, { lazy } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { lazyLoad } from './utils/lazyLoad';  // Import your lazyLoad function

// Layouts
import RootLayout from './Pages/layout/RootLayout';
import AuthLayout from './Pages/layout/AuthLayout';

// Lazy-loaded pages with a delay
const Home = lazyLoad(() => import('./Pages/home/Home'));
const ProductDetail = lazyLoad(() => import('./Pages/home/ProductDetail'));
const Category = lazyLoad(() => import('./Pages/home/Category'));
const Compare = lazyLoad(() => import('./Pages/home/Compare'));
const AddToFavorite = lazyLoad(() => import('./Pages/home/Add_to_favorite'));
const AddToCart = lazyLoad(() => import('./Pages/home/AddToCart'));
const Payment = lazyLoad(() => import('./Pages/home/Payment'));
const UserProfile = lazyLoad(() => import('./Pages/home/UserProfile'));
const Search = lazyLoad(() => import('./Pages/home/Search'));
const CheckoutPage = lazyLoad(() => import('./Pages/home/Checkout'));
const MyOrderPage = lazyLoad(() => import('./Pages/home/My_Order'));
const AfterHomePage = lazyLoad(() => import('./Pages/home/AfterHomePage'));

// Auth pages
const Signup = lazyLoad(() => import('./Pages/auth/SignUpScreen'));
const Login = lazyLoad(() => import('./Pages/auth/Login'));
const NotFound = lazyLoad(() => import('./Pages/NotFound'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="product-detail" element={<ProductDetail />} />
        <Route path="Sort" element={<Category />} />
        <Route path="compare-product" element={<Compare />} />
        <Route path="add-to-favorite" element={<AddToFavorite />} />
        <Route path="add-to-cart" element={<AddToCart />} />
        <Route path="payment" element={<Payment />} />
        <Route path="user-profile" element={<UserProfile />} />
        <Route path="Search" element={<Search />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="myorder" element={<MyOrderPage />} />
        <Route path="AfterHomePage" element={<AfterHomePage />} />
      </Route>

      <Route path="/auth" element={<AuthLayout />}>
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
      </Route>

      {/* Fallback 404 page */}
      <Route path="*" element={<NotFound />} />
    </>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
