import { Flex, Heading, Text } from "@chakra-ui/layout";

export function Header() {
    return (
        <Flex as="header" w="100%" maxWidth={1480} h="96" mx="center" justify="center" m="auto" >
            <Text fontSize="64" mt="71" color="orange">
                Café <Text mt="-100" ml="140" color="black">XYZ</Text>
            </Text>
            <Heading mt="200" position="absolute" size="14" fontWeight="light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc semper condimentum ultrices.<br /> 
            In hac habitasse platea dictumst. Nulla facilisi.</Heading>
    
        </Flex>
    );

}