var myapp = angular.module("app_p1_p4", []);
myapp.controller("controller_p1_p4", function ($scope,$http) {

    console.log("from weather angular");

    /*getweather function*/
    $scope.getweather = function () {
        console.log("searchairport function");
        var airporttitle = $scope.airporttitle;

        //$http.jsonp("http://www.myapifilms.com/imdb?title=" + airporttitle + "&format=JSONP&aka=0&business=0&seasons=0&seasonYear=0&technical=0&filter=N&exactFilter=0&limit=10&lang=en-us&actors=N&biography=0&trailer=0&uniqueName=0&filmography=0&bornDied=0&starSign=0&actorActress=0&actorTrivia=0&movieTrivia=0&awards=0&moviePhotos=N&movieVideos=N&callback=JSON_CALLBACK")
        $http.jsonp("https://api.flightstats.com/flex/weather/rest/v1/jsonp/all/" + airporttitle + "?appId=dbfff68d&appKey=b79d3df72ceeee19f63124dc9f4fab68&callback=angular.callbacks._0")
        .success(function (response) {
            var myweather = response;
            console.log(myweather);

            //console.log(myweather.appendix.airports);
            $scope.myairport = myweather.appendix.airports;
            //console.log(myweather.metar.conditions.wind.direction);
            var wind = myweather.metar.conditions.wind;
            $scope.wind_dir = wind.direction;
            $scope.wind_speed = wind.speedKnots;
            $scope.wind_variable = wind.directionIsVariable;

            //console.log(myweather.metar.conditions.visibility.miles);
            var visbility = myweather.metar.conditions.visibility;
            $scope.miles = visbility.miles;
            $scope.lessthan = visbility.lessThan;
            $scope.cavok = visbility.cavok;

            //console.log(myweather.metar.conditions.pressureInchesHg);
            //console.log(myweather.metar.temperatureCelsius);
            //console.log(myweather.metar.dewPointCelsius);
            $scope.pressure = myweather.metar.conditions.pressureInchesHg;
            $scope.temp = myweather.metar.temperatureCelsius;
            $scope.dewpoint = myweather.metar.dewPointCelsius
            
        });/*end of success method*/
        
    }/*end of getweather function*/

   /* var myweather = {

        "request": {

            "url": "https://api.flightstats.com/flex/weather/rest/v1/json/all/BOS",
            "airport": {

                "requestedCode": "BOS",
                "fsCode": "BOS"
            }
      ,
            "codeType": {


            }

        }
,
        "metar": {

            "report": "KBOS 280454Z 30005KT 10SM OVC065 04/02 A2976 RMK AO2 SLP076 T00440022 400670028",
            "reportTime": "2015-03-28T04:54:00.000Z",
            "weatherStationIcao": "KBOS",
            "tags": [

              {

                  "key": "Freezing",
                  "value": "4"
              }
        ,
              {

                  "key": "Instrumentation",
                  "value": "VFR"
              }
        ,
              {

                  "key": "Prevailing Conditions",
                  "value": "Cloudy"
              }

            ]
      ,
            "conditions": {

                "wind": {

                    "direction": 300,
                    "directionIsVariable": false,
                    "speedKnots": "5.00"
                }
        ,
                "visibility": {

                    "miles": "10.00",
                    "lessThan": false,
                    "cavok": false
                }
        ,
                "weatherConditions": [

        {

            "phenomenon": "Mist",
            "intensity": "Moderate"
        }

                ]
,
                "skyConditions": [

                  {

                      "coverage": "Few clouds",
                      "base": 3000
                  }
          ,
                  {

                      "coverage": "Scattered clouds",
                      "base": 10000
                  }

                ]
,

                "pressureInchesHg": "29.76"
            }
      ,
            "temperatureCelsius": "4.40",
            "dewPointCelsius": "2.20",
            "runwayVisualRanges": [


            ]
      ,
            "obscurations": [


            ]
      ,
            "noSignificantChange": false
        }
,
        "taf": {

            "report": "TAF KBOS 280522Z 2806/2912 30005KT P6SM OVC050\n     FM281000 01010KT 3SM -SHSN BR OVC015 \n     FM281900 36010KT 2SM -SHRASN BR OVC008 \n     FM290000 34007KT 2SM BR OVC015 \n     FM290600 33009KT P6SM OVC010",
            "reportTime": "2015-03-28T06:27:00.000Z",
            "observationTime": "2015-03-28T05:22:00.000Z",
            "reportType": "Normal",
            "weatherStationIcao": "KBOS",
            "forecasts": [

              {

                  "type": "Base",
                  "start": "2015-03-28T06:00:00.000Z",
                  "end": "2015-03-29T12:00:00.000Z",
                  "conditions": {

                      "wind": {

                          "direction": 300,
                          "directionIsVariable": false,
                          "speedKnots": "5.00"
                      }
          ,
                      "visibility": {

                          "miles": "6.00",
                          "lessThan": false,
                          "cavok": false
                      }
          ,
                      "weatherConditions": [


                      ]
          ,
                      "skyConditions": [

                        {

                            "coverage": "Overcast",
                            "base": 5000
                        }

                      ]

                  }

              }
        ,
              {

                  "type": "From",
                  "start": "2015-03-28T10:00:00.000Z",
                  "end": "2015-03-29T00:00:00.000Z",
                  "conditions": {

                      "wind": {

                          "direction": 10,
                          "directionIsVariable": false,
                          "speedKnots": "10.00"
                      }
          ,
                      "visibility": {

                          "miles": "3.00",
                          "lessThan": false,
                          "cavok": false
                      }
          ,
                      "weatherConditions": [

                        {

                            "phenomenon": "Snow",
                            "descriptor": "Showers",
                            "intensity": "Light"
                        }
            ,
                        {

                            "phenomenon": "Mist",
                            "intensity": "Moderate"
                        }

                      ]
          ,
                      "skyConditions": [

                        {

                            "coverage": "Overcast",
                            "base": 1500
                        }

                      ]

                  }

              }
        ,
              {

                  "type": "From",
                  "start": "2015-03-28T19:00:00.000Z",
                  "end": "2015-03-29T00:00:00.000Z",
                  "conditions": {

                      "wind": {

                          "direction": 360,
                          "directionIsVariable": false,
                          "speedKnots": "10.00"
                      }
          ,
                      "visibility": {

                          "miles": "2.00",
                          "lessThan": false,
                          "cavok": false
                      }
          ,
                      "weatherConditions": [


                      ]
          ,
                      "skyConditions": [


                      ]

                  }

              }
        ,
              {

                  "type": "From",
                  "start": "2015-03-29T00:00:00.000Z",
                  "end": "2015-03-30T00:00:00.000Z",
                  "conditions": {

                      "wind": {

                          "direction": 340,
                          "directionIsVariable": false,
                          "speedKnots": "7.00"
                      }
          ,
                      "visibility": {

                          "miles": "2.00",
                          "lessThan": false,
                          "cavok": false
                      }
          ,
                      "weatherConditions": [

                        {

                            "phenomenon": "Mist",
                            "intensity": "Moderate"
                        }

                      ]
          ,
                      "skyConditions": [

                        {

                            "coverage": "Overcast",
                            "base": 1500
                        }

                      ]

                  }

              }
        ,
              {

                  "type": "From",
                  "start": "2015-03-29T06:00:00.000Z",
                  "end": "2015-03-30T00:00:00.000Z",
                  "conditions": {

                      "wind": {

                          "direction": 330,
                          "directionIsVariable": false,
                          "speedKnots": "9.00"
                      }
          ,
                      "visibility": {

                          "miles": "6.00",
                          "lessThan": false,
                          "cavok": false
                      }
          ,
                      "weatherConditions": [


                      ]
          ,
                      "skyConditions": [

                        {

                            "coverage": "Overcast",
                            "base": 1000
                        }

                      ]

                  }

              }

            ]

        }
,
        "zoneForecast": {

            "header": "SUFFOLK MA-\nINCLUDING THE CITIES OF...BOSTON\n115 AM EDT SAT MAR 28 2015",
            "general": "Expires:201503280800;;500334\nFPUS51 KBOX 280516\nZFPBOX\nZONE FORECAST PRODUCT FOR SOUTHERN NEW ENGLAND\nNATIONAL WEATHER SERVICE TAUNTON MA\n115 AM EDT SAT MAR 28 2015",
            "zones": [

              "MAZ015"
            ]
      ,
            "reportTime": "2015-03-28T01:15:00.000-04:00",
            "cities": [

              "Boston"
            ]
      ,
            "zoneNames": [

              "Suffolk Ma"
            ]
      ,
            "dayForecasts": [

              {

                  "day": "Rest Of Tonight",
                  "forecast": "Cloudy. Patchy fog. Lows in the lower 30s. North winds 5 to 10 mph.",
                  "start": "2015-03-28T18:00:00.000",
                  "end": "2015-03-29T06:00:00.000",
                  "tags": [

                    {

                        "key": "Prevailing Conditions",
                        "value": "Patchy Fog"
                    }

                  ]

              }
        ,
              {

                  "day": "Saturday",
                  "forecast": "Snow showers. Patchy fog. Little or no snow accumulation. Cold. Near steady temperature in the mid 30s. North winds 5 to 10 mph with gusts up to 25 mph. Chance of snow 90 percent.",
                  "start": "2015-03-28T06:00:00.000",
                  "end": "2015-03-28T18:00:00.000",
                  "tags": [

                    {

                        "key": "Prevailing Conditions",
                        "value": "Snow"
                    }

                  ]

              }
        ,
              {

                  "day": "Saturday Night",
                  "forecast": "Cloudy. Snow showers likely...mainly in the evening. Patchy fog. Total snow accumulation around an inch possible. Lows in the mid 20s. Northwest winds 5 to 10 mph with gusts up to 25 mph. Chance of snow 60 percent.",
                  "start": "2015-03-28T18:00:00.000",
                  "end": "2015-03-29T06:00:00.000",
                  "tags": [

                    {

                        "key": "Prevailing Conditions",
                        "value": "Snow"
                    }

                  ]

              }
        ,
              {

                  "day": "Sunday",
                  "forecast": "Mostly sunny. Highs in the upper 30s. Northwest winds 5 to 10 mph. Gusts up to 20 mph in the morning.",
                  "start": "2015-03-29T06:00:00.000",
                  "end": "2015-03-29T18:00:00.000",
                  "tags": [

                    {

                        "key": "Prevailing Conditions",
                        "value": "Sunny"
                    }

                  ]

              }
        ,
              {

                  "day": "Sunday Night",
                  "forecast": "Partly cloudy. Lows in the upper 20s. Southwest winds 5 to 10 mph. Gusts up to 20 mph after midnight.",
                  "start": "2015-03-29T18:00:00.000",
                  "end": "2015-03-30T06:00:00.000",
                  "tags": [

                    {

                        "key": "Prevailing Conditions",
                        "value": "Partly Cloudy"
                    }

                  ]

              }
        ,
              {

                  "day": "Monday",
                  "forecast": "Partly sunny. Not as cool with highs in the upper 40s. ",
                  "start": "2015-03-30T06:00:00.000",
                  "end": "2015-03-30T18:00:00.000",
                  "tags": [

                    {

                        "key": "Prevailing Conditions",
                        "value": "Partly Sunny"
                    }

                  ]

              }
        ,
              {

                  "day": "Monday Night And Tuesday",
                  "forecast": "Partly cloudy. Lows in the mid 30s. Highs around 50.",
                  "start": "2015-03-30T18:00:00.000",
                  "end": "2015-03-31T18:00:00.000",
                  "tags": [

                    {

                        "key": "Prevailing Conditions",
                        "value": "Partly Cloudy"
                    }

                  ]

              }
        ,
              {

                  "day": "Tuesday Night",
                  "forecast": "Mostly cloudy with a chance of rain and snow showers. Lows in the lower 30s. Chance of precipitation 40 percent.",
                  "start": "2015-03-31T18:00:00.000",
                  "end": "2015-04-01T06:00:00.000",
                  "tags": [

                    {

                        "key": "Prevailing Conditions",
                        "value": "Snow"
                    }

                  ]

              }
        ,
              {

                  "day": "Wednesday",
                  "forecast": "Partly sunny with a chance of rain and snow showers. Highs in the mid 40s. Chance of precipitation 30 percent.",
                  "start": "2015-04-01T06:00:00.000",
                  "end": "2015-04-01T18:00:00.000",
                  "tags": [

                    {

                        "key": "Prevailing Conditions",
                        "value": "Snow"
                    }

                  ]

              }
        ,
              {

                  "day": "Wednesday Night",
                  "forecast": "Partly cloudy. Lows in the lower 30s. ",
                  "start": "2015-04-01T18:00:00.000",
                  "end": "2015-04-02T06:00:00.000",
                  "tags": [

                    {

                        "key": "Prevailing Conditions",
                        "value": "Partly Cloudy"
                    }

                  ]

              }
        ,
              {

                  "day": "Thursday",
                  "forecast": "Partly sunny with a 30 percent chance of rain. Highs around 50.",
                  "start": "2015-04-02T06:00:00.000",
                  "end": "2015-04-02T18:00:00.000",
                  "tags": [

                    {

                        "key": "Prevailing Conditions",
                        "value": "Rain"
                    }

                  ]

              }
        ,
              {

                  "day": "Thursday Night",
                  "forecast": "Mostly cloudy with a 40 percent chance of rain. Lows in the mid 30s.",
                  "start": "2015-04-02T18:00:00.000",
                  "end": "2015-04-03T06:00:00.000",
                  "tags": [

                    {

                        "key": "Prevailing Conditions",
                        "value": "Rain"
                    }

                  ]

              }
        ,
              {

                  "day": "Friday",
                  "forecast": "Partly sunny. Highs in the lower 50s. ",
                  "start": "2015-04-03T06:00:00.000",
                  "end": "2015-04-03T18:00:00.000",
                  "tags": [

                    {

                        "key": "Prevailing Conditions",
                        "value": "Partly Sunny"
                    }

                  ]

              }

            ]

        }
,
        "appendix": {

            "airports": [

              {

                  "fs": "BOS",
                  "iata": "BOS",
                  "icao": "KBOS",
                  "faa": "BOS",
                  "name": "Logan International Airport",
                  "street1": "One Harborside Drive",
                  "street2": "",
                  "city": "Boston",
                  "cityCode": "BOS",
                  "stateCode": "MA",
                  "postalCode": "02128-2909",
                  "countryCode": "US",
                  "countryName": "United States",
                  "regionName": "North America",
                  "timeZoneRegionName": "America/New_York",
                  "weatherZone": "MAZ015",
                  "localTime": "2015-03-28T02:19:24.082",
                  "utcOffsetHours": -4.0,
                  "latitude": 42.36646,
                  "longitude": -71.020176,
                  "elevationFeet": 19,
                  "classification": 1,
                  "active": true,
                  "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/BOS?codeType=fs"
              }

            ]

        }

    }*/
    

});

