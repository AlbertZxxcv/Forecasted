import React, { Component } from 'react'
import './index.css'

export default class Product extends Component {
  sendAjax = (url) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.responseType = 'json';
      xhr.open("GET", url);
      xhr.send();
      // handle the result
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status >= 200 && xhr.status < 300) {
            resolve(xhr.response);
          } else {
            reject(xhr.status);
          }
        }
      }

    })
  }

  printDate = (date) => {
    var futureDay = "";
    if (date === 0) {
      futureDay = "Sunday";
    } else if (date === 1) {
      futureDay = "Monday";
    } else if (date === 2) {
      futureDay = "Tuesday";
    } else if (date === 3) {
      futureDay = "Wednesday";
    } else if (date === 4) {
      futureDay = "Thursday";
    } else if (date === 5) {
      futureDay = "Friday";
    } else if (date === 6) {
      futureDay = "Saturday";
    }
    return futureDay;
  }

  weatherPredict = (url) => {
    this.sendAjax(url).then(value => {
      let cityJason = value;
      console.log(cityJason);
      let lat = value.results[0].geometry.location.lat;
      let lon = value.results[0].geometry.location.lng;
      var cityName = value.results[0].address_components[0].short_name;
      this.currentCityWeather.innerText = cityName + " Current Weather";
      let weatherUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat='
      weatherUrl += lat.toString() + '&lon=' + lon.toString() + '&exclude=minutely&appid=9273298e14ccf3f1994c757bb1364252&units=metric';
      this.sendAjax(weatherUrl).then(value => {
        let weatherJason = value;
        console.log(weatherJason);
        var temp = weatherJason.current.temp;
        this.tempref.innerText = temp + " ℃";;

        var humidty = weatherJason.current.humidity;
        this.humidty.innerText = "Humidty: " + humidty + "%";

        var feelLike = weatherJason.current.feels_like;
        this.feel.innerText = "feel like: " + feelLike.toString() + " ℃";

        var wind = weatherJason.current.wind_speed;
        this.wind.innerText = "Wind: " + wind + " km/h";

        let icon = weatherJason.current.weather[0].icon;
        let iconUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
        this.icon.innerHTML = "<img src = " + iconUrl + ">";

        let date = new Date();
        let today = date.getDay();
        let day = [today + 1, (today + 2) % 7, (today + 3) % 7];

        let futureIcon1 = weatherJason.daily[1].weather[0].icon;
        let futureIconUrl1 = "http://openweathermap.org/img/wn/" + futureIcon1 + "@2x.png";
        this.icon1.innerHTML = "<img src = " + futureIconUrl1 + ">";

        let futureIcon2 = weatherJason.daily[2].weather[0].icon;
        let futureIconUrl2 = "http://openweathermap.org/img/wn/" + futureIcon2 + "@2x.png";
        this.icon2.innerHTML = "<img src = " + futureIconUrl2 + ">";

        let futureIcon3 = weatherJason.daily[3].weather[0].icon;
        let futureIconUrl3 = "http://openweathermap.org/img/wn/" + futureIcon3 + "@2x.png";
        this.icon3.innerHTML = "<img src = " + futureIconUrl3 + ">";


        let futureTempMAX1 = weatherJason.daily[1].temp.max;
        let futureTempMIN1 = weatherJason.daily[1].temp.min;
        this.day1temp.innerText = futureTempMIN1 + "℃ - " + futureTempMAX1 + "℃";

        let futureTempMAX2 = weatherJason.daily[2].temp.max;
        let futureTempMIN2 = weatherJason.daily[2].temp.min;
        this.day2temp.innerText = futureTempMIN2 + "℃ - " + futureTempMAX2 + "℃";

        let futureTempMAX3 = weatherJason.daily[3].temp.max;
        let futureTempMIN3 = weatherJason.daily[3].temp.min;
        this.day3temp.innerText = futureTempMIN3 + "℃ - " + futureTempMAX3 + "℃";

        this.day1day.innerText = this.printDate(day[0]);
        this.day2day.innerText = this.printDate(day[1]);
        this.day3day.innerText = this.printDate(day[2]);

      }, reason => {
        console.log(reason);
      });
    }, reason => {
      console.warn(reason);
    })
  }

  changeLocation = () =>{
    var locationUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
    var address = this.input.value;
    locationUrl += address + '&key=AIzaSyBa133NrYi6BLWF2JW0mP3Dv10VI-0FbKc';
    this.weatherPredict(locationUrl);
  }

  render() {
    var locationUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
    var address = 'toronto';
    locationUrl += address + '&key=AIzaSyBa133NrYi6BLWF2JW0mP3Dv10VI-0FbKc';
    this.weatherPredict(locationUrl);
    return (
      <div>
        <div id="content">
          <div id="margin">
            <input type="text" id="cityInput" placeholder="Enter the City Here" ref={c=>this.input=c}/>
            <button id="btnSearch" onClick={this.changeLocation}>Search</button>
          </div>
        </div>
        <div id="content">
          <div id="margin">
            <h3 id="currentCityWeather" ref={c => this.currentCityWeather = c}>Toronto Current Weather</h3>
            <div id="weatherDispaly">
              <div id="icon" ref={c => this.icon = c}></div>
              <h1 id="temp" ref={c => this.tempref = c}>28</h1>
              <div>
                <p id="feel" ref={c => this.feel = c}>feel like: 25 </p>
                <p id="humidty" ref={c => this.humidty = c}>Humidty: 30%</p>
                <p id="wind" ref={c => this.wind = c}>Wind: 10 km/h</p>
              </div>
            </div>
          </div>
        </div>
        <div id="content">
          <div id="margin">
            <h3>Future Weather</h3>
            <div id="weatherDispaly">
              <div id="futureWeather">
                <div id="icon1" ref={c => this.icon1 = c}></div>
                <p id="day1temp" ref={c => this.day1temp = c}>25 - 30</p>
                <p id="day1day" ref={c => this.day1day = c}>Monday</p>
              </div>

              <div id="futureWeather">
                <div id="icon1" ref={c => this.icon2 = c}></div>
                <p id="day1temp" ref={c => this.day2temp = c}>25 - 30</p>
                <p id="day1day" ref={c => this.day2day = c}>Monday</p>
              </div>

              <div id="futureWeather">
                <div id="icon1" ref={c => this.icon3 = c}></div>
                <p id="day1temp" ref={c => this.day3temp = c}>25 - 30</p>
                <p id="day1day" ref={c => this.day3day = c}>Monday</p>
              </div>
              {/* 
              <div id="futureWeather">
                <div id="icon3"></div>
                <p id="day3temp">24 - 30</p>
                <p id="day3day">Monday</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
