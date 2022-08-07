import {
  Flex,
  Input,
  Text,
  Box,
  Button,
  Img,
  FormControl,
} from '@chakra-ui/react'
import cardMobile from './images/cards-mobile.png'
import cardDesktop from './images/cards-desktop.png'

import bgMobile from './images/bg-main-mobile.png'
import bgDesktop from './images/bg-main-desktop.png'
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

  console.log(formData.cardholderName)

  function submitForm() {
    if (formData.cvc.length > 3) {
      alert('wrong')
    }
  }

  return (
    <Flex
      direction={{ base: 'column', '2xl': 'row' }}
      height='100vh'
      width='100vw'
      justify='space-between'
      className='App'
    >
      <Box
        display={{ base: 'block', '2xl': 'none' }}
        backgroundImage={bgMobile}
        backgroundSize={'cover'}
        zIndex={-1}
        flexGrow={1}
      ></Box>

      <Box
        display={{ base: 'none', '2xl': 'block' }}
        backgroundImage={bgDesktop}
        backgroundSize={'cover'}
        zIndex={-1}
        flexGrow={1}
      ></Box>

      <Img
        src={cardDesktop}
        width='100%'
        maxW='600px'
        pos='absolute'
        display={{ base: 'none', '2xl': 'block' }}
        left={'15%'}
        right={'auto'}
        top={'240px'}
        margin='0 auto'
      />
      <Img
        src={cardMobile}
        width='90%'
        maxW='500px'
        pos='absolute'
        display={{ base: 'block', '2xl': 'none' }}
        left={{ base: 0 }}
        right={{ base: 0 }}
        top={{ base: '20px' }}
        margin='0 auto'
      />

      {/* mobile : l 0 / r 0 */}

      <Flex direction='column' justify='center' align='center' flexGrow={1}>
        <FormControl
          onSubmit={submitForm}
          p={12}
          direction='column'
          fontSize='xs'
          width='90%'
          maxW='500px'
        >
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
          <Button width='100%' size='lg' background='#21092f' color='pink.50'>
            Confirm
          </Button>
        </FormControl>
      </Flex>
    </Flex>
  )
}

export default App
