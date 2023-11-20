import { useEffect } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { TriangleUpIcon } from "@chakra-ui/icons";

import '@material/web/button/filled-button.js';
import '@material/web/button/outlined-button.js';
import '@material/web/checkbox/checkbox.js';
import { Routes, Route, Navigate, useLocation} from "react-router-dom";
import { Header, Footer } from "./components/ui";
import ScrollToTop from "react-scroll-to-top";
import { HomePage, ServicePage, ServicesPage, CircularesPage, ContactPage } from "./components/pages";

export const App = () => {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  
  return (
      <Grid 
        gridTemplateRows=".25fr 4fr .25fr"
        gridTemplateColumns="1fr 1fr"
        templateAreas={`"header header"
        "main main"
        "footer footer"`}
        color='brand.black'
        fontWeight='bold'
        height="100vh"
        padding="0"
        margin="0"
        overflowX="hidden"
        className="animate__animated animate__fadeIn"
      >
        {/* Header */}
        <Header />

        <GridItem as="main" area={'main'}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/servicios" element={<ServicesPage />} />
            <Route path="/servicios/:servicio" element={<ServicePage />} />
            <Route path="/circulares" element={<CircularesPage />} />
            <Route path="/contacto" element={<ContactPage />} />
            <Route path="/*" element={<Navigate to="/" />}/>
            <Route path="/servicios/*" element={<Navigate to="/servicios" />}/>
          </Routes>
        </GridItem>
        

        {/* Footer */}
        <Footer />

        {/* Botón para regresar a la parte superior del sitio */}
        <ScrollToTop smooth component={ <TriangleUpIcon/>} style={{ backgroundColor: '#FF8811' }} />
      </Grid>
  
  )
}
