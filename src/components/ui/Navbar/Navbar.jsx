import { NavLink } from "react-router-dom";
import { Stack, Link } from "@chakra-ui/react";
import { useBreakpointValue } from "@chakra-ui/react";

export const Navbar = () => {
 

    const linkStyles = {
        p: "1rem",
    };


    const responsiveLinkStyles = useBreakpointValue({
        base: {
            ...linkStyles,

            _activeLink:{
                color: "white.100",
                fontweight: "bold",
            },

            _hover: {
              color: "red.100",
              backgroundColor: "white.100",
            },

            fontSize: "xs", 
        }, 
        lg:{
            ...linkStyles, 

            _activeLink:{
                color: "white.100",
                backgroundColor: "red.100",
                fontweight: "bold",

                _hover: {
                    color: "white.100",
                }
            },
        
            _hover: {
                color: "red.100",
                textDecoration: "underline",
                textDecorationColor: "red.100",
                transition: "text-decoration-color 2s ease", // Agrega una transición al color del subrayado
                lineHeight: "1.5",
            },
            
            fontSize: "md",
        },
        md: {
            ...linkStyles, 

            _activeLink:{
                color: "white.100",
                backgroundColor: "red.100",
                fontweight: "bold",
            },
        
            _hover: {
                color: "white.100",
                backgroundColor: "red.100",
            },

            fontSize: "sm", 
        },
        sm: {
            ...linkStyles, 

            _activeLink:{
                color: "white.100",
                backgroundColor: "red.100",
                fontweight: "bold",
            },
        
            _hover: {
                color: "white.100",
                backgroundColor: "red.100",
            },

            fontSize: "sm", 
        },
        xs:  {
            ...linkStyles, 

            _activeLink:{
                color: "white.100",
                backgroundColor: "red.100",
                fontweight: "bold",
            },
        
            _hover: {
                color: "white.100",
                backgroundColor: "red.100",
            },

            fontSize: "xs", 
        }
        
      });

    const links = [
        { to: "/", title: "Inicio" },
        { to: "/servicios", title: "Servicios" },
        { to: "/circulares", title: "Circulares" },
        { to: "/contacto", title: "Contáctanos" },
    ];
      

    return (
        <Stack 
            as='nav' 
            top={['0', '8rem', '8rem', '1rem', '1rem']}
            right={['0', '0', '0', '1rem', '1rem']}
            textAlign="center"
            spacing={['2rem', '0rem']}
            zIndex="4"
            position={['fixed', 'fixed', 'fixed', 'static', 'static']}
            direction={['column', 'column', 'column', 'row', 'row']}            
            bg='white.100'
        >
            {links.map((link, index) => (
                <Link
                
                    key={index}
                    as={NavLink}
                    to={link.to}
                    title={`Ir a la página de ${link.title.toLowerCase()}`}
                    {...responsiveLinkStyles}
                >
                    {link.title}
                </Link>
            ))}
       
        </Stack>
    
    )
}
