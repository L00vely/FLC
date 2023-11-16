import { useEffect } from "react";
import { VStack } from "@chakra-ui/react";
import '@material/web/button/filled-button.js';
import '@material/web/button/outlined-button.js';
import '@material/web/checkbox/checkbox.js';
import { Routes, Route, Navigate, useLocation} from "react-router-dom";
import { Header, Footer } from "./components/ui";
import { HomePage, ServicePage, ServicesPage, CircularesPage, ContactPage } from "./components/pages";

export const App = () => {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  
  return (
      <VStack 
        spacing="2rem"
        as="main"
        m="0"
        p="0"
        boxSizing="border-box"
        className="animate__animated animate__fadeIn"
        fontFamily="Libre Baskerville, serif"
        minH="100vh"
        minW="100vw"
        bg="white.100"
        overflowX="hidden"
      >
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
      </VStack>
  
  )
}
