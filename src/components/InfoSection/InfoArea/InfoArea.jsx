import { Info } from "../Info/Info";
import { sections } from "../../../util/sections";
import './infoArea.scss';

export const InfoArea = () => {
  return (
    <section className="info-area">
      <div className="about-us-container">
        {
          <Info 
            {...sections[0]}
          />
        }
      </div>
      
      <div className="mision-container">
        {
          <Info 
            {...sections[1]}
          />
        }
      </div>

      <div className="vision-container">
        {
          <Info 
            {...sections[2]}
          />
        }
      </div>
      {/* {
        sections.map(section => {
          return(
            <Info 
              key={section.title}
              {...section}
            />
          )
        })
      } */}
    </section>
   
  )
}
