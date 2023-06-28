import { Routes, Route, Navigate} from "react-router-dom";
import { Header } from "./components/Header";
import { HomePage } from "./components/Pages/HomePage";
import { ServicesPage } from "./components/Pages/ServicesPage";
import { ContactPage } from "./components/Pages/ContactPage";
import { ServicePage } from "./components/Pages/ServicePage";
import { Footer } from "./components/Footer";
import './styles.scss';

export const App = () => {
  return (
      <main>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/servicios" element={<ServicesPage />} />
          <Route path="/servicios/:servicio" element={<ServicePage />} />
          <Route path="/contacto" element={<ContactPage />} />
        </Routes>
        <Footer />
      </main>
  
  )
}
