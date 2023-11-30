import { Info } from "../Info/Info";
import { Grid, GridItem } from "@chakra-ui/react";
import { sections } from "../../../util/sections";

export const InfoArea = () => {
  return (
    <Grid
      as='section'
      w='100vw'
      m="2rem 0rem"
      h="100%"
      gridTemplateRows="40rem 40rem"
      gridTemplateColumns="1fr 1fr" 
      templateAreas={`"quienes-somos quienes-somos"
        "vision mission"`}  
      b="red.100"
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
