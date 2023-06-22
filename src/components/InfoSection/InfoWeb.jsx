import PropTypes from 'prop-types'; 
import { Info } from "./Info";
import { InfoTitles} from "./InfoTitles";


export const InfoWeb = ({ changeSection, imgSrc, title, description }) => {
    return (
        <>
            <div className="sections-container">
       
                <InfoTitles  
                        title="QUIÉNES SOMOS" 
                        changeSection={changeSection} 
                        idx={0}
                        isActive={true}
                />

                <InfoTitles  
                        title="MISIÓN" 
                        changeSection={changeSection} 
                        idx={1}
                        isActive={false}
                />

                <InfoTitles  
                        title="VISIÓN" 
                        changeSection={changeSection} 
                        idx={2}
                        isActive={false}
                />
                
            </div>
            <Info imgSrc={imgSrc} title={title} description={description}/>
        
        </>
       
    )
}


InfoWeb.propTypes = {
    changeSection: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}
