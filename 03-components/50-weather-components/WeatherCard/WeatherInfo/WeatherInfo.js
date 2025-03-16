import { defineComponent } from 'vue'
import './WeatherInfo.css'

export const WeatherInfo = defineComponent({
  name: 'WeatherInfo',

  props: {
    icon: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    temp: {
      type: Number,
      required: true,
    },
  },

  template: `
    <div class="weather-info">
      <div class="weather-info__icon" :title="title">{{ icon }}</div>
      <div class="weather-info__temp">{{ temp }} °C</div>
    </div>
  `,
})
