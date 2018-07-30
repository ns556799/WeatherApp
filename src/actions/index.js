import axios from "axios";

const API_KEY = "298a16f9cfede5b014d5f4cb549862cb";
const ROOT_URL = `api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
  const url = `https://${ROOT_URL}&q=${city},uk`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
