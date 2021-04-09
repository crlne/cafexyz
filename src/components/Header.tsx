import { Flex, Text } from "@chakra-ui/layout";

export function Header() {
    return (
        <Flex as="header" w="100%" maxWidth={1480} h="20" mx="auto" mt="4" px="6" align="center">
            <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64" bgClip="text" bgGradient="linear(to-l,#5F370E, #DD6B20)">
                Café XYZ
            </Text>
        </Flex>
    );

}