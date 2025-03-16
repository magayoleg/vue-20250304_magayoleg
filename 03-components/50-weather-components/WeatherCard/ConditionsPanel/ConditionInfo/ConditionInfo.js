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
    <div class="condition-info__item">
      <div class="condition-info__item-label">{{ conditionName }}</div>
      <div class="condition-info__item-value">{{ conditionValue }}</div>
    </div>
  `,
})
