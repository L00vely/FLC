import { useState } from "react";
import { Info } from "./Info";
import { InfoTitles} from "./InfoTitles";

const sections = [
  {
    title: "Quiénes somos",
    imgSrc: "crea01.jpg",
    description: "uwu"  
  },
  {
    title: "Misión",
    imgSrc: "crea02.jpg",
    description: "xD"  
  },
  {
    title: "Visión",
    imgSrc: "crea03.jpg",
    description: "ewe"  
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
