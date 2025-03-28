export const AGENDA_ITEM_DEFAULT_TITLES = {
  registration: 'Регистрация',
  opening: 'Открытие',
  break: 'Перерыв',
  coffee: 'Coffee Break',
  closing: 'Закрытие',
  afterparty: 'Afterparty',
  talk: 'Доклад',
  other: 'Другое',
} as const;

type AgendaItemDefaultTitlesType = typeof AGENDA_ITEM_DEFAULT_TITLES;
export type ValuesUnionTitlesType = AgendaItemDefaultTitlesType[keyof AgendaItemDefaultTitlesType];

export const AGENDA_ITEM_ICONS = {
  registration: 'key',
  opening: 'cal-sm',
  talk: 'tv',
  break: 'clock',
  coffee: 'coffee',
  closing: 'key',
  afterparty: 'cal-sm',
  other: 'cal-sm',
} as const;

type AgendaItemIconsType = typeof AGENDA_ITEM_ICONS;
export type ValuesUnionIconsType = AgendaItemIconsType[keyof AgendaItemIconsType];
