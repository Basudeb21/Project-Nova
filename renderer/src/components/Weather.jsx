import "./styles/weather.css";
import {
    BsSunFill,
    BsCloudRainFill,
    BsCloudFill
} from "react-icons/bs";

function Weather() {
    return (
        <div className="weather-root">

            {/* Main */}
            <div className="weather-main">
                <div className="weather-icon">
                    <BsSunFill />
                </div>

                <div className="weather-temp">
                    32<span>°C</span>
                </div>

                <div className="weather-desc">
                    Clear Sky
                </div>

                <div className="weather-location">
                    Kolkata, IN
                </div>
            </div>

            {/* Stats */}
            <div className="weather-stats">
                <div className="weather-stat">
                    <span>Humidity</span>
                    <strong>64%</strong>
                </div>
                <div className="weather-stat">
                    <span>Wind</span>
                    <strong>12 km/h</strong>
                </div>
                <div className="weather-stat">
                    <span>Pressure</span>
                    <strong>1012 hPa</strong>
                </div>
            </div>

            {/* Forecast */}
            <div className="weather-forecast">
                <div className="forecast-item">
                    <span>Now</span>
                    <BsSunFill />
                    <span>32°</span>
                </div>

                <div className="forecast-item">
                    <span>+3h</span>
                    <BsCloudFill />
                    <span>30°</span>
                </div>

                <div className="forecast-item">
                    <span>+6h</span>
                    <BsCloudRainFill />
                    <span>28°</span>
                </div>

                <div className="forecast-item">
                    <span>+9h</span>
                    <BsCloudRainFill />
                    <span>26°</span>
                </div>
            </div>

        </div>
    );
}

export default Weather;
