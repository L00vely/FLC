import { extendTheme } from "@chakra-ui/react";
import "@fontsource/raleway"; 


const colors = {
  

    red: {
      100: '#A80000'
    },
    white: {
      100: '#F3F3F3',
      200: '#FFFFFF'
    },
    gray: {
      100: '#414042'
    }

};
  
const globalStyles = {
    global: {
      body: {
          padding: ".5rem", 
          fontFamily: "Raleway, Libre Baskerville",
      },

      h1: {
        color: "red.100",
        fontSize: ["sm", "lg", "3xl"],
        fontWeight: "bold"
      },

      h2: {
        color: "red.100",
        fontSize: ["sm", "lg", "2xl"],
        fontWeight: "bold"
      },

      h3: {
        color: "red.100",
        fontSize: ["sm", "md", "lg", "md", "xl"],
        fontWeight: "bold"
      },
      
      
      p:{
          fontSize: ["sm", "md", "md", "md", "xl"],
          color: "gray.100",
          textAlign: "justify",
      },

      strong: {
        fontWeight: "bold",
      },

      span: {
        fontSize: ["sm", "sm", "sm", "sm", "sm"],
        textAlign: "justify",
      }
  }
}


export const theme = extendTheme({
    colors,
    styles: globalStyles,
});
