import { Box, Button, Image, SimpleGrid, Text } from "@chakra-ui/react";
import Link from "next/link";



export default function Produtos() {
 

    return (
        <SimpleGrid maxWidth={1480} ml="50" flexDirection="column" minChildWidth="400px" px="8">
        <Box mt="200" p="8" bg="yellow.100" w="400px" height="300" borderRadius={10}>
          <Image m="auto" mt="-20" align="center" src="http://pngimg.com/uploads/mug_coffee/mug_coffee_PNG97431.png"></Image>
          
            <Text fontSize="1rem">Double Expresso R$ 30.00</Text>
            <h1>Lorem ipsum dolor iterable, consectetur adip</h1>
     
           <Link href="/payment">
           <Button colorScheme="yellow" variant="outline" align="center" m="auto" ml="100"
            >
              Comprar
            </Button> 
           </Link>  
        </Box>
        

        <Box mt="200" p="8" bg="yellow.100" w="400px" height="300" borderRadius={10}>
          <Image m="auto" mt="-20" align="center"h="260" src="http://pngimg.com/uploads/mug_coffee/mug_coffee_PNG97396.png"></Image>
          
            <Text fontSize="1rem">Double Expresso R$ 30.00</Text>
            <h1>Lorem ipsum dolor iterable, consectetur adip</h1>
            <Button colorScheme="yellow" variant="outline" align="center" m="auto" ml="100">Comprar</Button>   
        </Box>

        <Box mt="200" p="8" bg="yellow.100" w="400px" height="300" borderRadius={10}>
          <Image m="auto" mt="-20" align="center"  src="http://pngimg.com/uploads/mug_coffee/mug_coffee_PNG16887.png"></Image>
          
            <Text fontSize="1rem">Double Expresso R$ 30.00</Text>
            <h1>Lorem ipsum dolor iterable, consectetur adip</h1>
            <Button colorScheme="yellow" variant="outline" align="center" m="auto" ml="100">Comprar</Button>   
        </Box>



        <Box mt="200" p="8" bg="yellow.100" w="400px" height="300" borderRadius={10}>
          <Image m="auto" mt="-20" align="center" src="http://pngimg.com/uploads/mug_coffee/mug_coffee_PNG16824.png"></Image>
          
            <Text fontSize="1rem">Double Expresso R$ 30.00</Text>
            <h1>Lorem ipsum dolor iterable, consectetur adip</h1>
            <Button colorScheme="yellow" variant="outline" align="center" m="auto" ml="100">Comprar</Button>   
        </Box>


        <Box mt="200" p="8" bg="yellow.100" w="400px" height="300" borderRadius={10}>
          <Image m="auto" mt="-20" align="center" src="http://pngimg.com/uploads/cappuccino/cappuccino_PNG37.png"></Image>
          
            <Text fontSize="1rem">Double Expresso R$ 30.00</Text>
            <h1>Lorem ipsum dolor iterable, consectetur adip</h1>
            <Button colorScheme="yellow" variant="outline" align="center" m="auto" ml="100">Comprar</Button>   
        </Box>


        <Box mt="200" p="8" bg="yellow.100" w="400px" height="300" borderRadius={10}>
          <Image m="auto" mt="-20" align="center" src="http://pngimg.com/uploads/mug_coffee/mug_coffee_PNG16856.png"></Image>
          
            <Text fontSize="1rem">Double Expresso R$ 30.00</Text>
            <h1>Lorem ipsum dolor iterable, consectetur adip</h1>
            <Button colorScheme="yellow" variant="outline" align="center" m="auto" ml="100">Comprar</Button>   
        </Box>


        
        
      </SimpleGrid>
    );

}