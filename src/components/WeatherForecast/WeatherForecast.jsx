import './WeatherForecast.css'

const WeatherForecast = ({day, img, imgAlt, conditions, time}) => {
return(
  <div className='weather'>
  <div className='WeatherIcon'>
  <img src={img} alt={imgAlt} />
  </div>
  <div className='WeatherData'>
  <h2>{day}</h2>
  <p><span>conditions: </span>{conditions}</p>
  <p><span>time: </span>{time}</p>
  </div>
  </div>
);
}

export default WeatherForecast;