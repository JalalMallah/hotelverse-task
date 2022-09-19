import { createContext, PropsWithChildren, useContext } from 'react';

export const AppContext = createContext({
  products: [],
  setProducts: (json: any) => {},
  cart: [],
  setCart: (product: any) => {},
  isCartVisible: false,
  setIsCartVisible: (flag: boolean) => {},
});

export const useAppContext = () => {
  return useContext(AppContext);
};
