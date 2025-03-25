import React, { useEffect, useRef, useState } from 'react'
import './Weather.css'
import search_icon from '../assets/search.png'
import temp_l_icon from '../assets/temp_l.png'
import temp_h_icon from '../assets/temp_h.png'
import Select from 'react-select/base'
import SelectCity from './SelectCity'




const Weather = () => {
    const inputRef = useRef()
    const [ weatherData, setWeatherData ] = useState(false)

    const search = async(city) => {
        if(city === "") {
            alert("都市コードを入力してください");
            return;
        }
        try {
            const url = `https://weather.tsukumijima.net/api/forecast?city=${city}`;
            const response = await fetch(url);
            const data = await response.json();

            setWeatherData({
                temperature_min: data.forecasts[0].temperature.min.celsius || data.forecasts[1].temperature.min.celsius,
                temperature_max: data.forecasts[0].temperature.max.celsius || data.forecasts[1].temperature.max.celsius,
                location: data.title,
                icon: data.forecasts[0].image.url || data.forecasts[1].image.url,
                description: data.description.bodyText,
            })
            

        } catch(error) {
             console.log(error)
        }
    }


    useEffect(() => {
        search("170010");
    },[])

     const [value, setValue] = useState("")
    
        const options = [
            { id:1, value: '180010', label: '福井' },
            { id:2, value: '090010', label: '宇都宮' },
            { id:3, value: '270000', label: '大阪' },
            { id:4, value: '260010', label: '京都' },
          ];
    
    function handleSelect(event)  {
        setValue(event.target.value)
      }

      
  return (
    <div className='weather'>

        <div className='title'>
            <h2>お天気アプリ</h2>
            <h1>天下泰平</h1>
        </div>
        
        <div className="search-bar">
            <p>都道府県都市コード</p>
            <input ref={inputRef} type="text" className="text" placeholder='都市コードを入力' value={value} readOnly/>
            <img src={search_icon} alt="" onClick={() => search(inputRef.current.value)}/>
        </div>

        <div className='menu-box'>
        <select className="menu" value={value} onChange={handleSelect}>
            {options.map(option => (
                <option key={option.id} value={option.value}>{option.label}</option>
            ))}
        </select>
       
        </div>

        <img src={weatherData.icon} width={120} height={120}/>

        <p className='location'>{weatherData.location}</p>

        <p className='description'>{weatherData.description}</p>
        
        <div className="weather-data">
            <div className="col">
                <img src={temp_h_icon} alt="" />
                <div>
                    <p>{weatherData.temperature_max} &#8451;</p>
                    <span>最高気温</span>
                </div>
            </div>
            <div className="col">
                <img src={temp_l_icon} alt="" />
                <div>
                    <p>{weatherData.temperature_min} &#8451;</p>
                    <span>最低気温</span>
                </div>
            </div>
            {/* <p className='description'>{weatherData.description}</p> */}
        </div>
    </div>
  )
}

export default Weather