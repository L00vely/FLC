import { useRef } from 'react';
import { HStack, Text, VStack, Image, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';
import { useForm } from '../../../hooks/useForm';
import { ContactNav } from '../ContactNav/ContactNav';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import './form.scss'

export const Form= () => {

    const { onInputChange, user_name, user_email, message } = useForm({
        user_name: '',
        user_email: '',
        message: ''
    });

    const form = useRef();
    
    const handleSubmit = (event) => {
        event.preventDefault();

        emailjs.sendForm('service_wqmuu7b', 'template_ou3y0c9', form.current, 'erUHIAK9bggdXcghE')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        Swal.fire('Formulario enviado', 'Gracias por comunicarte con nosotros.');
        
      };


    return (
      <VStack gridArea="form" h="100%" spacing="2rem" p="2rem" w="100%">
        <VStack spacing="2rem" w="100%" p="2rem" as="form" onSubmit={handleSubmit} name="contact" ref={form} bg="white.100">
          <Text as="h3" color="red.100" textAlign="center" w="100%">CONTÁCTANOS</Text>
          <FormControl isRequired>
          <FormLabel color="gray.100" >
              <Text as="span">Nombre completo</Text>
            </FormLabel>
            <Input 
              borderColor="red.100" 
              placeholder='Nombre completo' 
              name="user_name"
              value={user_name}
              onChange={onInputChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel color="gray.100" >
              <Text as="span">Correo electrónico</Text>
            </FormLabel>
            <Input 
              borderColor="red.100" 
              placeholder='Correo electrónico' 
              name="user_email"
              value={user_email}
              onChange={onInputChange}
            />
          </FormControl>
          <FormControl isRequired >
            <FormLabel color="gray.100" >
              <Text as="span">Mensaje</Text>
            </FormLabel>
            <Input 
              borderColor="red.100" 
              placeholder='Mensaje' 
              name="message"
              value={message}
              onChange={onInputChange}
            />
          </FormControl>
           
      
          <Button 
            type="submit" 
            value="Enviar"
            bg="red.100"
            color="white.100"
            w="100%"
          >
            Enviar
          </Button>
        </VStack>

        <VStack w="100%" spacing="1rem" display={["none", "none", "none", "flex", "box" ]}>
          <Text as="h3" color="red.100" textAlign="center" w="100%">Visita nuestras redes</Text>

          <ContactNav />
        </VStack>
      </VStack>
      
    )
}
