import { Button, Flex, HStack, Input, Text, useNumberInput } from '@chakra-ui/react'

interface Input {
    isReadOnly: string | boolean;
}

export default function Quantity() {
        const {
          getInputProps,
          getIncrementButtonProps,
          getDecrementButtonProps,
        } = useNumberInput({
          step: 1,
          defaultValue: 0,
          min: 0,
          max: 10,
        })
      
        const inc = getIncrementButtonProps()
        const dec = getDecrementButtonProps()
        const input = getInputProps<Input>({ isReadOnly: true })
      
        return (  
        <HStack maxW="200px" ml="280" mt="10">
        <Button {...inc} h="30">+</Button>
        <Input {...input} h="30" />
        <Button {...dec} h="30">-</Button>
        </HStack>
        )
      }