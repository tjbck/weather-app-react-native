import React from "react";
import { Text } from "react-native";
import { render, fireEvent } from "@testing-library/react-native";

// Testing Unit Level Tests (NOT Integration, nor E2E), Therefore we'll be testing only for common components.

import Error from "./components/Error";
import Loading from "./components/Loading";

import TitledCard from "./components/common/TitledCard";

import AirQualityDetails from "./components/airquality/AirQualityDetails";
import AirQuality from "./components/home/AirQuality";
import Forecast from "./components/home/Forecast";
import HourlyWeather from "./components/home/HourlyWeather";

import WeatherDetails from "./components/weather/WeatherDetails";

describe("<Error />", () => {
  it("has 3 children", () => {
    const tree = render(<Error />).toJSON();
    expect(tree.children.length).toBe(3);
  });
});

describe("<Loading/>", () => {
  it("has 3 children", () => {
    const tree = render(<Loading />).toJSON();
    expect(tree.children.length).toBe(3);
  });
});

describe("<TitledCard />", () => {
  it("should display its children elements", () => {
    let pressed = false;
    const { getByTestId, getByText, queryByTestId, toJSON } = render(
      <TitledCard
        onPress={() => {
          pressed = true;
        }}
      >
        <Text>test</Text>
      </TitledCard>
    );

    const touchableElement = getByText("test");
    expect(touchableElement).not.toBeNull();
  });

  it("should not display touchableOpacity when there aren't any children elements", () => {
    const { getByTestId, queryByTestId, toJSON } = render(
      <TitledCard
        onPress={() => {
          pressed = true;
        }}
      ></TitledCard>
    );

    const touchableElement = queryByTestId("touchable");
    expect(touchableElement).toBeNull();
  });

  it("should run onPress function when pressed", () => {
    let pressed = false;
    const { getByTestId, getByText, queryByTestId, toJSON } = render(
      <TitledCard
        onPress={() => {
          pressed = true;
        }}
      >
        <Text>test</Text>
      </TitledCard>
    );

    const touchableElement = getByText("test");
    fireEvent.press(touchableElement);

    expect(pressed).toBe(true);
  });
});

describe("<AirQualityDetails/>", () => {
  it("should throw an error when no props given", () => {
    console.error = jest.fn();

    expect(() => render(<AirQualityDetails />)).toThrow();
    expect(console.error).toHaveBeenCalled();
  });

  it("should throw not an error when no props given", () => {
    expect(() =>
      render(<AirQualityDetails airQualityData={airQualityData} />)
    ).not.toThrow();
  });
});

describe("<AirQuality/>", () => {
  it("should throw an error when no props given", () => {
    console.error = jest.fn();
    expect(() => render(<AirQuality />)).toThrow();
    expect(console.error).toHaveBeenCalled();
  });
  it("should throw not an error when no props given", () => {
    expect(() =>
      render(<AirQuality airQualityData={airQualityData} />)
    ).not.toThrow();
  });
});

describe("<Forecast/>", () => {
  it("should throw an error when no props given", () => {
    console.error = jest.fn();
    expect(() => render(<Forecast />)).toThrow();
    expect(console.error).toHaveBeenCalled();
  });
  it("should throw not an error when no props given", () => {
    expect(() => render(<Forecast weatherData={weatherData} />)).not.toThrow();
  });
});

describe("<HourlyWeather/>", () => {
  it("should throw an error when no props given", () => {
    console.error = jest.fn();

    expect(() => render(<HourlyWeather />)).toThrow();
    expect(console.error).toHaveBeenCalled();
  });
  it("should throw not an error when no props given", () => {
    expect(() =>
      render(<HourlyWeather hourlyWeather={weatherData.hourly} />)
    ).not.toThrow();
  });
});

describe("<WeatherDetails/>", () => {
  it("should throw an error when no props given", () => {
    console.error = jest.fn();
    expect(() => render(<WeatherDetails />)).toThrow();
    expect(console.error).toHaveBeenCalled();
  });
  it("should throw not an error when no props given", () => {
    expect(() =>
      render(<WeatherDetails weatherData={weatherData} />)
    ).not.toThrow();
  });
});

// Weather/Air Quality Data
const weatherData = {
  lat: 51,
  lon: 0,
  timezone: "Europe/London",
  timezone_offset: 3600,
  current: {
    dt: 1648401056,
    sunrise: 1648360036,
    sunset: 1648405401,
    temp: 11.4,
    feels_like: 10.71,
    pressure: 1029,
    humidity: 81,
    dew_point: 8.26,
    uvi: 0.27,
    clouds: 7,
    visibility: 10000,
    wind_speed: 0.89,
    wind_deg: 38,
    wind_gust: 2.24,
    weather: [
      { id: 800, main: "Clear", description: "clear sky", icon: "01d" },
    ],
  },
  minutely: [
    { dt: 1648401060, precipitation: 0 },
    { dt: 1648401120, precipitation: 0 },
    { dt: 1648401180, precipitation: 0 },
    { dt: 1648401240, precipitation: 0 },
    { dt: 1648401300, precipitation: 0 },
    { dt: 1648401360, precipitation: 0 },
    { dt: 1648401420, precipitation: 0 },
    { dt: 1648401480, precipitation: 0 },
    { dt: 1648401540, precipitation: 0 },
    { dt: 1648401600, precipitation: 0 },
    { dt: 1648401660, precipitation: 0 },
    { dt: 1648401720, precipitation: 0 },
    { dt: 1648401780, precipitation: 0 },
    { dt: 1648401840, precipitation: 0 },
    { dt: 1648401900, precipitation: 0 },
    { dt: 1648401960, precipitation: 0 },
    { dt: 1648402020, precipitation: 0 },
    { dt: 1648402080, precipitation: 0 },
    { dt: 1648402140, precipitation: 0 },
    { dt: 1648402200, precipitation: 0 },
    { dt: 1648402260, precipitation: 0 },
    { dt: 1648402320, precipitation: 0 },
    { dt: 1648402380, precipitation: 0 },
    { dt: 1648402440, precipitation: 0 },
    { dt: 1648402500, precipitation: 0 },
    { dt: 1648402560, precipitation: 0 },
    { dt: 1648402620, precipitation: 0 },
    { dt: 1648402680, precipitation: 0 },
    { dt: 1648402740, precipitation: 0 },
    { dt: 1648402800, precipitation: 0 },
    { dt: 1648402860, precipitation: 0 },
    { dt: 1648402920, precipitation: 0 },
    { dt: 1648402980, precipitation: 0 },
    { dt: 1648403040, precipitation: 0 },
    { dt: 1648403100, precipitation: 0 },
    { dt: 1648403160, precipitation: 0 },
    { dt: 1648403220, precipitation: 0 },
    { dt: 1648403280, precipitation: 0 },
    { dt: 1648403340, precipitation: 0 },
    { dt: 1648403400, precipitation: 0 },
    { dt: 1648403460, precipitation: 0 },
    { dt: 1648403520, precipitation: 0 },
    { dt: 1648403580, precipitation: 0 },
    { dt: 1648403640, precipitation: 0 },
    { dt: 1648403700, precipitation: 0 },
    { dt: 1648403760, precipitation: 0 },
    { dt: 1648403820, precipitation: 0 },
    { dt: 1648403880, precipitation: 0 },
    { dt: 1648403940, precipitation: 0 },
    { dt: 1648404000, precipitation: 0 },
    { dt: 1648404060, precipitation: 0 },
    { dt: 1648404120, precipitation: 0 },
    { dt: 1648404180, precipitation: 0 },
    { dt: 1648404240, precipitation: 0 },
    { dt: 1648404300, precipitation: 0 },
    { dt: 1648404360, precipitation: 0 },
    { dt: 1648404420, precipitation: 0 },
    { dt: 1648404480, precipitation: 0 },
    { dt: 1648404540, precipitation: 0 },
    { dt: 1648404600, precipitation: 0 },
    { dt: 1648404660, precipitation: 0 },
  ],
  hourly: [
    {
      dt: 1648400400,
      temp: 11.4,
      feels_like: 10.71,
      pressure: 1029,
      humidity: 81,
      dew_point: 8.26,
      uvi: 0.27,
      clouds: 7,
      visibility: 10000,
      wind_speed: 4.74,
      wind_deg: 51,
      wind_gust: 6.1,
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01d" },
      ],
      pop: 0,
    },
    {
      dt: 1648404000,
      temp: 11.08,
      feels_like: 10.41,
      pressure: 1029,
      humidity: 83,
      dew_point: 8.31,
      uvi: 0,
      clouds: 7,
      visibility: 10000,
      wind_speed: 4.32,
      wind_deg: 47,
      wind_gust: 7.42,
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01d" },
      ],
      pop: 0,
    },
    {
      dt: 1648407600,
      temp: 9.79,
      feels_like: 7.91,
      pressure: 1029,
      humidity: 86,
      dew_point: 7.56,
      uvi: 0,
      clouds: 4,
      visibility: 10000,
      wind_speed: 3.66,
      wind_deg: 47,
      wind_gust: 7.23,
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" },
      ],
      pop: 0,
    },
    {
      dt: 1648411200,
      temp: 8.51,
      feels_like: 6.38,
      pressure: 1029,
      humidity: 88,
      dew_point: 6.64,
      uvi: 0,
      clouds: 3,
      visibility: 10000,
      wind_speed: 3.59,
      wind_deg: 53,
      wind_gust: 7.5,
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" },
      ],
      pop: 0,
    },
    {
      dt: 1648414800,
      temp: 7.09,
      feels_like: 4.81,
      pressure: 1029,
      humidity: 89,
      dew_point: 5.4,
      uvi: 0,
      clouds: 1,
      visibility: 10000,
      wind_speed: 3.32,
      wind_deg: 54,
      wind_gust: 7.43,
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" },
      ],
      pop: 0,
    },
    {
      dt: 1648418400,
      temp: 5.66,
      feels_like: 3.2,
      pressure: 1029,
      humidity: 91,
      dew_point: 4,
      uvi: 0,
      clouds: 0,
      visibility: 10000,
      wind_speed: 3.14,
      wind_deg: 54,
      wind_gust: 6.1,
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" },
      ],
      pop: 0,
    },
    {
      dt: 1648422000,
      temp: 5.5,
      feels_like: 3.2,
      pressure: 1029,
      humidity: 90,
      dew_point: 3.82,
      uvi: 0,
      clouds: 0,
      visibility: 10000,
      wind_speed: 2.87,
      wind_deg: 58,
      wind_gust: 4.51,
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" },
      ],
      pop: 0,
    },
    {
      dt: 1648425600,
      temp: 5.45,
      feels_like: 3.57,
      pressure: 1028,
      humidity: 91,
      dew_point: 3.72,
      uvi: 0,
      clouds: 0,
      visibility: 10000,
      wind_speed: 2.34,
      wind_deg: 61,
      wind_gust: 2.3,
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" },
      ],
      pop: 0,
    },
    {
      dt: 1648429200,
      temp: 5.5,
      feels_like: 3.87,
      pressure: 1028,
      humidity: 90,
      dew_point: 3.81,
      uvi: 0,
      clouds: 0,
      visibility: 10000,
      wind_speed: 2.08,
      wind_deg: 54,
      wind_gust: 2.03,
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" },
      ],
      pop: 0,
    },
    {
      dt: 1648432800,
      temp: 5.58,
      feels_like: 4.09,
      pressure: 1027,
      humidity: 90,
      dew_point: 3.81,
      uvi: 0,
      clouds: 0,
      visibility: 10000,
      wind_speed: 1.95,
      wind_deg: 52,
      wind_gust: 1.8,
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" },
      ],
      pop: 0,
    },
    {
      dt: 1648436400,
      temp: 5.64,
      feels_like: 4.09,
      pressure: 1026,
      humidity: 90,
      dew_point: 3.82,
      uvi: 0,
      clouds: 0,
      visibility: 10000,
      wind_speed: 2.02,
      wind_deg: 52,
      wind_gust: 1.9,
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" },
      ],
      pop: 0,
    },
    {
      dt: 1648440000,
      temp: 5.7,
      feels_like: 4.17,
      pressure: 1026,
      humidity: 89,
      dew_point: 3.86,
      uvi: 0,
      clouds: 18,
      visibility: 10000,
      wind_speed: 2.01,
      wind_deg: 51,
      wind_gust: 1.9,
      weather: [
        { id: 801, main: "Clouds", description: "few clouds", icon: "02n" },
      ],
      pop: 0,
    },
    {
      dt: 1648443600,
      temp: 6.1,
      feels_like: 4.57,
      pressure: 1026,
      humidity: 89,
      dew_point: 4.16,
      uvi: 0,
      clouds: 35,
      visibility: 10000,
      wind_speed: 2.08,
      wind_deg: 58,
      wind_gust: 2,
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03n",
        },
      ],
      pop: 0,
    },
    {
      dt: 1648447200,
      temp: 5.98,
      feels_like: 4.48,
      pressure: 1025,
      humidity: 90,
      dew_point: 4.16,
      uvi: 0,
      clouds: 43,
      visibility: 10000,
      wind_speed: 2.03,
      wind_deg: 62,
      wind_gust: 1.92,
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d",
        },
      ],
      pop: 0,
    },
    {
      dt: 1648450800,
      temp: 7.55,
      feels_like: 6.26,
      pressure: 1025,
      humidity: 86,
      dew_point: 5.15,
      uvi: 0.27,
      clouds: 16,
      visibility: 10000,
      wind_speed: 2.09,
      wind_deg: 63,
      wind_gust: 3,
      weather: [
        { id: 801, main: "Clouds", description: "few clouds", icon: "02d" },
      ],
      pop: 0,
    },
    {
      dt: 1648454400,
      temp: 10.11,
      feels_like: 9.21,
      pressure: 1025,
      humidity: 78,
      dew_point: 6.22,
      uvi: 0.76,
      clouds: 54,
      visibility: 10000,
      wind_speed: 2.38,
      wind_deg: 78,
      wind_gust: 3.6,
      weather: [
        { id: 803, main: "Clouds", description: "broken clouds", icon: "04d" },
      ],
      pop: 0,
    },
    {
      dt: 1648458000,
      temp: 12.21,
      feels_like: 11.39,
      pressure: 1024,
      humidity: 73,
      dew_point: 7.39,
      uvi: 1.52,
      clouds: 69,
      visibility: 10000,
      wind_speed: 2.84,
      wind_deg: 96,
      wind_gust: 3.9,
      weather: [
        { id: 803, main: "Clouds", description: "broken clouds", icon: "04d" },
      ],
      pop: 0,
    },
    {
      dt: 1648461600,
      temp: 13.87,
      feels_like: 13.14,
      pressure: 1024,
      humidity: 70,
      dew_point: 8.25,
      uvi: 2.19,
      clouds: 76,
      visibility: 10000,
      wind_speed: 3.35,
      wind_deg: 103,
      wind_gust: 4.4,
      weather: [
        { id: 803, main: "Clouds", description: "broken clouds", icon: "04d" },
      ],
      pop: 0,
    },
    {
      dt: 1648465200,
      temp: 15.09,
      feels_like: 14.38,
      pressure: 1023,
      humidity: 66,
      dew_point: 8.66,
      uvi: 2.8,
      clouds: 81,
      visibility: 10000,
      wind_speed: 3.56,
      wind_deg: 118,
      wind_gust: 4.5,
      weather: [
        { id: 803, main: "Clouds", description: "broken clouds", icon: "04d" },
      ],
      pop: 0,
    },
    {
      dt: 1648468800,
      temp: 15.58,
      feels_like: 14.86,
      pressure: 1022,
      humidity: 64,
      dew_point: 8.55,
      uvi: 3.04,
      clouds: 84,
      visibility: 10000,
      wind_speed: 3.74,
      wind_deg: 132,
      wind_gust: 4.4,
      weather: [
        { id: 803, main: "Clouds", description: "broken clouds", icon: "04d" },
      ],
      pop: 0,
    },
    {
      dt: 1648472400,
      temp: 15.78,
      feels_like: 15.01,
      pressure: 1022,
      humidity: 61,
      dew_point: 8.25,
      uvi: 2.53,
      clouds: 100,
      visibility: 10000,
      wind_speed: 3.56,
      wind_deg: 130,
      wind_gust: 4.04,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      pop: 0,
    },
    {
      dt: 1648476000,
      temp: 15.63,
      feels_like: 14.84,
      pressure: 1021,
      humidity: 61,
      dew_point: 7.92,
      uvi: 1.98,
      clouds: 100,
      visibility: 10000,
      wind_speed: 3.48,
      wind_deg: 125,
      wind_gust: 3.9,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      pop: 0,
    },
    {
      dt: 1648479600,
      temp: 15.23,
      feels_like: 14.43,
      pressure: 1020,
      humidity: 62,
      dew_point: 7.81,
      uvi: 1.28,
      clouds: 100,
      visibility: 10000,
      wind_speed: 3.24,
      wind_deg: 122,
      wind_gust: 3.83,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      pop: 0,
    },
    {
      dt: 1648483200,
      temp: 14.54,
      feels_like: 13.83,
      pressure: 1019,
      humidity: 68,
      dew_point: 8.46,
      uvi: 0.54,
      clouds: 100,
      visibility: 10000,
      wind_speed: 2.59,
      wind_deg: 113,
      wind_gust: 4,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      pop: 0,
    },
    {
      dt: 1648486800,
      temp: 13.36,
      feels_like: 12.71,
      pressure: 1019,
      humidity: 75,
      dew_point: 8.78,
      uvi: 0.2,
      clouds: 100,
      visibility: 10000,
      wind_speed: 2.28,
      wind_deg: 102,
      wind_gust: 4.32,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      pop: 0,
    },
    {
      dt: 1648490400,
      temp: 12.03,
      feels_like: 11.3,
      pressure: 1018,
      humidity: 77,
      dew_point: 7.89,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 2.43,
      wind_deg: 94,
      wind_gust: 3.61,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      pop: 0,
    },
    {
      dt: 1648494000,
      temp: 11.37,
      feels_like: 10.52,
      pressure: 1018,
      humidity: 75,
      dew_point: 6.94,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 2.49,
      wind_deg: 90,
      wind_gust: 4.01,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      pop: 0.04,
    },
    {
      dt: 1648497600,
      temp: 10.91,
      feels_like: 10.07,
      pressure: 1018,
      humidity: 77,
      dew_point: 6.73,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 2.58,
      wind_deg: 78,
      wind_gust: 4.21,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      pop: 0.12,
    },
    {
      dt: 1648501200,
      temp: 10.46,
      feels_like: 9.62,
      pressure: 1018,
      humidity: 79,
      dew_point: 6.79,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 2.21,
      wind_deg: 73,
      wind_gust: 3,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      pop: 0.08,
    },
    {
      dt: 1648504800,
      temp: 10.77,
      feels_like: 9.94,
      pressure: 1017,
      humidity: 78,
      dew_point: 6.86,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 2.49,
      wind_deg: 67,
      wind_gust: 4.91,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      pop: 0.08,
    },
    {
      dt: 1648508400,
      temp: 10.1,
      feels_like: 9.23,
      pressure: 1016,
      humidity: 79,
      dew_point: 6.43,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 2.89,
      wind_deg: 56,
      wind_gust: 4.71,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      pop: 0.12,
    },
    {
      dt: 1648512000,
      temp: 9.32,
      feels_like: 9.32,
      pressure: 1015,
      humidity: 81,
      dew_point: 6.11,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 1.12,
      wind_deg: 100,
      wind_gust: 1.91,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      pop: 0.36,
    },
    {
      dt: 1648515600,
      temp: 9.12,
      feels_like: 9.12,
      pressure: 1015,
      humidity: 88,
      dew_point: 7.1,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 0.56,
      wind_deg: 279,
      wind_gust: 0.6,
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10n" },
      ],
      pop: 0.68,
      rain: { "1h": 0.56 },
    },
    {
      dt: 1648519200,
      temp: 8.85,
      feels_like: 7.78,
      pressure: 1014,
      humidity: 92,
      dew_point: 7.59,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 2.09,
      wind_deg: 39,
      wind_gust: 2.52,
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10n" },
      ],
      pop: 0.72,
      rain: { "1h": 0.63 },
    },
    {
      dt: 1648522800,
      temp: 8.72,
      feels_like: 6.93,
      pressure: 1014,
      humidity: 95,
      dew_point: 7.6,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 3.07,
      wind_deg: 50,
      wind_gust: 5.01,
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10n" },
      ],
      pop: 0.8,
      rain: { "1h": 0.38 },
    },
    {
      dt: 1648526400,
      temp: 8.7,
      feels_like: 6.34,
      pressure: 1013,
      humidity: 95,
      dew_point: 7.59,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 4.14,
      wind_deg: 52,
      wind_gust: 7.11,
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10n" },
      ],
      pop: 0.76,
      rain: { "1h": 0.13 },
    },
    {
      dt: 1648530000,
      temp: 8.23,
      feels_like: 5.67,
      pressure: 1012,
      humidity: 95,
      dew_point: 7.29,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 4.32,
      wind_deg: 61,
      wind_gust: 8.4,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      pop: 0.76,
    },
    {
      dt: 1648533600,
      temp: 8.2,
      feels_like: 5.83,
      pressure: 1012,
      humidity: 96,
      dew_point: 7.33,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 3.92,
      wind_deg: 62,
      wind_gust: 7.84,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      pop: 0.72,
    },
    {
      dt: 1648537200,
      temp: 8.55,
      feels_like: 6.06,
      pressure: 1012,
      humidity: 95,
      dew_point: 7.53,
      uvi: 0.08,
      clouds: 100,
      visibility: 10000,
      wind_speed: 4.35,
      wind_deg: 63,
      wind_gust: 7.81,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      pop: 0.4,
    },
    {
      dt: 1648540800,
      temp: 8.67,
      feels_like: 6.11,
      pressure: 1012,
      humidity: 94,
      dew_point: 7.53,
      uvi: 0.21,
      clouds: 100,
      visibility: 10000,
      wind_speed: 4.55,
      wind_deg: 68,
      wind_gust: 8.21,
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10d" },
      ],
      pop: 0.8,
      rain: { "1h": 0.13 },
    },
    {
      dt: 1648544400,
      temp: 8.59,
      feels_like: 6.08,
      pressure: 1012,
      humidity: 95,
      dew_point: 7.56,
      uvi: 0.41,
      clouds: 100,
      visibility: 10000,
      wind_speed: 4.4,
      wind_deg: 65,
      wind_gust: 8.21,
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10d" },
      ],
      pop: 0.96,
      rain: { "1h": 0.38 },
    },
    {
      dt: 1648548000,
      temp: 8.54,
      feels_like: 5.87,
      pressure: 1012,
      humidity: 95,
      dew_point: 7.52,
      uvi: 0.65,
      clouds: 100,
      visibility: 10000,
      wind_speed: 4.74,
      wind_deg: 51,
      wind_gust: 8.2,
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10d" },
      ],
      pop: 1,
      rain: { "1h": 0.56 },
    },
    {
      dt: 1648551600,
      temp: 8.37,
      feels_like: 5.51,
      pressure: 1012,
      humidity: 95,
      dew_point: 7.35,
      uvi: 0.83,
      clouds: 100,
      visibility: 10000,
      wind_speed: 5.1,
      wind_deg: 47,
      wind_gust: 9.11,
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10d" },
      ],
      pop: 1,
      rain: { "1h": 0.81 },
    },
    {
      dt: 1648555200,
      temp: 8.43,
      feels_like: 5.34,
      pressure: 1012,
      humidity: 95,
      dew_point: 7.33,
      uvi: 0.9,
      clouds: 100,
      visibility: 10000,
      wind_speed: 5.75,
      wind_deg: 48,
      wind_gust: 9.3,
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10d" },
      ],
      pop: 1,
      rain: { "1h": 0.69 },
    },
    {
      dt: 1648558800,
      temp: 8.31,
      feels_like: 5.07,
      pressure: 1011,
      humidity: 95,
      dew_point: 7.33,
      uvi: 1.06,
      clouds: 100,
      visibility: 10000,
      wind_speed: 6.07,
      wind_deg: 48,
      wind_gust: 9.72,
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10d" },
      ],
      pop: 0.88,
      rain: { "1h": 0.63 },
    },
    {
      dt: 1648562400,
      temp: 8.32,
      feels_like: 5.2,
      pressure: 1011,
      humidity: 94,
      dew_point: 7.13,
      uvi: 0.83,
      clouds: 100,
      visibility: 10000,
      wind_speed: 5.76,
      wind_deg: 47,
      wind_gust: 10.11,
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10d" },
      ],
      pop: 0.76,
      rain: { "1h": 0.5 },
    },
    {
      dt: 1648566000,
      temp: 8.27,
      feels_like: 5.25,
      pressure: 1010,
      humidity: 94,
      dew_point: 7.19,
      uvi: 0.54,
      clouds: 100,
      visibility: 10000,
      wind_speed: 5.44,
      wind_deg: 42,
      wind_gust: 10.31,
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10d" },
      ],
      pop: 0.72,
      rain: { "1h": 0.31 },
    },
    {
      dt: 1648569600,
      temp: 8.13,
      feels_like: 4.93,
      pressure: 1010,
      humidity: 94,
      dew_point: 7.01,
      uvi: 0.32,
      clouds: 100,
      visibility: 10000,
      wind_speed: 5.83,
      wind_deg: 42,
      wind_gust: 10.82,
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10d" },
      ],
      pop: 0.68,
      rain: { "1h": 0.13 },
    },
  ],
  daily: [
    {
      dt: 1648382400,
      sunrise: 1648360036,
      sunset: 1648405401,
      moonrise: 1648354860,
      moonset: 1648383060,
      moon_phase: 0.83,
      temp: {
        day: 13.91,
        min: 5.66,
        max: 14.16,
        night: 5.66,
        eve: 11.08,
        morn: 6.68,
      },
      feels_like: { day: 13.29, night: 3.2, eve: 10.41, morn: 3.58 },
      pressure: 1031,
      humidity: 74,
      dew_point: 9.09,
      wind_speed: 5.87,
      wind_deg: 59,
      wind_gust: 12.51,
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d",
        },
      ],
      clouds: 49,
      pop: 0,
      uvi: 3.53,
    },
    {
      dt: 1648468800,
      sunrise: 1648446301,
      sunset: 1648491899,
      moonrise: 1648443120,
      moonset: 1648474500,
      moon_phase: 0.87,
      temp: {
        day: 15.58,
        min: 5.45,
        max: 15.78,
        night: 10.77,
        eve: 12.03,
        morn: 5.98,
      },
      feels_like: { day: 14.86, night: 9.94, eve: 11.3, morn: 4.48 },
      pressure: 1022,
      humidity: 64,
      dew_point: 8.55,
      wind_speed: 3.74,
      wind_deg: 132,
      wind_gust: 4.91,
      weather: [
        { id: 803, main: "Clouds", description: "broken clouds", icon: "04d" },
      ],
      clouds: 84,
      pop: 0.12,
      uvi: 3.04,
    },
    {
      dt: 1648555200,
      sunrise: 1648532565,
      sunset: 1648578396,
      moonrise: 1648530900,
      moonset: 1648565880,
      moon_phase: 0.9,
      temp: {
        day: 8.43,
        min: 4.97,
        max: 10.1,
        night: 4.97,
        eve: 7.77,
        morn: 8.2,
      },
      feels_like: { day: 5.34, night: 0.35, eve: 4.11, morn: 5.83 },
      pressure: 1012,
      humidity: 95,
      dew_point: 7.33,
      wind_speed: 7.52,
      wind_deg: 39,
      wind_gust: 12.32,
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10d" },
      ],
      clouds: 100,
      pop: 1,
      rain: 5.84,
      uvi: 1.06,
    },
    {
      dt: 1648641600,
      sunrise: 1648618830,
      sunset: 1648664894,
      moonrise: 1648618380,
      moonset: 1648657140,
      moon_phase: 0.94,
      temp: {
        day: 7.73,
        min: 4.42,
        max: 7.74,
        night: 5.45,
        eve: 6.4,
        morn: 4.42,
      },
      feels_like: { day: 6.19, night: 2.75, eve: 3.76, morn: 0.76 },
      pressure: 1010,
      humidity: 62,
      dew_point: 0.73,
      wind_speed: 7.51,
      wind_deg: 37,
      wind_gust: 11.6,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: 100,
      pop: 0.4,
      uvi: 2.5,
    },
    {
      dt: 1648728000,
      sunrise: 1648705095,
      sunset: 1648751392,
      moonrise: 1648705740,
      moonset: 1648748160,
      moon_phase: 0.97,
      temp: {
        day: 3.65,
        min: 1.46,
        max: 6.24,
        night: 1.46,
        eve: 2.68,
        morn: 2.76,
      },
      feels_like: { day: -1.85, night: -4.4, eve: -3.1, morn: -1.72 },
      pressure: 1011,
      humidity: 95,
      dew_point: 2.73,
      wind_speed: 10.14,
      wind_deg: 31,
      wind_gust: 15.6,
      weather: [
        { id: 616, main: "Snow", description: "rain and snow", icon: "13d" },
      ],
      clouds: 94,
      pop: 1,
      rain: 1.87,
      snow: 1.7,
      uvi: 0.35,
    },
    {
      dt: 1648814400,
      sunrise: 1648791360,
      sunset: 1648837890,
      moonrise: 1648792980,
      moonset: 1648839180,
      moon_phase: 0,
      temp: {
        day: 7.29,
        min: -0.26,
        max: 7.6,
        night: 1.16,
        eve: 4.31,
        morn: -0.26,
      },
      feels_like: { day: 3.09, night: -2.11, eve: 0.82, morn: -5.58 },
      pressure: 1023,
      humidity: 42,
      dew_point: -4.75,
      wind_speed: 8.21,
      wind_deg: 20,
      wind_gust: 15.3,
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01d" },
      ],
      clouds: 5,
      pop: 0.04,
      uvi: 1,
    },
    {
      dt: 1648900800,
      sunrise: 1648877626,
      sunset: 1648924387,
      moonrise: 1648880220,
      moonset: 1648930020,
      moon_phase: 0.04,
      temp: {
        day: 8.35,
        min: -0.28,
        max: 8.35,
        night: 1.88,
        eve: 4.94,
        morn: -0.28,
      },
      feels_like: { day: 4.84, night: 1.88, eve: 2.28, morn: -4.72 },
      pressure: 1027,
      humidity: 52,
      dew_point: -1.18,
      wind_speed: 6.93,
      wind_deg: 15,
      wind_gust: 11.31,
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10d" },
      ],
      clouds: 19,
      pop: 0.56,
      rain: 0.94,
      uvi: 1,
    },
    {
      dt: 1648987200,
      sunrise: 1648963892,
      sunset: 1649010885,
      moonrise: 1648967520,
      moonset: 1649020860,
      moon_phase: 0.07,
      temp: {
        day: 8.96,
        min: 1.47,
        max: 9.33,
        night: 3.72,
        eve: 7.14,
        morn: 2.34,
      },
      feels_like: { day: 6.05, night: 2.2, eve: 6, morn: -1.21 },
      pressure: 1027,
      humidity: 62,
      dew_point: 1.93,
      wind_speed: 5.89,
      wind_deg: 358,
      wind_gust: 9.5,
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10d" },
      ],
      clouds: 97,
      pop: 0.28,
      rain: 0.31,
      uvi: 1,
    },
  ],
};

const airQualityData = {
  status: "ok",
  data: {
    aqi: 59,
    idx: 3175,
    attributions: [
      {
        url: "http://uk-air.defra.gov.uk/",
        name: "UK-AIR, air quality information resource - Defra, UK",
        logo: "UK-Department-for-environment-food-and-rural-affairs.png",
      },
      {
        url: "https://waqi.info/",
        name: "World Air Quality Index Project",
      },
    ],
    city: {
      geo: [50.805778, 0.271611],
      name: "Eastbourne, United Kingdom",
      url: "https://aqicn.org/city/united-kingdom/eastbourne",
    },
    dominentpol: "pm25",
    iaqi: {
      h: {
        v: 74,
      },
      no2: {
        v: 1.9,
      },
      o3: {
        v: 19,
      },
      p: {
        v: 1030.8,
      },
      pm10: {
        v: 20,
      },
      pm25: {
        v: 59,
      },
      so2: {
        v: 1.4,
      },
      t: {
        v: 12.7,
      },
      w: {
        v: 6,
      },
      wg: {
        v: 12,
      },
    },
    time: {
      s: "2022-03-27 16:00:00",
      tz: "+01:00",
      v: 1648396800,
      iso: "2022-03-27T16:00:00+01:00",
    },
    forecast: {
      daily: {
        o3: [
          {
            avg: 24,
            day: "2022-03-27",
            max: 30,
            min: 16,
          },
          {
            avg: 14,
            day: "2022-03-28",
            max: 24,
            min: 8,
          },
          {
            avg: 24,
            day: "2022-03-29",
            max: 38,
            min: 9,
          },
          {
            avg: 35,
            day: "2022-03-30",
            max: 38,
            min: 32,
          },
          {
            avg: 32,
            day: "2022-03-31",
            max: 32,
            min: 31,
          },
        ],
        pm10: [
          {
            avg: 14,
            day: "2022-03-27",
            max: 15,
            min: 11,
          },
          {
            avg: 25,
            day: "2022-03-28",
            max: 28,
            min: 16,
          },
          {
            avg: 24,
            day: "2022-03-29",
            max: 36,
            min: 11,
          },
          {
            avg: 9,
            day: "2022-03-30",
            max: 18,
            min: 5,
          },
          {
            avg: 7,
            day: "2022-03-31",
            max: 7,
            min: 7,
          },
        ],
        pm25: [
          {
            avg: 41,
            day: "2022-03-27",
            max: 53,
            min: 27,
          },
          {
            avg: 70,
            day: "2022-03-28",
            max: 84,
            min: 39,
          },
          {
            avg: 70,
            day: "2022-03-29",
            max: 101,
            min: 37,
          },
          {
            avg: 24,
            day: "2022-03-30",
            max: 47,
            min: 12,
          },
          {
            avg: 19,
            day: "2022-03-31",
            max: 19,
            min: 16,
          },
        ],
        uvi: [
          {
            avg: 0,
            day: "2022-03-27",
            max: 3,
            min: 0,
          },
          {
            avg: 0,
            day: "2022-03-28",
            max: 2,
            min: 0,
          },
          {
            avg: 0,
            day: "2022-03-29",
            max: 1,
            min: 0,
          },
          {
            avg: 0,
            day: "2022-03-30",
            max: 2,
            min: 0,
          },
          {
            avg: 0,
            day: "2022-03-31",
            max: 2,
            min: 0,
          },
          {
            avg: 0,
            day: "2022-04-01",
            max: 0,
            min: 0,
          },
        ],
      },
    },
    debug: {
      sync: "2022-03-28T01:46:47+09:00",
    },
  },
};
