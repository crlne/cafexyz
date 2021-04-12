import { Image } from '@chakra-ui/react';
import { formatPrice } from '../context/format';
import { useCart } from '../context/useCart';
import {
    MdDelete,
    MdAddCircleOutline,
    MdRemoveCircleOutline,
  } from 'react-icons/md';


interface Product {

    id: number;
    title: string;
    price: number;
    image: string;
    amount: number;
  }
  

export default function Cart() {
    const { cart, removeProduct, updateProductAmount } = useCart();  

    const cartFormatted = cart.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
        subtotal: formatPrice(product.price * product.amount)
      }));
      const total = formatPrice(  
          cart.reduce((sumTotal, product) => {
            return sumTotal += product.price * product.amount;
          }, 0)
        )

    function handleProductIncrement(product: Product) {
        updateProductAmount({productId: product.id, amount: product.amount + 1})
    }

    function handleProductDecrement(product: Product) {
        updateProductAmount({productId: product.id, amount: product.amount - 1})
        
    }

    function handleRemoveProduct(productId: number) {
        removeProduct(productId)
    }    



    return (
        <>
        <thead>
        <tr>
            <th />
            <th>Produto</th>
            <th>Quantidade</th>
            <th>Subtotal</th>
            <th aria-label="delete icon"/>        
        </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                <Image position="absolute" mt="8" ml="37" align="center"h="104" w="103" src="http://pngimg.com/uploads/mug_coffee/mug_coffee_PNG97396.png"></Image>
                </td>
                <td>
                    <strong>Cappuccino</strong>
                    <span>10,99</span>
                </td>
                <td>
                <div>
                 <button type="button" onclick={() => handleProductDecrement(product)}>
                    <MdRemoveCircleOutline size={20} />
                 </button>

                <input
                  type="text"
                  data-testid="product-amount"
                  readOnly
                  value={product.amount}
                />
                <button
                  type="button"
                  data-testid="increment-product"
                 onClick={() => handleProductDecrement(product)}
                >
                  <MdAddCircleOutline size={20} />
                </button>
                <input
                  type="text"
                  data-testid="product-amount"
                  readOnly
                  value={product.amount}
                />
                <button
                  type="button"
                  data-testid="increment-product"
                 onClick={() => handleProductIncrement(product)}
                >
                  <MdAddCircleOutline size={20} />
                </button>
                 </div>
                </td>
                <td>
                    <strong>Subtotal</strong>
                <td>
              <button
                type="button"
                data-testid="remove-product"
               onClick={() => handleRemoveProduct(product)}
              >
                <MdDelete size={20} />
              </button>
            </td>
            </td>
            </tr>        
        </tbody>

        <footer>
        <button type="button">Finalizar pedido</button>
          <span>TOTAL</span>
          <strong>15.00</strong>
       
      </footer>
        </>
    );
}

