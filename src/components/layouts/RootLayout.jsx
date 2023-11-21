
import { Grid, GridItem } from "@chakra-ui/react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Header, Footer } from "../";

import { HomePage, ServicePage, ServicesPage, CircularesPage, ContactPage } from "./";

export const RootLayout = () => {
  
  return (
    <Grid 
      className="animate__animated animate__fadeIn"
      gridTemplateRows=".25fr 4fr .25fr"
      gap="0"
      gridTemplateColumns="1fr 1fr"
      templateAreas={`"header header"
      "main main"
      "footer footer"`}
      height="100vh"
      padding="0"
      margin="0"
      overflowX="hidden"
    >
      {/* Header */}
      <Header />

      <GridItem as="main" area={'main'} bg="white.100">
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

    </Grid>
  
  )
}
