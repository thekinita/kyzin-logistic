import { clsx } from 'clsx'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  description?: string
}

export const InputForm = ({ label, description, ...props }: InputProps) => (
  <div className='w-full p-2 opacity-0 animate-fade-up'>
    <label className='text-sm font-medium'>{label}</label>
    {description && <div className='text-xs opacity-70'>{description}</div>}
    <input
      className={clsx(
        label === 'Телефон' || (label === 'Контакт на загрузке' && 'w-0/5'),
        'mt-1 w-full rounded-lg border-transparent dark:bg-white/5 bg-black/5 py-2 px-3 text-sm dark:text-white',
        'focus:outline-none border-1 focus:border-forlight dark:focus:border-fordark data-[focus]:outline-2 data-[focus]:-outline-offset-2'
      )}
      {...props}
    />
  </div>
)
