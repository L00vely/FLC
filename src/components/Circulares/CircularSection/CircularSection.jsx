import { useState } from 'react';
import { CircularCard } from '../CircularCard/CircularCard'
import { circulares } from '../../../util/circulares'
import './circularSection.scss';


export const CircularSection = () => {  
    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
      setShowMore(!showMore);
    };

    const visibleImages = showMore ? circulares : circulares.slice(0, 6);


    return (
        <section className="circular-container animate__animated animate__fadeIn">
            <h2>CIRCULARES</h2>
            <p>Avisos importantes</p>
            <div className='circular-grid-container animate__animated animate__fadeIn'>
                {
                    visibleImages.map( circular => {
                        return(
                            <CircularCard 
                                {...circular}
                                key={circular.title}
                            />
                        )
                    })
                }
            </div>

            
            {circulares.length > 6 && (
                <div>
                    {showMore ? (
                        <button className="red-button" onClick={toggleShowMore}>Mostrar menos</button>
                    ) : (
                        <button className="red-button" onClick={toggleShowMore}>Mostrar más</button>
                    )}
                </div>
            )}

        </section>
    )
}
