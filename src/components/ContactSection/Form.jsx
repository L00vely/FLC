import { useRef } from 'react';
import { useForm } from '../../hooks/useForm';
import { ContactNav } from './ContactNav';
import emailjs from '@emailjs/browser';

export const Form= () => {

    const { onInputChange, user_name, user_email, message } = useForm({
        user_name: '',
        user_email: '',
        message: ''
    });

    const form = useRef();
    
    const handleSubmit = (event) => {
        event.preventDefault();

        emailjs.sendForm('service_h8ch5l3', 'template_ou3y0c9', form.current, 'erUHIAK9bggdXcghE')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        alert('Correo enviado');
      };


    return (
        <div className='form-container'>
            <h2>Contáctanos</h2> 

            <ContactNav />

            <form onSubmit={handleSubmit} name="contact" ref={form}>
                
                <div className='input-container'>
                    <div className='icon-container'>
                        <img src={'/icons/icons8-usuario-50.png'} alt="Icono de usuario" />
                    </div>
                    
                    <input 
                        type="text" 
                        placeholder="Nombre"
                        name="user_name"
                        value={ user_name }
                        onChange={ onInputChange }
                        required
                    />
                </div>
                    
                <div className='input-container'>
                    <div className='icon-container'>
                        <img src={'/icons/icons8-nuevo-post-50.png'} alt="Icono de email" />
                    </div>

                    <input 
                        type="email" 
                        placeholder="Correo"
                        name="user_email"
                        value={ user_email }
                        onChange={ onInputChange }
                        required
                    />
                </div>

              
                <input 
                    type="text" 
                    placeholder="Mensaje"
                    name="message"
                    value={ message }
                    onChange={ onInputChange }
                    required
                />
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}
