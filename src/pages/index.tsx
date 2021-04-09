import { Box, Button, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { Header } from "../components/Header";
import Produtos from "../components/Produtos";

export default function Home() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" maxWidth={1480} px="500" mx="center" mt="50" >
        <Text fontSize="xl">Cardápio desenvolvido especialmente para você!</Text>
        </Flex> 


      <Produtos /> 

      
    </Flex> 
    
    
     
     
   
    
  )
}
