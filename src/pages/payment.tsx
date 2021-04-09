import { Box, Button, Flex, Image, SimpleGrid, Text, Textarea } from "@chakra-ui/react";
import Quantity from "../components/quantity";

export default function Payment() {
    return (
    <Flex w="100%" maxWidth={1480} mx="center" mt="100" justify="center">


        <SimpleGrid maxWidth={1480} flexDirection="column" minChildWidth="600px">
        <Box mt="100" bg="yellow.100" w="200" height="550" borderRadius={10}>
          <Image m="auto" mt="-120" align="center"h="260" src="http://pngimg.com/uploads/mug_coffee/mug_coffee_PNG97396.png"></Image>
           <Text fontSize="3xl" fontWeight="bold" align="center">Double Expresso</Text>

            <Quantity />
            <Text ml="130" mt="-7" fontWeight="bold" fontSize="lg">R$ 5.90</Text>

            <Flex maxW="400px" ml="200" m="auto" mt="10">
            <Textarea placeholder="Observações:" />
            </Flex>

        
            <Button w="200px" colorScheme="yellow" variant="outline" align="center" m="auto"mt="50" ml="200">
                Comprar
            </Button>

        </Box>
        </SimpleGrid>
    </Flex>
    );
}