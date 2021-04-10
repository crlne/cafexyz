import { Box, Button, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import Link from "next/link";
import Quantity from "./quantity";



export default function Produtos() {
 

    return (
        <SimpleGrid maxWidth={1480} ml="50" flexDirection="column" minChildWidth="400px" px="8" mt="-200">
        <Box mt="200" p="8" bg="white" w="376px" height="462" borderRadius={10}>
          <Image m="auto" mt="-20" align="center" h="246px" w="242" src="http://pngimg.com/uploads/mug_coffee/mug_coffee_PNG97431.png"></Image>
          
          <Text fontSize="1rem">Double Expresso</Text>   
            <h1>Lorem ipsum dolor iterable, consectetur adip</h1>
            <Text fontSize="18" fontWeight="bold" ml="150"> 16,58</Text>
            <Heading as="h6" mt="-5" size="xs" ml="130">
             R$
            </Heading>

           <Link href="/payment">
           <Button colorScheme="orange" w="208px" h="50" borderRadius={50} m="auto" align="center" ml="50" mt="10"
            >
              Comprar
            </Button> 
           </Link>  
        </Box>
        

        <Box mt="200" p="8" bg="white" w="376px" height="462" borderRadius={10}>
          <Image m="auto" mt="-20" align="center" h="246px" w="242" src="http://pngimg.com/uploads/mug_coffee/mug_coffee_PNG97396.png"></Image>
          
          <Text fontSize="1rem">Double Expresso</Text>   
            <h1>Lorem ipsum dolor iterable, consectetur adip</h1>
            <Text fontSize="18" fontWeight="bold" ml="150"> 16,58</Text>
            <Heading as="h6" mt="-5" size="xs" ml="130">
             R$
            </Heading>
            <Button colorScheme="orange" w="208px" h="50" borderRadius={50} m="auto" align="center" ml="50" mt="10">Comprar</Button>   
        </Box>

        <Box mt="200" p="8" bg="white" w="376px" height="462" borderRadius={10}>
          <Image m="auto" mt="-20" align="center" h="246px" w="242" src="http://pngimg.com/uploads/mug_coffee/mug_coffee_PNG16887.png"></Image>
          
            <Text fontSize="1rem">Double Expresso</Text>   
            <h1>Lorem ipsum dolor iterable, consectetur adip</h1>
            <Text fontSize="18" fontWeight="bold" ml="150"> 16,58</Text>
            <Heading as="h6" mt="-5" size="xs" ml="130">
             R$
            </Heading>

            <Button colorScheme="orange" w="208px" h="50" borderRadius={50} m="auto" align="center" ml="50" mt="10">Comprar</Button>   
        </Box>



        <Box mt="200" p="8" bg="white" w="376px" height="462" borderRadius={10}>
          <Image m="auto" mt="-20" align="center" h="246px" w="242" src="http://pngimg.com/uploads/mug_coffee/mug_coffee_PNG16824.png"></Image>
          
           <Text fontSize="1rem">Double Expresso</Text>   
            <h1>Lorem ipsum dolor iterable, consectetur adip</h1>
            <Text fontSize="18" fontWeight="bold" ml="150"> 16,58</Text>
            <Heading as="h6" mt="-5" size="xs" ml="130">
             R$
            </Heading>
            <Button colorScheme="orange" w="208px" h="50" borderRadius={50} m="auto" align="center" ml="50" mt="10">Comprar</Button>   
        </Box>


        <Box mt="200" p="8" bg="white" w="376px" height="462" borderRadius={10}>
          <Image m="auto" mt="-20" align="center" h="246px" w="242" src="http://pngimg.com/uploads/cappuccino/cappuccino_PNG37.png"></Image>
          
          <Text fontSize="1rem">Double Expresso</Text>   
            <h1>Lorem ipsum dolor iterable, consectetur adip</h1>
            <Text fontSize="18" fontWeight="bold" ml="150"> 16,58</Text>
            <Heading as="h6" mt="-5" size="xs" ml="130">
             R$
            </Heading>
            <Button colorScheme="orange" w="208px" h="50" borderRadius={50} m="auto" align="center" ml="50" mt="10">Comprar</Button>   
        </Box>


        <Box mt="200" p="8" bg="white" w="376px" height="462" borderRadius={10}>
          <Image m="auto" mt="-20" align="center" h="246px" w="242" src="http://pngimg.com/uploads/mug_coffee/mug_coffee_PNG16856.png"></Image>
          
          <Text fontSize="1rem">Double Expresso</Text>   
            <h1>Lorem ipsum dolor iterable, consectetur adip</h1>
            <Text fontSize="18" fontWeight="bold" ml="150"> 16,58</Text>
            <Heading as="h6" mt="-5" size="xs" ml="130">
             R$
            </Heading>
            <Button colorScheme="orange" w="208px" h="50" borderRadius={50} m="auto" align="center" ml="50" mt="10">Comprar</Button>   
        </Box>


        
        
      </SimpleGrid>
    );

}