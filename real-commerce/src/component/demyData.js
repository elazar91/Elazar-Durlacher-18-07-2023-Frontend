const weatherData = [
  {
    id: 1,
    Country: "United States",
    City: "New York City",
    LocalObservationDateTime: "2023-07-18T09:07:00-04:00",
    EpochTime: 1689660420,
    WeatherText: "Mostly sunny",
    WeatherIcon: 1,
    HasPrecipitation: false,
    PrecipitationType: null,
    IsDayTime: true,
    Temperature: {
      Metric: {
        Value: 28.5,
        Unit: "C",
        UnitType: 17,
      },
      Imperial: {
        Value: 83.3,
        Unit: "F",
        UnitType: 18,
      },
    },
  },
  {
    id: 2,
    Country: "United Kingdom",
    City: "London",
    LocalObservationDateTime: "2023-07-18T14:07:00+01:00",
    EpochTime: 1689660420,
    WeatherText: "Cloudy",
    WeatherIcon: 7,
    HasPrecipitation: true,
    PrecipitationType: "Rain",
    IsDayTime: true,
    Temperature: {
      Metric: {
        Value: 19.2,
        Unit: "C",
        UnitType: 17,
      },
      Imperial: {
        Value: 66.6,
        Unit: "F",
        UnitType: 18,
      },
    },
  },
  {
    id: 3,
    Country: "Australia",
    City: "Sydney",
    LocalObservationDateTime: "2023-07-18T22:07:00+10:00",
    EpochTime: 1689660420,
    WeatherText: "Clear",
    WeatherIcon: 1,
    HasPrecipitation: false,
    PrecipitationType: null,
    IsDayTime: false,
    Temperature: {
      Metric: {
        Value: 17.9,
        Unit: "C",
        UnitType: 17,
      },
      Imperial: {
        Value: 64.2,
        Unit: "F",
        UnitType: 18,
      },
    },
  },
  {
    id: 4,
    Country: "Japan",
    City: "Tokyo",
    LocalObservationDateTime: "2023-07-18T21:07:00+09:00",
    EpochTime: 1689660420,
    WeatherText: "Partly cloudy",
    WeatherIcon: 3,
    HasPrecipitation: false,
    PrecipitationType: null,
    IsDayTime: false,
    Temperature: {
      Metric: {
        Value: 26.3,
        Unit: "C",
        UnitType: 17,
      },
      Imperial: {
        Value: 79.3,
        Unit: "F",
        UnitType: 18,
      },
    },
  },
  {
    id: 4,
    Country: "France",
    City: "Paris",
    LocalObservationDateTime: "2023-07-18T15:07:00+02:00",
    EpochTime: 1689660420,
    WeatherText: "Partly sunny",
    WeatherIcon: 3,
    HasPrecipitation: false,
    PrecipitationType: null,
    IsDayTime: true,
    Temperature: {
      Metric: {
        Value: 24.8,
        Unit: "C",
        UnitType: 17,
      },
      Imperial: {
        Value: 76.6,
        Unit: "F",
        UnitType: 18,
      },
    },
  },
  {
    id: 6,
    Country: "Brazil",
    City: "Rio de Janeiro",
    LocalObservationDateTime: "2023-07-18T10:07:00-03:00",
    EpochTime: 1689660420,
    WeatherText: "Sunny",
    WeatherIcon: 2,
    HasPrecipitation: false,
    PrecipitationType: null,
    IsDayTime: true,
    Temperature: {
      Metric: {
        Value: 31.2,
        Unit: "C",
        UnitType: 17,
      },
      Imperial: {
        Value: 88.2,
        Unit: "F",
        UnitType: 18,
      },
    },
  },
  {
    id: 7,
    Country: "Russia",
    City: "Moscow",
    LocalObservationDateTime: "2023-07-18T18:07:00+03:00",
    EpochTime: 1689660420,
    WeatherText: "Rain",
    WeatherIcon: 12,
    HasPrecipitation: true,
    PrecipitationType: "Rain",
    IsDayTime: true,
    Temperature: {
      Metric: {
        Value: 16.5,
        Unit: "C",
        UnitType: 17,
      },
      Imperial: {
        Value: 61.7,
        Unit: "F",
        UnitType: 18,
      },
    },
  },
  {
    id: 8,
    Country: "South Africa",
    City: "Cape Town",
    LocalObservationDateTime: "2023-07-18T16:07:00+02:00",
    EpochTime: 1689660420,
    WeatherText: "Fog",
    WeatherIcon: 20,
    HasPrecipitation: true,
    PrecipitationType: "Mist",
    IsDayTime: true,
    Temperature: {
      Metric: {
        Value: 12.1,
        Unit: "C",
        UnitType: 17,
      },
      Imperial: {
        Value: 53.8,
        Unit: "F",
        UnitType: 18,
      },
    },
  },
  {
    id: 9,
    Country: "China",
    City: "Beijing",
    LocalObservationDateTime: "2023-07-18T20:07:00+08:00",
    EpochTime: 1689660420,
    WeatherText: "Haze",
    WeatherIcon: 22,
    HasPrecipitation: false,
    PrecipitationType: null,
    IsDayTime: false,
    Temperature: {
      Metric: {
        Value: 29.7,
        Unit: "C",
        UnitType: 17,
      },
      Imperial: {
        Value: 85.5,
        Unit: "F",
        UnitType: 18,
      },
    },
  },
  {
    id: 10,
    Country: "United Arab Emirates",
    City: "Dubai",
    LocalObservationDateTime: "2023-07-18T17:07:00+04:00",
    EpochTime: 1689660420,
    WeatherText: "Sunny",
    WeatherIcon: 1,
    HasPrecipitation: false,
    PrecipitationType: null,
    IsDayTime: true,
    Temperature: {
      Metric: {
        Value: 40.5,
        Unit: "C",
        UnitType: 17,
      },
      Imperial: {
        Value: 104.9,
        Unit: "F",
        UnitType: 18,
      },
    },
  },
];

export default weatherData;
