import { Box, Button, Flex, SimpleGrid, Text, Textarea } from "@chakra-ui/react";

export default function ButtonCart() {
    return (
        <SimpleGrid maxWidth={1480} flexDirection="row">
        <Box bg="white" borderRadius={10} height="210" w="752px" ml="-12" mt="580" >
            <Text fontWeight="bold" size="18">Observação:</Text>
            <Textarea height="210" w="752px"  placeholder="Escreva aqui a sua observação:" />
            <Button colorScheme="orange" w="208" h="50" borderRadius={50}>Finalizar compra</Button>   
        </Box>
        </SimpleGrid>
    );
}