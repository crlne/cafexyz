import { Box, Button, Flex, Heading, Image, SimpleGrid, Text, Textarea } from "@chakra-ui/react";
import React from "react";
import ButtonCart from "../components/ButtonCart";
import { Header } from "../components/Header";

import ButtonQuantity from "../components/buttonQuantity";
import Quantity from "../components/quantity";



export default function Payment() {
    return (
    <Flex w="100%" maxWidth={1480} mx="center" mt="100" justify="center" m="auto">
        <Flex w="100%" maxWidth={1480} mx="center" justify="center" m="auto" mt="10" position="absolute" >
        <Header />
        </Flex>
        
        <Flex mt="10" display="flex" position="absolute"> 
        <Text fontSize="24" fontWeight="bold" ml="-360" mt="270">Seu carrinho</Text>
        </Flex>

        <SimpleGrid maxWidth={50} flexDirection="column" mt="150">
        <Box m="auto" mt="200" bg="white" borderRadius={10} height="166" w="752px">
         
          <Image position="absolute" mt="8" ml="37" align="center"h="104" w="103" src="http://pngimg.com/uploads/mug_coffee/mug_coffee_PNG97396.png"></Image>
           <Text fontSize="18" fontWeight="bold" ml="40" mt="10">Cappuccino</Text>
           <Text ml="40" >Cremoso quentinho e gostoso, feito na hora.</Text>

           <Text ml="177" fontSize="18" fontWeight="bold">16,58</Text>
           <Heading as="h6" ml="40" mt="-5" size="xs">
             R$
            </Heading>

            <Flex ml="230" mt="-50" >
             <Quantity />
            </Flex>         
        </Box>
        </SimpleGrid>

        <ButtonCart />

    </Flex>
    );
}
