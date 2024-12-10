export const formatDate = (date:number) => (
  new Intl.DateTimeFormat('pt-PT').format(date)
)
