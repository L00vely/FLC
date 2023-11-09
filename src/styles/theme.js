import { extendTheme } from "@chakra-ui/react";

const fontSizes = {
    lg: '2rem',
};
  
const colors = {
    red: {
      100: '#A80000'
    },
    white: {
      100: '#F3F3F3'
    },
    gray: {
      100: '#414042'
    }
};
  
const globalStyles = {
    global: {
        body: {
            padding: "8px", // Valor de padding predeterminado en este ejemplo
        },

        
    },
};

export const theme = extendTheme({
    fontSizes,
    colors,
    styles: globalStyles,
});

// /*VARIABLES*/
// $primary-color: #A80000;
// $secondary-color: #F3F3F3;
// $tertiary-color: #414042;

// /*MIXINS*/
// @mixin flex-center($direction, $justify){
//     display: flex;
//     flex-direction: $direction;
//     align-items: center;
//     justify-content: $justify;
// }

// header {
//     @include flex-center(row,space-between);
//     background-color: $secondary-color;
//     height: auto;
//     padding: 2rem;
//     position: fixed;
//     width: 100%;
//     top: 0;
//     z-index: 1; 
// }

// /* MEDIA QUERIES */

// /*PANTALLAS CHICAS-MEDIANAS*/
// @media screen and (max-width: 767px) {
//     header {
//         .header-logo {
//             width: 70vw;
//         }
     
//         nav {
//             z-index: 4;
//             position: fixed;
//             right: 0;
//             background-color: $primary-color;
//             @include flex-center(column, center); 
          
            
    
//             a {
//                 text-align: center;
//                 padding: 1rem;
//                 text-decoration: none;
//                 color: $secondary-color;
//                 width: 100%;
//                 font-size: .4em;
                
//                 &:active, &:hover{
//                     color: $primary-color;
//                     background-color: $secondary-color;
//                 }
//             }
//         }
//     }
// }

// // Pantallas grandes
// @media screen and (min-width: 768px) {
//     header {
//         .header-logo {
//             width: 35vw;
//         }
//     }
// }

// // Pantallas muy grandes
// @media screen and (min-width: 1024px) {
//     header {
//         .header-logo {
//             width: 20vw;
//         }
        
//     }
// }



