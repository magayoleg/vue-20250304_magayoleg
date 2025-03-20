import { defineComponent, computed } from 'vue'
import './WeatherCard.css'
import WeatherAlert from './WeatherAlert/WeatherAlert'
import CityInfo from './CityInfo/CityInfo'
import WeatherInfo from './WeatherInfo/WeatherInfo'
import ConditionsPanel from './ConditionsPanel/ConditionsPanel'

export default defineComponent({
  name: 'WeatherCard',

  components: {
    WeatherAlert,
    CityInfo,
    WeatherInfo,
    ConditionsPanel,
  },

  props: {
    weatherInfo: {
      type: Object,
      required: true,
    },
  },

  setup(props) {
    const kelvinToCelsius = computed(() => {
      return (-273.15 + props.weatherInfo.current.temp).toFixed(1);
    })

    const hPaToMmHg = computed(() => {
      return Math.round(props.weatherInfo.current.pressure * 0.75)
    })

    return {
      temperature: kelvinToCelsius,
      conditions: {
        pressure: hPaToMmHg.value,
        humidity: props.weatherInfo.current.humidity,
        clouds: props.weatherInfo.current.clouds,
        windSpeed: props.weatherInfo.current.wind_speed,
      },
    }
  },

  template: `
    <li class="weather-card" :class="{ 'weather-card--night': weatherInfo.current.dt < weatherInfo.current.sunrise || weatherInfo.current.dt > weatherInfo.current.sunset }">
      <WeatherAlert v-if="weatherInfo.alert" :alert="weatherInfo.alert"/>
      <CityInfo :city="weatherInfo.geographic_name" :time="weatherInfo.current.dt"/>
      <WeatherInfo
        :weather="weatherInfo.current.weather"
        :temp="temperature"
      />
      <ConditionsPanel :conditions="conditions"/>
    </li>
  `,
})
