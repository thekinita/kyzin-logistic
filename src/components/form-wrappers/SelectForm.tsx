import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition
} from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import { clsx } from 'clsx'

interface SelectProps<T> {
  label: string
  value: T
  onChange: (value: T) => void
  options: readonly T[]
}

export const SelectForm = <T extends string>({
  label,
  value,
  onChange,
  options
}: SelectProps<T>) => (
  <Listbox value={value} onChange={onChange}>
    <div className='w-full p-2 opacity-0 animate-fade-up'>
      <label className='text-sm font-medium text-gray-700 dark:text-gray-300'>
        {label}
      </label>
      <ListboxButton className='relative w-full rounded-lg border-transparent dark:bg-white/5 bg-black/5 py-2 px-3 text-left text-sm dark:text-white text-gray-500 cursor-pointer border-1 focus:outline-none focus:border-gray-300'>
        <span className='block truncate'>{value}</span>
        <ChevronDownIcon className='absolute right-2 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400' />
      </ListboxButton>
      <Transition
        enter='transition ease-in duration-200'
        enterFrom='opacity-0'
        enterTo='opacity-100'
        leave='transition ease-in duration-200'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'
      >
        <ListboxOptions className='w-full rounded-xl border border-white/5 dark:bg-white/5 bg-black/5 p-1 mt-1 focus:outline-none cursor-pointer'>
          {options.map((option) => (
            <ListboxOption
              key={option}
              value={option}
              className='group flex items-center gap-2 rounded-lg py-2 px-3 data-[focus]:bg-white/10 cursor-pointer'
            >
              <CheckIcon className='invisible size-4 dark:fill-white fill-gray-500 group-data-[selected]:visible' />
              <div className='text-sm dark:text-white text-gray-500'>
                {option}
              </div>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Transition>
    </div>
  </Listbox>
)
