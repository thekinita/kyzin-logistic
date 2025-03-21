import { clsx } from 'clsx'
import { CalendarIcon, ClockIcon } from '@heroicons/react/20/solid'

interface DateInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  className?: string
}

export const DateInputForm = ({
  label,
  className,
  type,
  ...props
}: DateInputProps) => {
  const isDate = type === 'date'
  const Icon = isDate ? CalendarIcon : ClockIcon

  return (
    <div className="w-full p-2">
      <label className="text-sm font-medium">{label}</label>
      <div className="mt-1 relative">
        <input
          type={type}
          className={clsx(
            'w-full rounded-lg border-1 border-transparent dark:bg-white/5 bg-black/5 py-2 px-3 text-sm',
            'focus:outline-none focus:border-forlight dark:focus:border-fordark data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25',
            '[&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-inner-spin-button]:hidden [&::-webkit-clear-button]:hidden',
            className
          )}
          {...props}
        />
        <Icon
          className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 cursor-pointer transition-colors"
          onClick={(e) => {
            const input = e.currentTarget.previousSibling as HTMLInputElement
            input?.focus()
            input?.showPicker?.()
          }}
        />
      </div>
    </div>
  )
}
