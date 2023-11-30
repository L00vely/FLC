import { Info } from "../Info/Info";
import { Box, Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import { sections } from "../../../util/sections";

export const InfoArea = () => {
  const gridTemplateAreas = useBreakpointValue({
    base: `
    "quienes-somos"
    "vision"
    "mission"
  `,
    sm: `
      "quienes-somos"
      "vision"
      "mission"
    `,
    md: `
      "quienes-somos"
      "vision"
      "mission"
      
    `,
    lg: `
      "quienes-somos quienes-somos"
      "vision mission"
    `,
    xl: `
      "quienes-somos quienes-somos"
      "vision mission"
    `,
});




  return (
    <Grid
      as='section'
      w='100vw'
      gridTemplateRows={["repeat(3, 1fr)", "repeat(3, 1fr)", "repeat(3, 1fr)", "repeat(3, 1fr)", "repeat(2, 1fr)", "repeat(2, 1fr)"]}
      gridTemplateColumns={["100vw", "100vw", "100vw", "100vw", "1fr 1fr", "1fr 1fr"]} 
      templateAreas={gridTemplateAreas}
    >
    
      <GridItem area={"quienes-somos"}>
        
          <Info 
            {...sections[0]}
          />
        
      </GridItem>
      
      <GridItem area={"vision"} >
        
          <Info 
            {...sections[1]}
          />
        
      </GridItem>

      <GridItem area={"mission"}>
        
          <Info 
            {...sections[2]}
          />
        
      </GridItem>
      
    </Grid>
   
  )
}
