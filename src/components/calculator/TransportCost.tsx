import { TransportParams } from '@/types/transportForm.types'
import { calculateCost } from '@/utils/calculateCost'

export const TransportCost = ({
  unloadAddress,
  cargoType,
  cargoWeight,
  palletCount,
  boxCount
}: TransportParams) => {
  const cost = calculateCost({
    palletCount,
    cargoType,
    cargoWeight,
    unloadAddress,
    boxCount
  })

  if ((cargoType === 'Паллет' && palletCount > 15) || cargoWeight > 5) {
    return (
      <span className="text-center text-xs text-accent">
        Поставки объемом свыше 15 паллет и весом более 5 тонн расчитываются
        индивидуально. Точную стоимость и возможность отгрузки сообщит менеджер.
      </span>
    )
  }

  if (
    (cargoType === 'Короб' && boxCount > 10) ||
    cargoType === 'Комбинированно' ||
    cargoType === 'Укажу размеры' ||
    unloadAddress === 'Свой вариант' ||
    cost === 0 ||
    cost === undefined
  ) {
    return (
      <span className="text-center text-xs text-accent">
        Точную стоимость и возможность отгрузки сообщит менеджер.
      </span>
    )
  }

  return (
    <div className="grid">
      <span className="text-xs opacity-70">
        Стоимость является предварительной и может измениться, например в связи
        с забором груза за МКАД. Точную стоимость и возможность отгрузки сообщит
        менеджер.
      </span>
      <span className="font-bold mt-2 text-xl text-accent">
        {cost + ' руб.'}
      </span>
    </div>
  )
}
