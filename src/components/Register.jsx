import React from 'react';
import {
  Box,
  Button,
  ChakraProvider,
  extendTheme,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
  Heading,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

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
  const formik = useFormik({
    initialValues: {
      nombre: '',
      apellido: '',
      email: '',
      telefono: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      nombre: Yup.string().required('Nombre es requerido'),
      apellido: Yup.string().required('Apellido es requerido'),
      email: Yup.string().email('Email no válido').required('Email es requerido'),
      telefono: Yup.string().required('Teléfono es requerido'),
      password: Yup.string().required('Password es requerido'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Las contraseñas deben coincidir')
        .required('Confirmar Password es requerido'),
    }),
    onSubmit: (values) => {
      // Aquí puedes manejar la lógica para enviar los datos al servidor
      console.log('Datos registrados:', values);
    },
  });

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
        <Heading mb="4" color="teal.300">
          Registrarse
        </Heading>
        <form onSubmit={formik.handleSubmit}>
          <Stack spacing={4}>
            <FormControl isInvalid={formik.touched.nombre && formik.errors.nombre}>
              <FormLabel htmlFor="nombre">Nombre</FormLabel>
              <Input
                type="text"
                id="nombre"
                {...formik.getFieldProps('nombre')}
              />
              <FormErrorMessage>{formik.errors.nombre}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={formik.touched.apellido && formik.errors.apellido}>
              <FormLabel htmlFor="apellido">Apellido</FormLabel>
              <Input
                type="text"
                id="apellido"
                {...formik.getFieldProps('apellido')}
              />
              <FormErrorMessage>{formik.errors.apellido}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={formik.touched.email && formik.errors.email}>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                type="email"
                id="email"
                {...formik.getFieldProps('email')}
              />
              <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={formik.touched.telefono && formik.errors.telefono}>
              <FormLabel htmlFor="telefono">Teléfono</FormLabel>
              <Input
                type="tel"
                id="telefono"
                {...formik.getFieldProps('telefono')}
              />
              <FormErrorMessage>{formik.errors.telefono}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={formik.touched.password && formik.errors.password}>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                type="password"
                id="password"
                {...formik.getFieldProps('password')}
              />
              <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={formik.touched.confirmPassword && formik.errors.confirmPassword}>
              <FormLabel htmlFor="confirmPassword">Confirmar Password</FormLabel>
              <Input
                type="password"
                id="confirmPassword"
                {...formik.getFieldProps('confirmPassword')}
              />
              <FormErrorMessage>{formik.errors.confirmPassword}</FormErrorMessage>
            </FormControl>

            <Button colorScheme="teal" type="submit">
              Registrar
            </Button>
          </Stack>
        </form>
      </Box>
    </ChakraProvider>
  );
};

export default Register;
