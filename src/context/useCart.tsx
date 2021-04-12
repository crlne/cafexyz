import { createContext, ReactNode, useContext, useState } from 'react';

interface CartProviderProps {
  children: ReactNode;
}

interface UpdateProductAmount {
  productId: number;
  amount: number;
}

interface CartContextData {
  cart: Product[];
  removeProduct: (productId: number) => void;
  updateProductAmount: ({ productId, amount }: UpdateProductAmount) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Product[]>(() => {
    

    return [];
  });

  const removeProduct = (productId: number) => {
    try {
      const productAlreadyExists = cart.find(
        product => product.id === productId
      );

      if (!productAlreadyExists) throw Error();

      const filteredCart = cart.filter(product => product.id !== productId);

      setCart(filteredCart);
    } catch {
      console.error('Erro na remoção do produto');
    }
  };

  const updateProductAmount = async ({
    productId,
    amount
  }: UpdateProductAmount) => {
    try {
      if (amount < 1) return;

      const productAlreadyExists = cart.find(
        product => product.id === productId
      );

      if (!productAlreadyExists) throw Error();

      const updatedAmountCartProduct = cart.map(product => {
        return product.id === productId ? { ...product, amount } : product;
      });

      setCart(updatedAmountCartProduct);
    } catch {
      console.error('Erro na quantidade de produto');
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, removeProduct, updateProductAmount }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextData {
  const context = useContext(CartContext);

  return context;
}