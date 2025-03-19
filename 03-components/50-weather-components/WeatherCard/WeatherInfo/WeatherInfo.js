import { defineComponent } from 'vue'
import { WeatherConditionIcons } from '../../weather.service.ts'
import './WeatherInfo.css'

export default defineComponent({
  name: 'WeatherInfo',

  props: {
    weather: {
      type: Object,
      required: true
    },

    temp: {
      type: String,
      required: true,
    },
  },

  setup(props) {

    return {
      icon: WeatherConditionIcons[props.weather.id]
    }
  },

  template: `
    <div class="weather-conditions">
      <div class="weather-conditions__icon" :title="weather.description">{{ icon }}</div>
      <div class="weather-conditions__temp">{{ temp }} °C</div>
    </div>
  `,
})
