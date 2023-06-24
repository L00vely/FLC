import { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';
import axios from 'axios';

export const Form= () => {

    const { onInputChange, name, email, message } = useForm({
        name: '',
        email: '',
        message: ''
    });
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          await axios.post('http://localhost:3001/api/contacto', { name, email, message });
          alert('El correo ha sido enviado correctamente.');
        } catch (error) {
            alert('No se pudo enviar el correo.');
        }
      };


    return (
        <div className='form-container'>
            <h2>CONTÁCTANOS</h2> 

            {/* BUTTONS MENU */}

            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Nombre"
                    name="name"
                    value={ name }
                    onChange={ onInputChange }
                    required
                />

                <input 
                    type="email" 
                    placeholder="Correo"
                    name="email"
                    value={ email }
                    onChange={ onInputChange }
                    required
                />

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
