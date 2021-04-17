import { MdAddShoppingCart } from 'react-icons/md';
import { Box, Button, Flex, Heading, Image, SimpleGrid, Text, Icon  } from "@chakra-ui/react"
import React, { useEffect, useState } from 'react'
import api from "../services/api";
import Products from '../context/ProductsCart'
import Cart from '../context/Cart'


interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  image: {
    id: number;
    url: string;
  }[];
 
}

const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';



export default function Produtos() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCTS);
  
  const [products, setProducts] = useState<Product[]>([]);

  
  useEffect(() => {
    api.get('/products').then(response => {
      setProducts(response.data);
    });
  }, []);

  if (products.length === 0) {
    return <p>Carregando os produtos...</p>
}

  const addToCart = (product) => {
    setCart([...cart, {...product }]);
  };

  const removeProducts = (productToRemove) => {
    setCart(cart.filter ((product) => product !== productToRemove));
  }
 
  const navigateTo = (nextPage) => {
    setPage(nextPage);
  }

  


  return (
    <Flex direction="column">
       <Button bg="orange" color="white" size="small"w="80px" h="50" align="center" ml="80%" mt="-300px" display="flex" position="absolute"
       onClick={() => navigateTo(PAGE_CART)}
       >
         <MdAddShoppingCart size={16} color="#FFF" />
         
         ({cart.length})
         </Button>

         <Button bg="orange" color="white" size="small"w="80px" h="50" ml="200" align="center" mt="-300px" display="flex" position="absolute"
          onClick={() => navigateTo(PAGE_PRODUCTS)}
          >
            Voltar
            </Button>

        {page === PAGE_PRODUCTS && (
        <Products addToCart={addToCart} />
          )}
        {page === PAGE_CART && (
          <Cart cart={cart} removeProducts={removeProducts} />
        )}
        
      </Flex>    
    );
   
}