import { useState } from "react";
import { Info } from "./Info";
import { InfoTitles} from "./InfoTitles";

const sections = [
  {
    title: "Quiénes somos",
    imgSrc: "https://uploads-ssl.webflow.com/5da0a1a1718dbe45ea38d849/60ee070ad92c2105c3fc91c4_crea-oficinas-renta-polanco-0009.jpg",
    description: ""  
  },
  {
    title: "Misión",
    imgSrc: "https://uploads-ssl.webflow.com/5da0a1a1718dbe45ea38d849/60f6f55d974e6e9d6f4f7837_crea-oficinas-renta-polanco-0017.jpg",
    description: ""  
  },
  {
    title: "Visión",
    imgSrc: "https://www.coworkbooking.com/images/1600!0/kapacita/13251/entrada.jpg",
    description: ""  
  }
]

export const InfoArea = () => {
  const [ section, setSection ] = useState(sections[0]);

  const { title, imgSrc, description } = section;
  
  const changeSection = (position) => {
    setSection(sections[position]);
  }
  
  return (
    <>
        <div className="info-area">
            <div className="sections-container">
                { sections.map((section, idx) => (
                    <InfoTitles 
                      key={section.title} 
                      title={section.title} 
                      changeSection={changeSection} 
                      idx={idx}
                    />
                ))}
                
                
            </div>

            <Info imgSrc={imgSrc} title={title} description={description}/>
        </div>
    </>
  )
}
