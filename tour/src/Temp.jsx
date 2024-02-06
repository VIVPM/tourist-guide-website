import './style1.css'
import { useState, useEffect} from 'react'
import Weathercard from './Weathercard'
const Temp = () => {
    const [searchValue, setSearchValue] = useState('Dharwad')
    const [tempInfo, setTempInfo] = useState({})
    const getWeatherInfo = async()=>{
        try {
            let url =`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=dd09b647c1860b2e6d361bda5786ffc8`;
            const res = await fetch(url);
            const data = await res.json();
            const {temp,humidity,pressure} = data.main;
            const {main:weathermood} = data.weather[0];
            const {name} = data;
            const {speed} = data.wind;
            const {country,sunset}= data.sys;

            const myNewWeatherInfo = {
                temp,
                humidity,
                weathermood,
                pressure,
                name,
                speed,
                country,
                sunset,
                
            }
            setTempInfo(myNewWeatherInfo);
            // console.log(temp);
            // console.log(humidity);
            // console.log(data);
        } catch (error) {
            console.log(error)
        }
    };
    
    useEffect(() => {
        getWeatherInfo(); 
    }, [])

    return (
        <>
            <div className="wrap">
                <div className="search">
                    <input
                        type="search"
                        placeholder="search..."
                        autoFocus
                        id="search"
                        className="searchTerm"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                    <button
                        className="searchButton"
                        type="button"
                        onClick={getWeatherInfo}
                    >
                        Search
                    </button>
                </div>
            </div>
            {/* our temp card */}
        <Weathercard tempInfo={tempInfo}/>
        </>
    ) 
}

export default Temp
