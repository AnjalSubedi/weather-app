import React from 'react';
import cities from '../../data/np.json'

const ChooseStateComponents = ()=>{
    


    return (
        <>
            <div className='stateWrap'>
                <select className='stateMenu' >
                    {
                cities && cities.length > 0  && cities.map((city)=>{

                    return(
                        <option key={`${city.population}${city.lat}`} value={city.city}>
                            {city.city}
                            </option>
                    
                    )

                })
        
            }
                    
                </select>
            </div>
        </>
    )
}

export default ChooseStateComponents;