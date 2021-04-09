import { Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { Header } from "../components/Header";
import Quantity from "../components/quantity";

export default function Payment() {
    return (
        <Flex w="100%" maxWidth={1480} mx="center" mt="100" justify="center">
    
            <SimpleGrid maxWidth={1480} flexDirection="column" minChildWidth="600px">
                <Box mt="200" bg="yellow.100" w="400" height="400" borderRadius={10}>
                <Image m="auto" mt="-20" align="center"h="260" src="http://pngimg.com/uploads/mug_coffee/mug_coffee_PNG97396.png"></Image>

                <Text fontSize="3xl" fontWeight="bold" align="center">Double Expresso</Text>


                <Quantity />
                <Text ml="130" mt="-7" fontWeight="bold" fontSize="lg">R$ 5.90</Text>
               
                </Box>
            </SimpleGrid>
         



        </Flex>
    );
}