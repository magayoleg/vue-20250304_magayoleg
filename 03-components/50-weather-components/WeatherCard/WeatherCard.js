import { defineComponent, computed } from 'vue'
import './WeatherCard.css'
import { WeatherAlert } from './WeatherAlert'
import { CityInfo } from './CityInfo'
import { WeatherInfo } from './WeatherInfo'
import { ConditionsPanel } from './ConditionsPanel'
export const WeatherCard = defineComponent({
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

      alert: {
        type: Object,

        sender_name: {
          type: String,
          required: true,
        },

        description: {
          type: String,
          required: true,
        },
      },

      geographic_name: {
        type: String,
        required: true,
      },

      current: {
        type: Object,
        required: true,

        dt: {
          type: String,
          required: true,
        },

        sunrise: {
          type: String,
          required: true,
        },

        sunset: {
          type: String,
          required: true,
        },

        temp: {
          type: Number,
          required: true,
        },

        pressure: {
          type: Number,
          required: true,
        },

        humidity: {
          type: Number,
          required: true,
        },

        clouds: {
          type: Number,
          required: true,
        },

        visibility: {
          type: Number,
          required: true,
        },

        wind_speed: {
          type: Number,
          required: true,
        },

        weather: {
          type: Object,
          required: true,
          id: {
            type: Number,
            required: true,
          },

          main: {
            type: String,
            required: true,
          },

          description: {
            type: String,
            required: true,
          },

          icon: {
            type: String,
            required: true,
          },
        },
      },
    },
  },

  setup(props) {
    const kelvinToCelsius = computed(() => {
      return (-273.15 + props.weatherInfo.current.temp).toFixed(1)
    })

    const hPaToMmHg = computed(() => {
      return Math.round(props.weatherInfo.current.pressure * 0.75);
    })

    return {
      temperature: kelvinToCelsius,
      conditions: {
        pressure: hPaToMmHg.value,
        humidity: props.weatherInfo.current.humidity,
        clouds: props.weatherInfo.current.clouds,
        windSpeed: props.weatherInfo.current.wind_speed,
      }
    }
  },

  template: `
    <li class="weather-card" :class="{ 'weather-card_night': weatherInfo.current.dt < weatherInfo.current.sunrise || weatherInfo.current.dt > weatherInfo.current.sunset }">
      <WeatherAlert v-if="weatherInfo.alert" :alert="weatherInfo.alert"/>
      <CityInfo :city="weatherInfo.geographic_name" :time="weatherInfo.current.dt"/>
      <WeatherInfo
        :icon="weatherInfo.current.weather.icon"
        :title="weatherInfo.current.weather.description"
        :temp="temperature"
      />
      <ConditionsPanel :conditions="conditions"/>
    </li>
  `,
})
