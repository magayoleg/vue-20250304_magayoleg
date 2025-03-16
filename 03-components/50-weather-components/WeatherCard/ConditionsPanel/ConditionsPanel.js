import { defineComponent, computed } from 'vue'
import './ConditionsPanel.css'
import { ConditionInfo } from './ConditionInfo'

const CONDITION_NAME = {
  pressure: 'Давление, мм рт. ст.',
  humidity: 'Влажность, %',
  clouds: 'Облачность, %',
  windSpeed: 'Ветер, м/с',
}

export const ConditionsPanel = defineComponent({
  name: 'ConditionsPanel',

  components: {
    ConditionInfo,
  },

  props: {
    conditions: {
      type: Object,
      required: true,

      pressure: {
        type: Object,
        required: true,
      },

      humidity: {
        type: Object,
        required: true,
      },

      clouds: {
        type: Object,
        required: true,
      },

      windSpeed: {
        type: Object,
        required: true,
      },
    },
  },

  setup(props) {

    const conditionsList = computed(() => {
      return Object.entries(props.conditions).map(([key, value]) => {
        return {
          conditionName: CONDITION_NAME[key],
          conditionValue: value,
        }
      })
    })

    return {
      conditionsList,
    }
  },

  template: `
    <div class="conditions-panel">
      <ConditionInfo
        v-for="condition in conditionsList"
        :key="condition.conditionName"
        :conditionName="condition.conditionName"
        :conditionValue="condition.conditionValue"
      />
    </div>
  `,
})
