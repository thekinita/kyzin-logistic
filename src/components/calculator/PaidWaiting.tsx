import { TransportParams } from '@/types/transportForm.types'

export const PaidWaiting = ({
  unloadAddress,
  cargoWeight,
  cargoType,
  cargoCount
}: TransportParams) => {
  const cost =
    cargoWeight < 1.5 && cargoCount <= 10
      ? 700
      : cargoWeight >= 1.5 && cargoWeight < 3 && cargoCount <= 12
      ? 800
      : cargoWeight >= 3 && 1000

  if (
    (cargoType === 'Паллет' &&
      cargoWeight <= 5 &&
      cargoCount <= 15 &&
      unloadAddress === 'Доставка до СЦ и РЦ по Москве и МО') ||
    unloadAddress === 'Доставка до РЦ Алексин' ||
    unloadAddress === 'Доставка до РЦ Тверь'
  ) {
    return (
      <span className='text-xs'>
        Ожидание на выгрузке 2 ч. бесплатно, далее {cost} руб./ч.
      </span>
    )
  }

  return (
    <span className='text-xs'>
      Стоимость простоя на выгрузке обсужается индивидуально.
    </span>
  )
}
