import { useEffect, useRef  } from 'react';
import { useLocation} from 'react-router-dom';

export const ScrollToTop = () => {
    const { pathname } = useLocation();
    const prevPathnameRef = useRef();
  
    useEffect(() => {
      // Comprueba si la ruta ha cambiado
      if (prevPathnameRef.current !== pathname) {
        // Desplázate hacia la parte superior de la página cuando cambie la URL
        window.scrollTo(0, 0);
        // Actualiza la referencia de la ruta previa
        prevPathnameRef.current = pathname;
      }
    }, [pathname]);
  
    // Este componente no renderiza nada, simplemente maneja el cambio de URL y desplaza hacia arriba
    return null;
  };


