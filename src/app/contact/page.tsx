'use client'

import { useEffect, useState } from 'react'
import { Button } from '@headlessui/react'
import formatPhoneNumber from '@/utils/formatPhoneNumber'
import { SelectForm } from '@/components/form-wrappers/SelectForm'
import { InputForm } from '@/components/form-wrappers/InputForm'
import { CheckboxForm } from '@/components/form-wrappers/CheckboxForm'
import { NumberInputForm } from '@/components/form-wrappers/NumberInputForm'
import { DateInputForm } from '@/components/form-wrappers/DateInputForm'
import { TransportCost } from '@/components/calculator/TransportCost'
import { PaidWaiting } from '@/components/calculator/PaidWaiting'
import { calculateCost } from '@/utils/calculateCost'
import { ArrowLeftIcon } from '@heroicons/react/16/solid'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const transportTypes = ['Маркетплейс', 'Транспортировка'] as const
const paymentMethods = ['Наличными', 'Безналичный', 'Переводом'] as const
const deliveryTypes = ['Короб', 'Паллет', 'Иное'] as const
const unloadAddresses = [
  'Доставка до СЦ и РЦ по Москве и МО',
  'Доставка до РЦ Алексин',
  'Доставка до РЦ Тверь',
  'Доставка до РЦ Казань (Зеленодольск)',
  'Доставка до Краснодара',
  'Доставка до Твери',
  'Свой вариант'
] as string[]

type FormData = {
  orgName: string
  transportType: (typeof transportTypes)[number]
  paymentMethod: (typeof paymentMethods)[number]
  loadDate: string
  loadTime: string
  loadAddress: string
  deliveryType: (typeof deliveryTypes)[number]
  loadContact: string
  loadPhone: string
  unloadDate: string
  unloadTime: string
  unloadAddress: (typeof unloadAddresses)[number]
  hasUnloadContact: boolean
  cargoType: (typeof deliveryTypes)[number]
  cargoCount: number
  cargoWeight: number
  orderContact: string
  orderPhone: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    orgName: '',
    transportType: transportTypes[0],
    paymentMethod: paymentMethods[0],
    loadDate: 'дд.мм.гггг',
    loadTime: '--:--',
    loadAddress: '',
    deliveryType: deliveryTypes[0],
    loadContact: '',
    loadPhone: '',
    unloadDate: 'дд.мм.гггг',
    unloadTime: '--:--',
    unloadAddress: unloadAddresses[0],
    hasUnloadContact: true,
    cargoType: deliveryTypes[0],
    cargoCount: 1,
    cargoWeight: 1,
    orderContact: '',
    orderPhone: ''
  })

  const data = {
    fields: {
      Организация: formData.orgName,
      Тип_перевозки: formData.transportType,
      Оплата: formData.paymentMethod,
      Дата_загрузки: formData.loadDate,
      Время_загрузки: formData.loadTime,
      Адрес_загрузки: formData.loadAddress,
      Тип_поставки: formData.deliveryType,
      Контакт_на_загрузке_имя: formData.loadContact,
      Контакт_на_загрузке_телефон: formData.loadPhone,
      Дата_выгрузки: formData.unloadDate,
      Время_выгрузки: formData.unloadTime,
      Адрес_выгрузки: formData.unloadAddress,
      Контакт_на_выгрузке: formData.hasUnloadContact,
      Тип_груза: formData.cargoType,
      Объём_груза: formData.cargoCount,
      Вес_груза: formData.cargoWeight,
      Контакт_по_заказу_имя: formData.orderContact,
      Контакт_по_заказу_телефон: formData.orderPhone,
      Стоимость: calculateCost({
        cargoCount: formData.cargoCount,
        cargoType: formData.cargoType,
        cargoWeight: formData.cargoWeight,
        unloadAddress: formData.unloadAddress
      })
    }
  }

  const router = useRouter()
  const [isFadeUp, setIsFadeUp] = useState(true)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const BASE_ID = 'app3Z47spktjduNdO'
  const TABLE_ID = 'tblax98VKBtvi7BcF'
  const AIRTABLE_API_TOKEN =
    'patsDkazSgQd1s5bX.d16760086c47ed2225684777b1b0278b12e2c378cc52ba5b577982f00ced0c8a'

  const handleChange = <K extends keyof FormData>(key: K, value: FormData[K]) =>
    setFormData((prev) => ({ ...prev, [key]: value }))

  const handleSubmit = async (e: React.FormEvent) => {
    setLoading(true)
    e.preventDefault()

    if (Object.values(formData).some((value) => value === '')) {
      setError('Все поля должны быть заполнены')
      setLoading(false)
      return
    }

    setError('')

    try {
      const response = await fetch(
        `https://api.airtable.com/v0/${BASE_ID}/${TABLE_ID}`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${AIRTABLE_API_TOKEN}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }
      )
      if (response.status === 200) {
        router.push('/contact/success')
      } else {
        router.push('/contact/error')
      }
    } catch {
      router.push('/contact/error')
    }
  }

  useEffect(() => {
    setTimeout(() => setIsFadeUp(false), 1000)
  }, [isFadeUp])

  return (
    <main className="min-h-screen py-8 text-forlight dark:text-fordark">
      <Link href="/">
        <ArrowLeftIcon className="w-7 absolute top-10 left-10 sm:left-16 hover:fill-accent duration-200" />
      </Link>
      <h2 className="text-4xl font-bold mb-6 text-center">Заявка</h2>
      <form
        onSubmit={handleSubmit}
        className={`max-w-2xl mx-auto p-6 ${
          isFadeUp ? '*:animate-fade-up *:opacity-0' : '*:opacity-100'
        }`}
      >
        <InputForm
          label="Название организации"
          value={formData.orgName}
          onChange={(e) => handleChange('orgName', e.target.value)}
          placeholder="ИП, ООО и тд."
        />
        <SelectForm
          label="Тип перевозки"
          value={formData.transportType}
          onChange={(val) => handleChange('transportType', val)}
          options={transportTypes}
        />
        <SelectForm
          label="Форма оплаты"
          value={formData.paymentMethod}
          onChange={(val) => handleChange('paymentMethod', val)}
          options={paymentMethods}
        />

        <div className="sm:flex gap-2">
          <DateInputForm
            label="Дата загрузки"
            type="date"
            value={formData.loadDate}
            onChange={(e) => handleChange('loadDate', e.target.value)}
            className="w-1/2"
          />
          <DateInputForm
            label="Время загрузки"
            type="time"
            value={formData.loadTime}
            onChange={(e) => handleChange('loadTime', e.target.value)}
            className="w-1/2"
          />
        </div>

        <InputForm
          label="Адрес загрузки"
          description="Забор груза за МКАД обсуждается отдельно (платно) и зависит от
            расстояния."
          value={formData.loadAddress}
          onChange={(e) => handleChange('loadAddress', e.target.value)}
          placeholder="Город, улица, дом"
        />
        <SelectForm
          label="Тип поставки"
          value={formData.deliveryType}
          onChange={(val) => handleChange('deliveryType', val)}
          options={deliveryTypes}
        />

        <div className="sm:flex gap-2">
          <InputForm
            label="Контакт на загрузке"
            value={formData.loadContact}
            onChange={(e) => handleChange('loadContact', e.target.value)}
            placeholder="Имя"
          />
          <InputForm
            type="tel"
            label="Телефон"
            value={formData.loadPhone}
            placeholder="+7 (999) 999-99-99"
            onChange={(e) =>
              handleChange('loadPhone', formatPhoneNumber(e.target.value))
            }
          />
        </div>

        <div className="sm:flex gap-2">
          <DateInputForm
            label="Дата выгрузки"
            type="date"
            value={formData.unloadDate}
            onChange={(e) => handleChange('unloadDate', e.target.value)}
            className="w-1/2"
          />
          <DateInputForm
            label="Время выгрузки"
            type="time"
            value={formData.unloadTime}
            onChange={(e) => handleChange('unloadTime', e.target.value)}
            className="w-1/2"
          />
        </div>

        {unloadAddresses.slice(0, 6).includes(formData.unloadAddress) ? (
          <SelectForm
            label="Адрес выгрузки"
            value={formData.unloadAddress}
            onChange={(val) => handleChange('unloadAddress', val)}
            options={unloadAddresses}
          />
        ) : (
          <InputForm
            label="Адрес выгрузки"
            value={formData.unloadAddress}
            onChange={(e) => handleChange('unloadAddress', e.target.value)}
            placeholder="Город, улица, дом"
          />
        )}
        <CheckboxForm
          label="Контакт на выгрузке"
          checked={formData.hasUnloadContact}
          onChange={(val) => handleChange('hasUnloadContact', val)}
        />

        <div className="sm:flex gap-2">
          <SelectForm
            label="Тип груза"
            value={formData.cargoType}
            onChange={(val) => handleChange('cargoType', val)}
            options={deliveryTypes}
          />
          {formData.cargoType !== 'Иное' && (
            <NumberInputForm
              label={
                formData.cargoType === 'Короб'
                  ? 'Количество коробов'
                  : 'Количество паллетов'
              }
              value={formData.cargoCount}
              onChange={(e) =>
                handleChange('cargoCount', Number(e.target.value))
              }
              min={1}
            />
          )}
          <NumberInputForm
            label="Вес груза (т)"
            value={formData.cargoWeight}
            onChange={(e) =>
              handleChange('cargoWeight', Number(e.target.value))
            }
            min={0}
            step={0.1}
          />
        </div>
        {formData.cargoType === 'Паллет' && (
          <div className="text-xs m-auto text-center opacity-70">
            <span>
              Паллеты предоставляются ПЛАТНО - 300 руб./шт. Паллетирование груза
              пленкой 300 руб./паллет
            </span>
          </div>
        )}

        <div className="sm:flex gap-2">
          <InputForm
            label="Контакт по заказу"
            value={formData.orderContact}
            onChange={(e) => handleChange('orderContact', e.target.value)}
            placeholder="Имя"
          />
          <InputForm
            type="tel"
            label="Телефон"
            value={formData.orderPhone}
            placeholder="+7 (999) 999-99-99"
            onChange={(e) =>
              handleChange('orderPhone', formatPhoneNumber(e.target.value))
            }
          />
        </div>

        <div className="p-2 grid gap-4">
          <TransportCost
            cargoCount={formData.cargoCount}
            cargoType={formData.cargoType}
            cargoWeight={formData.cargoWeight}
            unloadAddress={formData.unloadAddress}
          />
          <p className="text-xs">
            1. Погрузка 1 час бесплатно, далее 700 руб./час. Ожидание фуры -
            2000 руб./час. <br />
            2. Погрузка силами водителя в стоимость не входит. Стоимость
            погрузки силами водителя - 100 руб./короб весом до 20 кг. Свыше 20
            кг. 200 руб./короб. <br />
            3. При возврате поставки оплачивается полная стоимость поездки +50%
            за возврат, но не менее 3000 руб. и не более 5000 руб. При возврате
            фуры или пятитонника оплачивается полная стоимость поездки +100% за
            возврат. Платная подача за МКАД выставляется повторно. <br />
            4. При отправке меньшего количества мест, чем указано в заявке
            оплачивается полная стоимость. Например: в заявке указано 5 паллет,
            а по факту погрузили 4, то в в таком случае оплата будет за 5
            паллет. При отправке большего количества мест оплачивается
            фактический объем. <br />
            5. Ложная подача машины оплачивается в размере 100%.
          </p>
          <PaidWaiting
            cargoCount={formData.cargoCount}
            cargoType={formData.cargoType}
            cargoWeight={formData.cargoWeight}
            unloadAddress={formData.unloadAddress}
          />
        </div>

        <div className="pt-6 grid justify-center gap-2">
          {error && (
            <p className="text-red-500 text-center text-sm font-bold mt-2">
              {error}
            </p>
          )}
          <Button
            type="submit"
            disabled={loading}
            className="flex rounded-md bg-accent m-auto py-3 px-4 text-sm font-semibold text-white hover:bg-gray-300 hover:text-black focus:outline-none focus:border-1 focus:border-gray-300 transition-all cursor-pointer"
          >
            {loading ? 'Отправка...' : 'Отправить заявку'}
          </Button>
        </div>
      </form>
    </main>
  )
}
