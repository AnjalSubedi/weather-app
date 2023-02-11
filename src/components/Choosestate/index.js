import React, { useEffect } from 'react';
import cities from '../../data/np.json'
import axios from "axios";
import { UseWeatherAppContext } from '../../context/Context';

const ChooseStateComponents = ()=>{
    
    const{state:{city},dispatch} = UseWeatherAppContext();
    console.log('UseWeatherAppContext',UseWeatherAppContext());
   
    const handlechange=(e)=>{
        const selectedcity = cities.filter((city)=>{
           return city.city === e.target.value
        }

        )[0]
        // console.log(selectedcity);
        dispatch ({
            type:'SET_CITY',
            payload:selectedcity
        })
    }
    const APIKEY = '19a2b8f362cde947c8c6e789940d3cbc';
    let lat = city && city.lat ? city.lat : '';
    let long = city && city.lng ? city.lng : '';
   // let exclude = 'hourly,minutely';
    const ULR =  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${APIKEY}`
    
    const fetchData = ()=>{
        axios(ULR).then((data)=>{
            console.log(data)
        }

        )
    }
     useEffect(()=>{
        fetchData();
        // eslint-disable-next-line
     },[city]

     )

    return (
        <>
            <div className='stateWrap'>
                <select className='stateMenu' defaultValue={city} onChange={handlechange} >
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