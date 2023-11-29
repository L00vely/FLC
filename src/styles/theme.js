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
        fontSize: ["sm", "md", "lg", "3xl", "4xl"],
        fontWeight: "bold"
      },

      h2: {
        color: "red.100",
        fontSize: ["xs", "sm", "md", "2xl", "3xl"],
        fontWeight: "bold"
      },

      h3: {
        color: "red.100",
        fontSize: ["sm", "md", "lg", "xl", "2xl"],
        fontWeight: "bold"
      },
      
      
      p:{
          fontSize: ["xs", "md", "md", "lg", "xl"],
          color: "gray.100"
      },

      li:{
        fontSize: ["xs", "md", "md", "lg", "xl"],
          color: "gray.100",
          margin: "1rem 0"
      },

      strong: {
        fontSize: ["sm", "sm", "sm", "sm", "sm"],
        fontWeight: "bold",
      },

      span: {
        fontSize: ["sm", "sm", "sm", "sm", "sm"]
      }
  }
}


export const theme = extendTheme({
    colors,
    styles: globalStyles,
});
