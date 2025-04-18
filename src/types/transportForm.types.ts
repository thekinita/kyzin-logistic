type UnloadAddress =
  | 'Доставка до СЦ и РЦ по Москве и МО'
  | 'Доставка до РЦ Алексин'
  | 'Доставка до РЦ Тверь'
  | 'Доставка до РЦ Казань (Зеленодольск)'
  | 'Доставка до Краснодара'
  | 'Доставка до Твери'
  | 'Свой вариант'

type CargoType = 'Короб' | 'Паллет' | 'Комбинированно' | 'Укажу размеры'

export interface TransportParams {
  unloadAddress: UnloadAddress | string
  cargoType: CargoType
  cargoWeight: number
  palletCount: number
  boxCount: number
}
