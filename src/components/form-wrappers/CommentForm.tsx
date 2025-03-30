import { clsx } from 'clsx'

interface CommentProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  className?: string
}

export const CommentForm = ({ label, className, ...props }: CommentProps) => (
  <div className="w-full p-2">
    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
      {label}
    </label>
    <textarea
      className={clsx(
        'mt-1 w-full rounded-lg border-transparent dark:bg-white/5 bg-black/5 py-2 px-3 text-sm',
        'focus:outline-none border-1 focus:border-forlight dark:focus:border-fordark data-[focus]:outline-2 data-[focus]:-outline-offset-2',
        'min-h-[100px] resize-y',
        className
      )}
      {...props}
    />
  </div>
)
