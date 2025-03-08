import { defineComponent, ref, watch } from 'vue'

export default defineComponent({
  name: 'CalculatorApp',

  setup() {
    const firstOperand = ref('');
    const secondOperand = ref('');
    const operator = ref('sum');
    const count = ref('');

    function calculation(firstOperand, secondOperand, operator) {
      switch (operator) {
        case 'sum':
          return firstOperand + secondOperand;
        case 'subtract':
          return firstOperand - secondOperand;
        case 'multiply':
          return firstOperand * secondOperand;
        case 'divide':
          return firstOperand / secondOperand;
      }
    }

    watch(firstOperand, (newFirstOperand) => {
      count.value = calculation(newFirstOperand, secondOperand.value, operator.value)
    });

    watch(secondOperand, (newSecondOperand) => {
      count.value = calculation(firstOperand.value, newSecondOperand, operator.value)
    });

    watch(operator, (operator) => {
      count.value = calculation(firstOperand.value, secondOperand.value, operator)
    });

    return {
      firstOperand,
      secondOperand,
      operator,
      count,
    }
  },

  template: `
    <div class="calculator">
      <input type="number" aria-label="First operand" v-model="firstOperand"/>

      <div class="calculator__operators">
        <label><input type="radio" name="operator" value="sum" v-model="operator"/>➕</label>
        <label><input type="radio" name="operator" value="subtract" v-model="operator"/>➖</label>
        <label><input type="radio" name="operator" value="multiply" v-model="operator"/>✖</label>
        <label><input type="radio" name="operator" value="divide" v-model="operator"/>➗</label>
      </div>

      <input type="number" aria-label="Second operand" v-model="secondOperand"/>

      <div>=</div>

      <output>{{ count }}</output>
    </div>
  `,
})
