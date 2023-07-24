import { Form } from "../Form/Form"
import { Map } from '../Map/Map'
import './contact.scss';

export const Contact = () => {
    return (
        <section className="contact-container animate__animated animate__fadeIn">
            <Map />
            
            <Form />
        </section>
    )
}
