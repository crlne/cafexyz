import { Box, Button, Image, SimpleGrid, Text } from "@chakra-ui/react";

export default function Produtos() {
    return (
        <SimpleGrid ml="50" minChildWidth="320px">
        <Box mt="200" p="8" bg="yellow.100" w="400px" height="300" borderRadius={10} flexDirection="column">
          <Image m="auto" mt="-20" align="center" src="https://cdn.dribbble.com/users/2214836/screenshots/14804408/media/a09bdea30c37c5c496067e6e81af1d1e.png?compress=1&resize=800x600"></Image>
          
            <Text fontSize="1rem">Double Expresso R$ 30.00</Text>
            <h1>Lorem ipsum dolor iterable, consectetur adip</h1>
            <Button colorScheme="yellow" variant="outline" align="center" m="auto" ml="100">Comprar</Button>   
        </Box>

        <Box mt="200" p="8" bg="yellow.100" w="400px" height="300" borderRadius={10} flexDirection="column">
          <Image m="auto" mt="-20" align="center" src="https://cdn.dribbble.com/users/2214836/screenshots/14804408/media/a09bdea30c37c5c496067e6e81af1d1e.png?compress=1&resize=800x600"></Image>
          
            <Text fontSize="1rem">Double Expresso R$ 30.00</Text>
            <h1>Lorem ipsum dolor iterable, consectetur adip</h1>
            <Button colorScheme="yellow" variant="outline" align="center" m="auto" ml="100">Comprar</Button>   
        </Box>

        <Box mt="200" p="8" bg="yellow.100" w="400px" height="300" borderRadius={10} flexDirection="column">
          <Image m="auto" mt="-20" align="center" src="https://cdn.dribbble.com/users/2214836/screenshots/14804408/media/a09bdea30c37c5c496067e6e81af1d1e.png?compress=1&resize=800x600"></Image>
          
            <Text fontSize="1rem">Double Expresso R$ 30.00</Text>
            <h1>Lorem ipsum dolor iterable, consectetur adip</h1>
            <Button colorScheme="yellow" variant="outline" align="center" m="auto" ml="100">Comprar</Button>   
        </Box>

      </SimpleGrid>
    );

}