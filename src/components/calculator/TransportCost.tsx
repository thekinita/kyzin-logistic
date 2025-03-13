import { TransportParams } from '@/types/transportForm.types'
import { calculateCost } from '@/utils/calculateCost'

export const TransportCost = ({
  unloadAddress,
  cargoType,
  cargoWeight,
  cargoCount
}: TransportParams) => {
  const cost = calculateCost({
    cargoCount,
    cargoType,
    cargoWeight,
    unloadAddress
  })

  if ((cargoType === 'Паллет' && cargoCount > 15) || cargoWeight > 5) {
    return (
      <span className='text-xs opacity-70'>
        Поставки объемом свыше 15 паллет и весом более 5 тонн расчитываются
        индивидуально. Точную стоимость и возможность отгрузки сообщит менеджер.
      </span>
    )
  }

  if (
    (cargoType === 'Короб' && cargoCount > 10) ||
    cargoType === 'Иное' ||
    unloadAddress === 'Свой вариант' ||
    cost === 0 ||
    cost === undefined
  ) {
    return (
      <span className='text-xs opacity-70'>
        Точную стоимость и возможность отгрузки сообщит менеджер.
      </span>
    )
  }

  return (
    <div className='grid'>
      <span className='text-xs opacity-70'>
        Стоимость является предварительной и может измениться, например в связи
        с забором груза за МКАД. Точную стоимость и возможность отгрузки сообщит
        менеджер.
      </span>
      <span className='font-bold text-xl mt-2'>{cost + ' руб.'}</span>
    </div>
  )
}
