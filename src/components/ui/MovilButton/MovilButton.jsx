import { useState } from "react"
import { Navbar } from "../Navbar/Navbar";
import { Button, Image, HStack } from "@chakra-ui/react";

export const MovilButton = () => {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
      setMenuVisible(!menuVisible);
    };

    return (
      <HStack>
        <Button
          bg="white.100"
          p="1rem"
          borderRadius="1rem"
          border="none"
          overflow="hidden"
          w="fit-content"
          onClick={toggleMenu}
          
        >
            <Image 
              boxSize='2rem'
              src="/icons/icons8-menú-50.png" 
              alt="Logo de Fiscal Legum Corporatum" 
            />
        </Button>

        {menuVisible && (
            <Navbar />
        )}
      </HStack>
    );
}
