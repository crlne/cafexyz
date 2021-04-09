import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme ({
    fonts: {
        heading: 'Roboto',
        body: 'Roboto'
    },
    styles: {
        global: {
            body: {
                bg: 'yellow.50',
                color: 'yellow.700',
            }
        }
    }
})