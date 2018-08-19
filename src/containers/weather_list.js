import React, {Component} from "react";
import {connect} from "react-redux";
import Chart from '../components/chart'


class WeatherList extends Component {
    renderWeather(cityData) {
        console.log(cityData[0].city);
        const {name} = cityData[0].city;
        const temps = cityData[0].list.map((weather) => weather.main.temp);
        const pressure = cityData[0].list.map((weather) => weather.main.pressure);
        const humidity = cityData[0].list.map((weather) => weather.main.humidity);
        return (
            <div className={"cityWeather__container"} key={name}>
                <div className={"cityWeather__cityName"}>{name}</div>
                <div className={"cityWeather__cityTemp"}><Chart data={temps} color={'orange'} units="K"/></div>
                <div className={"cityWeather__cityPressure"}><Chart data={pressure} color={'blue'} units="hPa"/></div>
                <div className={"cityWeather__cityHumidity"}><Chart data={humidity} color={'green'} units="%"/></div>
            </div>
        );
    }

    render() {
        return (
            <div className={"weatherList"}>
                <div className={"weatherList__header"}>
                    <div>City</div>
                    <div>Temperature (K)</div>
                    <div>Pressure (hPa)</div>
                    <div>Humidity (%)</div>
                </div>
                {this.props.weather.map(this.renderWeather)}
            </div>
        );
    }
}

function mapStateToProps({weather}) {
    return {weather};
}

export default connect(mapStateToProps)(WeatherList);
