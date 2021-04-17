import React, { useEffect, useState } from 'react'
import { Box, Button, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react"
import api from "../services/api";

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

export default function Products({ addToCart }) {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        api.get('/products').then(response => {
          setProducts(response.data);
        });
      }, []);

    
    return (
        <>
      <SimpleGrid maxWidth={1480} ml="50" flexDirection="column" minChildWidth="400px" px="8" mt="-200">

        {products.map(product => {
          return (

            <Box mt="200" p="8" bg="white" w="376px" height="462" borderRadius={10} key={product.id}>
        <Image m="auto" mt="-20" align="center" h="230px" w="242" src={product.image[0].url} alt={product.title}></Image>
        { console.log(products)}

        <Text fontSize="1rem">{product.title}</Text>   
          <h1>{product.description}</h1>
          <Text fontSize="18" fontWeight="bold" ml="150">{product.price}</Text>
          <Heading as="h6" mt="-5" size="xs" ml="130">
          R$
          </Heading>
        
          <Button colorScheme="orange" w="208px" h="50" borderRadius={50} m="auto" 
          align="center" ml="50" mt="20" onClick={() => addToCart(product)}
          >
            Comprar
          </Button> 
          </Box>
          )
        })}
        </SimpleGrid>
      </>   
    )
}