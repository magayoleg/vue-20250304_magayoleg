<script lang="ts">
import type { MeetupAgendaItemDTO } from '@shgk/vue-course-ui'
import type { PropType } from 'vue'
import MeetupAgendaItem from './MeetupAgendaItem.vue'

export default {
  components: {
    MeetupAgendaItem,
  },

  props: {
    agenda: {
      // Настоящий тип - массив объектов типа MeetupAgendaItemDTO
      type: Array as PropType<MeetupAgendaItemDTO[]>,
      required: true,
    },
  },
}
</script>

<template>
  <ul class="agenda">
    <li v-for="agendaItem in agenda" :key="agendaItem.id" class="agenda__item">
      <MeetupAgendaItem :agenda-item="agendaItem" />
    </li>
  </ul>
</template>

<style scoped>
/* _agenda.css */
.agenda__item {
  border-block-start: var(--border-width-small) solid var(--grey-3);
}

.agenda__item:first-child {
  border-block-start: none;
}
</style>
