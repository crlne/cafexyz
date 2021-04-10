import { Button, ButtonGroup, Flex, HStack, Input, Text, useNumberInput } from '@chakra-ui/react'

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
        <ButtonGroup size="sm" isAttached maxW="150" ml="300"> 
          <Button {...inc} borderRadius="50" color="black" bg="white" w="208" h="50" fontSize="20" >+</Button>
          <Input {...input} variant="ghost" color="black" bg="white" w="208" h="50" textAlign="center" fontSize="20" />
          <Button {...dec} color="black" bg="white" borderRadius="50" w="208" h="50" fontSize="3xl">-</Button>
        </ButtonGroup>

        )
      }