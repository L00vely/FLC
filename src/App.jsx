import { useEffect } from "react";
import { Routes, Route, Navigate, useLocation} from "react-router-dom";
import { Header } from "./components/ui/Header/Header";
import { Footer } from "./components/ui/Footer/Footer";
import { HomePage } from "./components/Pages/HomePage";
import { ServicesPage } from "./components/Pages/ServicesPage";
import { ContactPage } from "./components/Pages/ContactPage";
import { ServicePage } from "./components/Pages/ServicePage";
import { CircularesPage } from "./components/Pages/CircularesPage";
import './styles.scss';


export const App = () => {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  
  return (
      <main className="animate__animated animate__fadeIn">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/servicios" element={<ServicesPage />} />
          <Route path="/servicios/:servicio" element={<ServicePage />} />
          <Route path="/circulares" element={<CircularesPage />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="/*" element={<Navigate to="/" />}/>
          <Route path="/servicios/*" element={<Navigate to="/servicios" />}/>
        </Routes>
        <Footer />
      </main>
  
  )
}
