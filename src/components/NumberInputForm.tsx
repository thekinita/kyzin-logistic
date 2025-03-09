import { clsx } from 'clsx'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  description?: string
  className?: string
}

export const NumberInputForm = ({
  label,
  description,
  className,
  step,
  ...props
}: InputProps) => {
  const stepValue = step ? Number(step) : 1
  const formatNumber = (value: number) => Number(value.toFixed(3))

  return (
    <div className='w-full p-2 opacity-0 animate-fade-up'>
      <label className='text-sm font-medium text-gray-700 dark:text-gray-300'>
        {label}
      </label>
      <div className='mt-1 relative flex items-center'>
        <button
          type='button'
          onClick={() => {
            const newValue = formatNumber(Number(props.value) - stepValue)
            props.onChange?.({ target: { value: String(newValue) } } as any)
          }}
          className='cursor-pointer absolute left-0 h-full w-8 flex items-center justify-center rounded-l-lg text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-white/20 transition-colors'
        >
          -
        </button>
        <input
          type='number'
          className={clsx(
            'w-full rounded-lg border-transparent dark:bg-white/5 bg-black/5 py-2 text-sm dark:text-white text-center',
            'focus:outline-none border-1 focus:border-gray-300 data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25',
            '[-moz-appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none',
            className
          )}
          step={step}
          {...props}
        />
        <button
          type='button'
          onClick={() => {
            const newValue = formatNumber(Number(props.value) + stepValue)
            props.onChange?.({ target: { value: String(newValue) } } as any)
          }}
          className='cursor-pointer absolute right-0 h-full w-8 flex items-center justify-center rounded-r-lg text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-white/20 transition-colors'
        >
          +
        </button>
      </div>
    </div>
  )
}
