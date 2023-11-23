import { Info } from "../Info/Info";
import { Grid, GridItem } from "@chakra-ui/react";
import { sections } from "../../../util/sections";
import './infoArea.scss';

export const InfoArea = () => {
  return (
    <Grid
      as='section'
      h="60vw"
      w='100vw'
      m="2rem 0rem"
      gridTemplateRows="4fr 4fr"
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
