import { defineComponent } from 'vue'
import './WeatherAlert.css'

export const WeatherAlert = defineComponent({
  name: 'WeatherAlert',

  props: {
    alert: {
      type: Object,
      required: true,

      sender_name: {
        type: String,
        required: true,
      },

      description: {
        type: String,
        required: true,
      },
    },
  },

  template: `
    <div class="weather-alert">
      <span class="weather-alert__icon">⚠️</span>
      <span class="weather-alert__description">{{ alert.sender_name }}: {{ alert.description }}</span>
    </div>
  `,
})
