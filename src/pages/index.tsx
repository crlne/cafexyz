import { Box, Button, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { Header } from "../components/Header";
import Produtos from "../components/Produtos";

export default function Home() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Produtos /> 

      
    </Flex> 
    
    
     
     
   
    
  )
}
