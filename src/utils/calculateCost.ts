import { TransportParams } from '@/types/transportForm.types'

export const calculateCost = ({
  unloadAddress,
  cargoType,
  cargoWeight,
  palletCount,
  boxCount
}: TransportParams) => {
  const isPallet = cargoType === 'Паллет'
  const pallets = isPallet ? palletCount : Math.ceil(palletCount / 10)

  switch (unloadAddress) {
    // Доставка до СЦ и РЦ Маркетплейсов по Москве и МО
    case 'Доставка до СЦ и РЦ по Москве и МО':
      if (cargoWeight < 1.5) {
        if (!isPallet && boxCount <= 10) return 2000 // до 1 м.куб (до 10 коробок)
        if (pallets === 1) return 2500
        if (pallets >= 2 && pallets <= 4) return 4000
        if (pallets === 5) return 5000
        if (pallets === 6) return 6000
        if (pallets === 7) return 7000
        if (pallets === 8) return 8000
        if (pallets === 9) return 9000
        if (pallets === 10) return 10000
      } else if (cargoWeight < 3) {
        if (pallets === 6) return 7000
        if (pallets === 7) return 8000
        if (pallets === 8) return 9000
        if (pallets === 9) return 10000
        if (pallets === 10) return 11000
        if (pallets === 11) return 12000
        if (pallets === 12) return 13000
      } else if (cargoWeight <= 5) {
        if (pallets === 8) return 10000
        if (pallets === 9) return 11000
        if (pallets === 10) return 12000
        if (pallets === 11) return 13000
        if (pallets === 12) return 14000
        if (pallets >= 13 && pallets <= 15) return 15000
      }
      break

    // Доставка до РЦ Алексин и Тверь (одинаковые тарифы)
    case 'Доставка до РЦ Алексин':
    case 'Доставка до РЦ Тверь':
      if (cargoWeight < 1.5) {
        if (pallets === 1) return 4000
        if (pallets >= 2 && pallets <= 4) return 8000
        if (pallets >= 5 && pallets <= 6) return 11000
        if (pallets >= 7 && pallets <= 8) return 14000
        if (pallets >= 9 && pallets <= 10) return 18000
      } else if (cargoWeight < 3) {
        if (pallets >= 5 && pallets <= 6) return 14000
        if (pallets >= 7 && pallets <= 8) return 16000
        if (pallets >= 9 && pallets <= 10) return 22000
        if (pallets >= 11 && pallets <= 12) return 24000
      } else if (cargoWeight <= 5) {
        if (pallets >= 13 && pallets <= 15) return 26000
      }
      break

    // Доставка до РЦ Казань (Зеленодольск)
    case 'Доставка до РЦ Казань (Зеленодольск)':
      if (pallets >= 1 && pallets <= 8) return pallets * 5000
      if (pallets >= 9 && pallets <= 20) return pallets * 4500
      break

    // Доставка до Краснодара
    case 'Доставка до Краснодара':
      if (pallets >= 1 && pallets <= 20) return pallets * 7000
      break

    // Доставка до Твери
    case 'Доставка до Твери':
      if (cargoWeight < 1.5) {
        if (pallets >= 5 && pallets <= 6) return 13000
        if (pallets >= 7 && pallets <= 8) return 16000
        if (pallets >= 9 && pallets <= 12) return 19000
        if (pallets >= 13 && pallets <= 15) return 22000
      } else if (cargoWeight <= 3) {
        if (pallets >= 5 && pallets <= 6) return 16000
        if (pallets >= 7 && pallets <= 8) return 19000
        if (pallets >= 9 && pallets <= 12) return 22000
        if (pallets >= 13 && pallets <= 15) return 25000
      }
      break

    // Для "Свой вариант" возвращаем 0
    case 'Свой вариант':
      return 0
  }
}
