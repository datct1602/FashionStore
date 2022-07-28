import React from 'react';
import Navigation from './source/Navigation/Navigation';
import { UserContextProvider } from './source/user/UserContext';
import { ProductContextProvider } from './source/product/ProductContext';

export default function App() {
  return (
    <UserContextProvider>
      <ProductContextProvider>
        <Navigation/>
      </ProductContextProvider>
    </UserContextProvider>
  );
}


