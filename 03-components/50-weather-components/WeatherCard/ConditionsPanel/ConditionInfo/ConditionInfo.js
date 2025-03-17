import { defineComponent } from 'vue'
import './ConditionInfo.css'

export const ConditionInfo = defineComponent({
  name: 'ConditionInfo',

  props: {
    conditionName: {
      type: String,
      required: true,
    },

    conditionValue: {
      type: Number,
      required: true,
    },
  },

  template: `
    <div class="weather-details__item">
      <div class="weather-details__item-label">{{ conditionName }}</div>
      <div class="weather-details__item-value">{{ conditionValue }}</div>
    </div>
  `,
})
