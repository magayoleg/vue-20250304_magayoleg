import { defineComponent } from 'vue'
import './CityInfo.css'

export const CityInfo = defineComponent({
  name: 'CityInfo',

  props: {
    city: {
      type: String,
      required: true,
    },

    time: {
      type: String,
      required: true,
    },
  },

  template: `
    <div>
      <h2 class="city-info__name">{{ city }}</h2>
      <div class="weather-card__time">{{ time }}</div>
    </div>
  `,
})
