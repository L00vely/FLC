const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 3001; // Puedes ajustar el puerto según tus necesidades
const cors = require('cors');

// Middleware para procesar datos JSON
app.use(bodyParser.json());
app.use(cors()); // Aplica el middleware cors a todas las rutas

// Ruta para enviar el correo electrónico
app.post('/api/contacto', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    // Configuración del transporte de Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'fiscallegumcorporatum@gmail.com',
        pass: 'ugkmwgjyjqwkgoxn',
      },
    });

    // Configuración del correo electrónico
    const mailOptions = {
      from: {email},
      to: 'fiscallegumcorporatum@gmail.com',
      subject: '[SITIO WEB] Nuevo mensaje de contacto',
      text: `Nombre: ${name}\n\nEmail: ${email}\n\nMensaje: ${message}`,
    };

    // Envío del correo electrónico
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Correo enviado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Hubo un error al enviar el correo' });
  }
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor backend en ejecución en http://localhost:${port}`);
});