import { Checkbox } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/20/solid'

interface CheckboxProps {
  label: string
  checked: boolean
  onChange: (checked: boolean) => void
}

export const CheckboxForm = ({ label, checked, onChange }: CheckboxProps) => (
  <div className='w-full p-2 opacity-0 animate-fade-up'>
    <Checkbox
      checked={checked}
      onChange={onChange}
      className='group flex items-center gap-2 cursor-pointer'
    >
      <div className='size-4 rounded-sm border border-gray-300 dark:border-white/10 bg-white dark:bg-white/5 flex items-center justify-center group-data-[checked]:bg-black dark:group-data-[checked]:bg-white'>
        <CheckIcon className='size-3 fill-white dark:fill-black invisible group-data-[checked]:visible' />
      </div>
      <span className='text-sm font-medium leading-none text-gray-700 dark:text-gray-300'>
        {label}
      </span>
    </Checkbox>
  </div>
)
