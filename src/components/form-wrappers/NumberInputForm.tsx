import { clsx } from 'clsx'
import { ChangeEvent } from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  className?: string
}

export const NumberInputForm = ({
  label,
  className,
  step,
  ...props
}: InputProps) => {
  const stepValue = step ? Number(step) : 1
  const formatNumber = (value: number) => Number(value.toFixed(3))

  const handleChange = (newValue: number) => {
    const event = {
      target: { value: String(newValue) }
    } as ChangeEvent<HTMLInputElement>
    props.onChange?.(event)
  }

  return (
    <div className="w-full p-2">
      <label className="text-sm font-medium">{label}</label>
      <div className="mt-1 relative flex items-center">
        <button
          type="button"
          onClick={() => {
            const newValue = formatNumber(Number(props.value) - stepValue)
            handleChange(newValue)
          }}
          className="cursor-pointer absolute left-0 h-full w-8 flex items-center justify-center rounded-l-lg hover:bg-gray-300 dark:hover:bg-white/20 focus:border-forlight dark:focus:border-fordark transition-colors"
        >
          -
        </button>
        <input
          type="number"
          className={clsx(
            'w-full rounded-lg border-transparent dark:bg-white/5 bg-black/5 py-2 text-sm text-center',
            'focus:outline-none border-1 focus:border-forlight dark:focus:border-fordark data-[focus]:outline-2 data-[focus]:-outline-offset-2',
            '[-moz-appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none',
            className
          )}
          step={step}
          {...props}
        />
        <button
          type="button"
          onClick={() => {
            const newValue = formatNumber(Number(props.value) + stepValue)
            handleChange(newValue)
          }}
          className="cursor-pointer absolute right-0 h-full w-8 flex items-center justify-center rounded-r-lg hover:bg-gray-300 dark:hover:bg-white/20 focus:border-forlight dark:focus:border-fordark transition-colors"
        >
          +
        </button>
      </div>
    </div>
  )
}
