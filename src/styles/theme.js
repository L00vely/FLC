import { extendTheme } from "@chakra-ui/react";

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
          padding: ".5rem", 
      },

      h1: {
        color: "red.100",
        fontSize: ["sm", "lg", "2xl"],
        fontWeight: "bold"


      },

      h2: {
        color: "red.100",
        fontSize: ["sm", "lg", "3xl"],
        fontWeight: "bold"
      },

      h3: {
        color: "red.100",
        fontSize: ["sm", "lg", "xl"],
        fontWeight: "bold"
      },
      
      
      p:{
          fontSize: ["sm", "md", "lg"],
          color: "gray.100",
          textAlign: "justify",
      },
  }
}


export const theme = extendTheme({
    colors,
    styles: globalStyles,
});
