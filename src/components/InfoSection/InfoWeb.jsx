import PropTypes from 'prop-types'; 
import { Info } from "./Info";
import { InfoTitles} from "./InfoTitles";


export const InfoWeb = ({ changeSection, selectedSection = 0, imgSrc, title, description }) => {
    return (
        <>
            <div className="sections-container">
       
                <InfoTitles  
                        title="QUIÉNES SOMOS" 
                        changeSection={changeSection} 
                        idx={0}
                        selectedSection={selectedSection}
                />

                <InfoTitles  
                        title="MISIÓN" 
                        changeSection={changeSection} 
                        idx={1}
                        selectedSection={selectedSection}
                />

                <InfoTitles  
                        title="VISIÓN" 
                        changeSection={changeSection} 
                        idx={2}
                        selectedSection={selectedSection}
                />
                
            </div>
            <Info imgSrc={imgSrc} title={title} description={description}/>
        
        </>
       
    )
}


InfoWeb.propTypes = {
    changeSection: PropTypes.func.isRequired,
    selectedSection: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}
