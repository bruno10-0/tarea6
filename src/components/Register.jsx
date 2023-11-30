import {
  Box,
  Button,
  ChakraProvider,
  extendTheme,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Heading,
} from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'gray.800',
        color: 'white',
      },
    },
  },
});

const Register = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box
        maxW="400px"
        mx="auto"
        p="6"
        bg="gray.700"
        rounded="md"
        boxShadow="lg"
        textAlign="center"
      >
        <Heading mb="4" color="teal.300">Registrarse</Heading>
        <Stack spacing={4}>
          <FormControl>
            <FormLabel htmlFor="nombre">Nombre</FormLabel>
            <Input type="text" id="nombre" />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="apellido">Apellido</FormLabel>
            <Input type="text" id="apellido" />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input type="email" id="email" />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="telefono">Teléfono</FormLabel>
            <Input type="tel" id="telefono" />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input type="password" id="password" />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="confirmPassword">Confirmar Password</FormLabel>
            <Input type="password" id="confirmPassword" />
          </FormControl>

          <Button colorScheme="teal" type="submit">
            Registrar
          </Button>
        </Stack>
      </Box>
    </ChakraProvider>
  );
};

export default Register;
