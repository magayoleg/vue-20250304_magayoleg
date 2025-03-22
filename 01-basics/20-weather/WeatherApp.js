import { defineComponent } from 'vue'
import { getWeatherData, WeatherConditionIcons } from './weather.service.ts'

export default defineComponent({
  name: 'WeatherApp',

  setup() {

    function kelvinToCelsius(temp) {
      return (-273.15 + temp).toFixed(1) + ' °C';
    }

    function hPaToMmHg(pressure) {
      return Math.round(pressure * 0.75);
    }

    return {
      weatherData: getWeatherData(),
      WeatherConditionIcons,
      kelvinToCelsius,
      hPaToMmHg
    }
  },

  template: `
    <div class="weather-container">
      <h1 class="title">Погода в Средиземье</h1>
      <ul class="weather-list unstyled-list" v-for="weather in weatherData">
        <li class="weather-card" :class="{ 'weather-card--night': weather.current.dt < weather.current.sunrise || weather.current.dt > weather.current.sunset }">
          <div class="weather-alert" v-if="weather.alert">
            <span class="weather-alert__icon">⚠️</span>
            <span class="weather-alert__description">{{ weather.alert.sender_name }}: {{ weather.alert.description }}</span>
          </div>
          <div>
            <h2 class="weather-card__name">
              {{ weather.geographic_name }}
            </h2>
            <div class="weather-card__time">
              {{ weather.current.dt}}
            </div>
          </div>
          <div class="weather-conditions">
            <div class="weather-conditions__icon" :title="weather.current.weather.description">{{ WeatherConditionIcons[weather.current.weather.id] }}</div>
            <div class="weather-conditions__temp">{{ kelvinToCelsius(weather.current.temp) }}</div>
          </div>
          <div class="weather-details">
            <div class="weather-details__item">
              <div class="weather-details__item-label">Давление, мм рт. ст.</div>
              <div class="weather-details__item-value">{{ hPaToMmHg(weather.current.pressure) }}</div>
            </div>
            <div class="weather-details__item">
              <div class="weather-details__item-label">Влажность, %</div>
              <div class="weather-details__item-value">{{ weather.current.humidity }}</div>
            </div>
            <div class="weather-details__item">
              <div class="weather-details__item-label">Облачность, %</div>
              <div class="weather-details__item-value">{{ weather.current.clouds }}</div>
            </div>
            <div class="weather-details__item">
              <div class="weather-details__item-label">Ветер, м/с</div>
              <div class="weather-details__item-value">{{ weather.current.wind_speed }}</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  `,
})
