import { useState } from "react";

import { useMediaQuery } from 'react-responsive';
import { InfoWeb } from "./Web/InfoWeb";
import { InfoMovil } from "./Mobile/InfoMovil";
import { sections } from "../../util/sections";



export const InfoArea = () => {
  const [ selectedSection, setSelectedSection ] = useState(0);
  const { title, imgSrc, description } = sections[selectedSection];
  const isPantallaGrande = useMediaQuery({ minWidth: 768 });

  const changeSection = (position) => {
    setSelectedSection(position);
    
  }

  return (
    <section className="info-area">
      {
        isPantallaGrande ? (
          <InfoWeb 
            changeSection={changeSection}
            selectedSection={selectedSection}
            imgSrc={imgSrc}
            title={title} 
            description={description}
          />
        ) : (
          <InfoMovil sections={sections}/>
        )
      }
    </section>
   
  )
}
