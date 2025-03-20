import { defineComponent, computed } from 'vue'
import { getWeatherData } from './weather.service.ts'
import './WeatherApp.css'
import WeatherTitle from './WeatherTitle/WeatherTitle.js'
import WeatherCard from './WeatherCard/WeatherCard.js'

export default defineComponent({
  name: 'WeatherApp',

  components: {
    WeatherTitle,
    WeatherCard,
  },

  setup() {
    const weatherData = computed(() => getWeatherData());

    return {
      weatherData,
    }
  },

  template: `
    <div class="weather-section">
      <WeatherTitle :title="'Погода в Средиземье'" />
      <ul class="weather-list unstyled-list">
        <WeatherCard  v-for="weather of weatherData" :weatherInfo="weather"/>
      </ul>
    </div>
  `,
})
