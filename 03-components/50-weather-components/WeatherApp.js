import { defineComponent, onMounted, ref } from 'vue'
import { getWeatherData, WeatherConditionIcons } from './weather.service.ts'
import './WeatherApp.css'
import { WeatherTitle } from './WeatherTitle'
import { WeatherCard } from './WeatherCard'

const weather = getWeatherData()

export default defineComponent({
  name: 'WeatherApp',

  components: {
    WeatherTitle,
    WeatherCard,
  },

  setup() {
    const weatherData = ref([])

    weatherData.value = weather.map(({ geographic_name, current, alert }) => ({
      geographic_name,
      alert,
      current: {
        ...current,
        weather: {
          ...current.weather,
          icon: WeatherConditionIcons[current.weather.id],
        },
      },
    }))

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
