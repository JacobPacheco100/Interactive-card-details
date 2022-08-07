import { Flex, Input, Text, Box, Button, Img } from '@chakra-ui/react'
import cardMobile from './images/cards-mobile.png'
import cardDesktop from './images/bg-card-front.png'

import bgMobile from './images/bg-main-mobile.png'
import { useState } from 'react'

function App() {
  const [formData, setFormData] = useState({
    cardholderName: '',
    cardNumber: '',
    expMonth: '',
    expYear: '',
    cvc: '',
  })

  function handleChange(event) {
    const { name, value, type, checked } = event.target
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === 'checkbox' ? checked : value,
      }
    })
  }

  return (
    <Flex
      direction={{ base: 'column', xl: 'row' }}
      height='100vh'
      width='100vw'
      justify='space-between'
      className='App'
    >
      <Box
        backgroundImage={bgMobile}
        backgroundSize={'cover'}
        zIndex={-1}
        flexGrow={1}
      ></Box>
      <Img
        src={{ base: cardMobile }}
        width='100%'
        maxW='500px'
        pos='absolute'
        left={{ base: 0, xl: '7.5%' }}
        right={{ base: 0, xl: 'auto' }}
        top={{ base: 'auto', xl: '300px' }}
        margin='0 auto'
      />

      {/* mobile : l 0 / r 0 */}

      <Flex direction='column' justify='center' align='center' flexGrow={1}>
        <Flex p={12} direction='column' fontSize='xs' width='90%' maxW='500px'>
          {/* row 1 : cardholder name */}

          <Text fontWeight='bold' textTransform='uppercase' mb={3}>
            cardholder name
          </Text>
          <Input
            placeholder='e.g. Jane Appleseed'
            size='md'
            width='100%'
            type='text'
            mb={6}
            name='cardholderName'
            onChange={handleChange}
          />

          {/* row 2 : card number */}

          <Text fontWeight='bold' textTransform='uppercase' mb={3}>
            card number
          </Text>
          <Input
            placeholder='e.g. 1234 5678 9123 0000'
            size='md'
            width='100%'
            type='text'
            mb={6}
            name='cardNumber'
            onChange={handleChange}
          />

          {/* row 3 : exp / cvc */}

          <Flex justify='space-between' align='center' width='100%' mb={4}>
            {/* exp date */}
            <Box width={140}>
              <Text fontWeight='bold' textTransform='uppercase' mb={3}>
                exp. date (mm/yy)
              </Text>
              <Flex>
                <Input
                  placeholder='MM'
                  size='md'
                  width='100%'
                  type='text'
                  mb={6}
                  name='expMonth'
                  onChange={handleChange}
                />
                <Input
                  placeholder='MM'
                  size='md'
                  width='100%'
                  type='text'
                  ml={2}
                  mb={6}
                  name='expYear'
                  onChange={handleChange}
                />
              </Flex>
            </Box>

            {/* cvc */}
            <Box flexGrow={1} ml={2}>
              <Text fontWeight='bold' textTransform='uppercase' mb={3}>
                cvc
              </Text>
              <Input
                placeholder='e.g. 123'
                size='md'
                width='100%'
                type='text'
                mb={6}
                name='cvc'
                onChange={handleChange}
              />
            </Box>
          </Flex>
          <Button size='lg' background='#21092f' color='pink.50'>
            Confirm
          </Button>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default App
