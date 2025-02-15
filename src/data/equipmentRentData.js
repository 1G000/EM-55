export const equipmentRentData = [
  {
    id: "eq-0",
    label: 'Наименование техники',
    type: "text",
    model: 'name'
  },
  {
    id: "eq-1",
    label: 'Дата и время начала аренды на объекте',
    type: "date",
    model: 'dateTime'
  },
  {
    id: "eq-2",
    label: 'Срок аренды в сменах',
    type: "number",
    model: 'period'
  },
  {
    id: "eq-3",
    label: 'Контактные данные (Ф.И.О) на объекте',
    type: "text",
    model: 'contacts'
  },
  {
    id: "eq-4",
    label: 'Должность ответственного на объекте',
    type: "text",
    model: 'position'
  },
  {
    id: "eq-5",
    label: 'Мобильный телефон',
    type: "tel",
    model: 'tel'
  },
  {
    id: "eq-6",
    label: 'Название организации (плательщик) для счета на оплату',
    type: "text",
    model: 'payer'
  },
  {
    id: "eq-7",
    label: 'ИНН/КПП',
    type: "text",
    model: 'innKpp'
  },
  {
    id: "eq-8",
    label: 'Адрес эл. почты организации (для отправки счета)',
    type: "email",
    model: 'mail'
  },
  {
    id: "eq-9",
    label: 'Дополнительные данные',
    type: "text",
    model: 'additionalInfo'
  }
]