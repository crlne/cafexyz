import React from 'react'


import { Box, Button, Flex, Heading, Image, SimpleGrid, Text, Icon  } from "@chakra-ui/react"
import Quantity from '../components/quantity';
import ButtonCart from '../components/ButtonCart';
import { DeleteIcon } from '@chakra-ui/icons';


export default function Cart({ cart, removeProducts }) {
    return (
        <>
    <Flex w="100%" maxWidth={1480} mx="center" justify="center" m="auto" position="relative">
    <Flex display="flex" position="absolute">
    <Text fontSize="24" fontWeight="bold" ml="-360" mt="-100">Seu carrinho</Text>
    </Flex>

    <SimpleGrid maxWidth={50} flexDirection="column" display="flex" minChildWidth="600px">

      {cart.map(product => {
        return (

      <Box mt="-70" m="2" bg="white" borderRadius={10} height="166" w="752px" key={product.id}>
      <Image position="absolute" mt="8" ml="37" align="center"h="104" w="103" src={product.image[0].url} 
      alt={product.title} />
     

      <Text  fontSize="18" fontWeight="bold" ml="40" mt="10">{product.title}</Text>   
      <Text ml="40">{product.description}</Text>
        <Text ml="200" fontSize="18" fontWeight="bold">{product.price}</Text>
        <Heading as="h6" ml="40" mt="-5" size="xs">
        R$
        </Heading> 
        <Flex ml="230" mt="-50" >
            <Quantity />
        </Flex>         
        <Button ml="93%" w="20px" mt="-192" 
        onClick={() => removeProducts(product)}>

           <Icon as={DeleteIcon} />
    
          </Button>
        </Box>
        )
      })}
      </SimpleGrid>
      <Flex display="flex" position="relative">
      <ButtonCart />
      </Flex>
      
      </Flex>
    </>  
    )
}