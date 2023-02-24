import React, { useReducer, useContext } from "react";

import {WeatherReducer} from './Reducer';



const WeatherAPPContext = React.createContext();

const WeatherAPPProvider = ({children})=>{

    const [state, dispatch] = useReducer(WeatherReducer, {
        city:{
            "city": "Bharatpur", 
             "lat": "27.6833", 
           "lng": "84.4333", 
           "country": "Nepal", 
          "iso2": "NP", 
          "admin_name": "Nārāyanī", 
         "capital": "", 
         "population": "143836", 
         "population_proper": "143836"
          },
          current:'',
          daily:''
    })

    
    
    return (
        <WeatherAPPContext.Provider value={{state, dispatch}} >
         {children}
        </WeatherAPPContext.Provider>
    )
}

export default WeatherAPPProvider;

export const UseWeatherAppContext = ()=>{
    return useContext(WeatherAPPContext);
}
