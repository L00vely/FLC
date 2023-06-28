import { useForm } from '../../hooks/useForm';
import axios from 'axios';
import { ContactNav } from './ContactNav';

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
            <h2>Contáctanos</h2> 

            <ContactNav />

            <form onSubmit={handleSubmit} netlify>
                
                <div className='input-container'>
                    <div className='icon-container'>
                        <img src={'/icons/icons8-usuario-50.png'} alt="Icono de usuario" />
                    </div>
                    
                    <input 
                        type="text" 
                        placeholder="Nombre"
                        name="name"
                        value={ name }
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
                        name="email"
                        value={ email }
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
